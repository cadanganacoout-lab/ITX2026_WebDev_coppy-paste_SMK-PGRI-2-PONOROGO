import { useEffect, useId, useRef, useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import './SelectField.css'

export default function SelectField({ ariaLabel, className = '', onChange, options, value }) {
  const id = useId()
  const rootRef = useRef(null)
  const triggerRef = useRef(null)
  const optionRefs = useRef([])
  const pendingFocusIndex = useRef(null)
  const [open, setOpen] = useState(false)
  const selectedIndex = options.findIndex((option) => option.value === value)

  useEffect(() => {
    if (!open) return undefined

    const frame = window.requestAnimationFrame(() => {
      const index = pendingFocusIndex.current ?? (selectedIndex >= 0 ? selectedIndex : 0)
      pendingFocusIndex.current = null
      const nextIndex = (index + options.length) % options.length
      optionRefs.current[nextIndex]?.focus()
    })
    const closeOnOutsideClick = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      window.cancelAnimationFrame(frame)
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open, options.length, selectedIndex])

  const focusOption = (index) => {
    const nextIndex = (index + options.length) % options.length
    optionRefs.current[nextIndex]?.focus()
  }

  const handleTriggerKeyDown = (event) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
    event.preventDefault()
    const index = selectedIndex >= 0 ? selectedIndex : 0
    pendingFocusIndex.current = event.key === 'ArrowUp' ? index - 1 : index
    setOpen(true)
  }

  const handleOptionKeyDown = (event, index) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      focusOption(index + 1)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      focusOption(index - 1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      focusOption(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      focusOption(options.length - 1)
    } else if (event.key === 'Tab') {
      setOpen(false)
    }
  }

  const selectedOption = options.find((option) => option.value === value)

  return (
    <div className={`select-field${open ? ' is-open' : ''}${className ? ` ${className}` : ''}`} ref={rootRef}>
      <button
        aria-controls={`${id}-options`}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        className="select-field-trigger"
        onClick={() => setOpen((isOpen) => !isOpen)}
        onKeyDown={handleTriggerKeyDown}
        ref={triggerRef}
        type="button"
      >
        <span className="select-field-value">{selectedOption?.label ?? ''}</span>
        <ChevronDown aria-hidden="true" className="select-field-chevron" size={18} />
      </button>
      {open && (
        <>
          <button
            aria-label={ariaLabel}
            className="select-field-backdrop"
            onClick={() => {
              setOpen(false)
              triggerRef.current?.focus()
            }}
            tabIndex={-1}
            type="button"
          />
          <div
            aria-label={ariaLabel}
            className="select-field-options"
            id={`${id}-options`}
            role="listbox"
          >
            {options.map((option, index) => {
              const selected = option.value === value
              return (
                <button
                  aria-selected={selected}
                  className={`select-field-option${selected ? ' is-selected' : ''}`}
                  key={option.value}
                  onClick={() => {
                    onChange(option.value)
                    setOpen(false)
                    triggerRef.current?.focus()
                  }}
                  onKeyDown={(event) => handleOptionKeyDown(event, index)}
                  ref={(element) => { optionRefs.current[index] = element }}
                  role="option"
                  tabIndex={selected || (selectedIndex < 0 && index === 0) ? 0 : -1}
                  type="button"
                >
                  <span>{option.label}</span>
                  {selected && <Check aria-hidden="true" className="select-field-check" size={20} />}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
