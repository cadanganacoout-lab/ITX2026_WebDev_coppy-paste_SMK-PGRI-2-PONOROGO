import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'
import { createPortal } from 'react-dom'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Award,
  BrainCircuit,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Globe2,
  Lightbulb,
  Mail,
  Menu,
  Moon,
  MonitorPlay,
  RotateCcw,
  Search,
  Sun,
  Sparkles,
  X,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import './App.css'

const languages = [
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文 · Mandarin' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية · Arabic' },
  { code: 'fr', label: 'Français' },
]

const featureIcons = [BrainCircuit, MonitorPlay, Award, Lightbulb]
const workflowIcons = [Globe2, BookOpen, BrainCircuit, CheckCircle2]
const roadmapMotion = {
  type: 'spring',
  stiffness: 110,
  damping: 25,
  mass: 0.85,
}
const mobileRoadmapQuery = '(max-width: 700px)'
const plannerProgressStorageKey = 'edufuture-planner-progress'
const revealEase = [0.22, 1, 0.36, 1]
const roadmapTargets = [
  'home',
  'about',
  'how-it-works',
  'courses',
  'programs',
  'impact',
  'insights',
  'community',
  'faq',
  'contact',
]
const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: revealEase } },
}
const scrollReveal = {
  hidden: { opacity: 0, y: 22, rotateX: 4 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.65, ease: revealEase } },
}

function FaqAnswer({ answer, answerId, isOpen, questionId, shouldReduceMotion }) {
  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(0)

  useLayoutEffect(() => {
    const content = contentRef.current
    if (!content) return undefined

    const updateHeight = () => setContentHeight(content.scrollHeight)
    updateHeight()

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateHeight)
      return () => window.removeEventListener('resize', updateHeight)
    }

    const observer = new ResizeObserver(updateHeight)
    observer.observe(content)
    return () => observer.disconnect()
  }, [answer])

  return (
    <motion.div
      animate={{ height: isOpen ? contentHeight : 0, opacity: isOpen ? 1 : 0 }}
      className="faq-answer"
      id={answerId}
      initial={false}
      role="region"
      aria-hidden={!isOpen}
      aria-labelledby={questionId}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      <div ref={contentRef}><p>{answer}</p></div>
    </motion.div>
  )
}

function readPlannerProgress() {
  try {
    const storedProgress = window.localStorage.getItem(plannerProgressStorageKey)
    if (!storedProgress) return {}

    const parsedProgress = JSON.parse(storedProgress)
    if (!parsedProgress || typeof parsedProgress !== 'object' || Array.isArray(parsedProgress)) {
      throw new TypeError('Saved learning-plan progress must be an object.')
    }

    return Object.fromEntries(
      Object.entries(parsedProgress).filter(([, steps]) => (
        Array.isArray(steps)
        && steps.length === 3
        && steps.every((step) => typeof step === 'boolean')
      )),
    )
  } catch (error) {
    console.error('Unable to load saved learning-plan progress.', error)
    return {}
  }
}

function projectRoadmapWaypoint(index, camera) {
  const distanceFromCamera = index - camera
  const progress = index / Math.max(roadmapTargets.length - 1, 1)
  const distanceScale = 1 - progress
  const depthScale = 0.62 + distanceScale * 0.72
  const x = 50 + Math.sin(progress * Math.PI * 2) * 16
  const y = 96 - index * (92 / (roadmapTargets.length - 1))
  const pinSize = Math.round(28 + distanceScale * 7)
  const opacity = distanceFromCamera < 0 ? 0.62 : 1
  const labelOpacity = distanceFromCamera === 0 ? 1 : 0

  return {
    depthScale,
    distanceFromCamera,
    distanceScale,
    labelOpacity,
    opacity,
    pinSize,
    x,
    y,
  }
}

function createRoadmapRibbon(points) {
  if (points.length < 2) return ''

  const toX = (point) => point.x * 10
  const toY = (point) => point.y * 5
  const samples = []
  const stepsPerSegment = 16

  for (let index = 0; index < points.length - 1; index += 1) {
    const previous = points[Math.max(0, index - 1)]
    const start = points[index]
    const end = points[index + 1]
    const next = points[Math.min(points.length - 1, index + 2)]
    const startX = toX(start)
    const startY = toY(start)
    const endX = toX(end)
    const endY = toY(end)
    const controlOneX = startX + (endX - toX(previous)) / 6
    const controlOneY = startY + (endY - toY(previous)) / 6
    const controlTwoX = endX - (toX(next) - startX) / 6
    const controlTwoY = endY - (toY(next) - startY) / 6

    for (let step = 0; step < stepsPerSegment; step += 1) {
      const t = step / stepsPerSegment
      const inverseT = 1 - t
      const x = inverseT ** 3 * startX
        + 3 * inverseT ** 2 * t * controlOneX
        + 3 * inverseT * t ** 2 * controlTwoX
        + t ** 3 * endX
      const y = inverseT ** 3 * startY
        + 3 * inverseT ** 2 * t * controlOneY
        + 3 * inverseT * t ** 2 * controlTwoY
        + t ** 3 * endY
      samples.push({ x, y })
    }
  }

  const lastPoint = points[points.length - 1]
  samples.push({ x: toX(lastPoint), y: toY(lastPoint) })

  const edges = samples.map((point, index) => {
    const previous = samples[Math.max(0, index - 1)]
    const next = samples[Math.min(samples.length - 1, index + 1)]
    const tangentX = next.x - previous.x
    const tangentY = next.y - previous.y
    const tangentLength = Math.hypot(tangentX, tangentY) || 1
    const perspective = Math.max(0, Math.min(1, (point.y - 68) / 372))
    const halfWidth = 2.25 + perspective * 0.85
    const normalX = -tangentY / tangentLength
    const normalY = tangentX / tangentLength

    return {
      left: { x: point.x + normalX * halfWidth, y: point.y + normalY * halfWidth },
      right: { x: point.x - normalX * halfWidth, y: point.y - normalY * halfWidth },
    }
  })

  const format = (point) => `${point.x.toFixed(2)} ${point.y.toFixed(2)}`
  const leftEdge = edges.map(({ left }) => left)
  const rightEdge = edges.map(({ right }) => right).reverse()
  return `M ${format(leftEdge[0])} ${leftEdge.slice(1).map((point) => `L ${format(point)}`).join(' ')} ${rightEdge.map((point) => `L ${format(point)}`).join(' ')} Z`
}

function createRoadmapPath(points) {
  if (points.length < 2) return ''
  const toX = (point) => point.x * 10
  const toY = (point) => point.y * 5
  let path = `M ${toX(points[0])} ${toY(points[0])}`

  for (let index = 0; index < points.length - 1; index += 1) {
    const previous = points[Math.max(0, index - 1)]
    const start = points[index]
    const end = points[index + 1]
    const next = points[Math.min(points.length - 1, index + 2)]
    const controlOneX = toX(start) + (toX(end) - toX(previous)) / 6
    const controlOneY = toY(start) + (toY(end) - toY(previous)) / 6
    const controlTwoX = toX(end) - (toX(next) - toX(start)) / 6
    const controlTwoY = toY(end) - (toY(next) - toY(start)) / 6
    path += ` C ${controlOneX} ${controlOneY}, ${controlTwoX} ${controlTwoY}, ${toX(end)} ${toY(end)}`
  }

  return path
}

function RoadmapWaypoint({
  activePopupIndex,
  camera,
  currentIndex,
  index,
  node,
  onPopupChange,
  target,
}) {
  const waypoint = projectRoadmapWaypoint(index, camera)
  const isCurrent = index === currentIndex
  const isPopupOpen = activePopupIndex === index
  const waypointRef = useRef(null)
  const popupRef = useRef(null)
  const closePopupTimer = useRef(null)

  useLayoutEffect(() => {
    if (!isPopupOpen) return undefined

    let frameId
    const positionPopup = () => {
      const anchor = waypointRef.current?.querySelector('.roadmap-pin')
      const popup = popupRef.current
      if (!anchor || !popup) return

      const anchorRect = anchor.getBoundingClientRect()
      const popupWidth = popup.offsetWidth
      const popupHeight = popup.offsetHeight
      const anchorCenterX = anchorRect.left + anchorRect.width / 2
      const desiredLeft = anchorCenterX - popupWidth / 2
      const left = Math.min(
        Math.max(8, desiredLeft),
        window.innerWidth - popupWidth - 8,
      )
      const openBelow = anchorRect.top - popupHeight - 12 < 8
      const desiredTop = openBelow
        ? anchorRect.bottom + 12
        : anchorRect.top - popupHeight - 12
      const top = Math.min(
        Math.max(8, desiredTop),
        window.innerHeight - popupHeight - 8,
      )
      const arrowX = Math.min(
        Math.max(18, anchorCenterX - left - 5),
        popupWidth - 18,
      )

      popup.style.left = `${left}px`
      popup.style.top = `${top}px`
      popup.style.setProperty('--popup-arrow-x', `${arrowX}px`)
      popup.classList.toggle('popup-below', openBelow)
      frameId = window.requestAnimationFrame(positionPopup)
    }

    positionPopup()
    return () => window.cancelAnimationFrame(frameId)
  }, [isPopupOpen])

  useEffect(() => () => window.clearTimeout(closePopupTimer.current), [])

  const openPopup = () => {
    window.clearTimeout(closePopupTimer.current)
    onPopupChange(index)
  }
  const schedulePopupClose = () => {
    window.clearTimeout(closePopupTimer.current)
    closePopupTimer.current = window.setTimeout(() => {
      onPopupChange((activeIndex) => activeIndex === index ? null : activeIndex)
    }, 140)
  }

  return (
    <a
      className={`roadmap-waypoint${waypoint.x < 50 ? ' label-end' : ' label-start'}${isCurrent ? ' is-current' : ''}`}
      dir="auto"
      href={`#${target}`}
      onBlur={schedulePopupClose}
      onFocus={openPopup}
      onMouseEnter={openPopup}
      onMouseLeave={schedulePopupClose}
      ref={waypointRef}
      style={{
        '--waypoint-x': `${waypoint.x}%`,
        '--waypoint-y': `${waypoint.y}%`,
        '--waypoint-size': `${waypoint.pinSize}px`,
        '--waypoint-depth': `${Math.round(waypoint.depthScale * 36)}px`,
        '--waypoint-distance': waypoint.distanceScale,
        '--waypoint-label-opacity': isCurrent ? 1 : waypoint.labelOpacity,
        opacity: isCurrent ? 1 : waypoint.opacity,
        zIndex: isCurrent ? 20 : Math.round(1 + waypoint.depthScale * 10),
      }}
      aria-label={`${String(index + 1).padStart(2, '0')}: ${node.title}`}
      aria-describedby={isPopupOpen ? `roadmap-tooltip-${target}` : undefined}
      aria-current={isCurrent ? 'step' : undefined}
      tabIndex={waypoint.distanceFromCamera < 0 ? -1 : 0}
    >
      <span className="roadmap-pin" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="roadmap-waypoint-label">{node.title}</span>
      {isPopupOpen && createPortal(
        <span
          className="roadmap-waypoint-popup roadmap-floating-popup"
          id={`roadmap-tooltip-${target}`}
          onMouseEnter={openPopup}
          onMouseLeave={schedulePopupClose}
          ref={popupRef}
          role="tooltip"
        >
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{node.title}</strong>
          <span className="roadmap-waypoint-description">{node.description}</span>
        </span>,
        document.body,
      )}
    </a>
  )
}

function App() {
  const { t, i18n } = useTranslation()
  const currentLanguage = languages.some(({ code }) => code === i18n.language)
    ? i18n.language
    : 'en'
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobileRoadmap, setIsMobileRoadmap] = useState(
    () => window.matchMedia(mobileRoadmapQuery).matches,
  )
  const [courseFilter, setCourseFilter] = useState('all')
  const [courseSearch, setCourseSearch] = useState('')
  const [plannerTrack, setPlannerTrack] = useState('ai')
  const [plannerHours, setPlannerHours] = useState('2')
  const [plannerProgress, setPlannerProgress] = useState(readPlannerProgress)
  const [roadmapCamera, setRoadmapCamera] = useState(0)
  const [roadmapPopupIndex, setRoadmapPopupIndex] = useState(null)
  const [roadmapSceneSize, setRoadmapSceneSize] = useState({ width: 0, height: 0 })
  const [movingWordState, setMovingWordState] = useState({
    language: currentLanguage,
    index: 0,
  })
  const [openFaqItems, setOpenFaqItems] = useState(() => new Set())
  const shouldReduceMotion = useReducedMotion()
  const roadmapSceneRef = useRef(null)
  const revealVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0 } } }
    : reveal
  const scrollRevealVariants = shouldReduceMotion ? revealVariants : scrollReveal
  const scrollFrame = useRef(0)
  const [darkMode, setDarkMode] = useState(() => (
    window.localStorage.getItem('edtech-theme') === 'dark'
  ))
  const featureCards = t('programs.items', { returnObjects: true })
  const workflowSteps = t('how.steps', { returnObjects: true })
  const roadmapNodes = t('roadmap.nodes', { returnObjects: true })
  const courses = t('courses.items', { returnObjects: true })
  const plannerSteps = t('planner.steps', { returnObjects: true })
  const faqItems = t('faq.items', { returnObjects: true })
  const movingWords = t('hero.movingWords', { returnObjects: true })
  const heroMetrics = t('heroMetrics', { returnObjects: true })
  const aboutHighlights = t('aboutHighlights', { returnObjects: true })
  const filteredCourses = useMemo(() => courses.filter((course) => {
    const matchesFilter = courseFilter === 'all' || course.category === courseFilter
    const query = courseSearch.trim().toLocaleLowerCase()
    const matchesSearch = !query || `${course.title} ${course.skills.join(' ')}`.toLocaleLowerCase().includes(query)
    return matchesFilter && matchesSearch
  }), [courses, courseFilter, courseSearch])
  const selectedPlannerCourse = courses.find((course) => course.category === plannerTrack) || courses[0]
  const selectedPlannerProgress = plannerProgress[selectedPlannerCourse?.category] || []
  const plannerCompletedCount = selectedPlannerProgress.filter(Boolean).length
  const movingWordIndex = movingWordState.language === currentLanguage
    ? movingWordState.index
    : 0
  const wordSlideDirection = currentLanguage === 'ar' ? -1 : 1

  useEffect(() => {
    if (shouldReduceMotion || movingWords.length < 2) return undefined

    const interval = window.setInterval(() => {
      setMovingWordState((state) => ({
        language: currentLanguage,
        index: state.language === currentLanguage
          ? (state.index + 1) % movingWords.length
          : 1 % movingWords.length,
      }))
    }, 2600)

    return () => window.clearInterval(interval)
  }, [currentLanguage, movingWords.length, shouldReduceMotion])

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileRoadmapQuery)
    const updateMobileRoadmapMotion = () => setIsMobileRoadmap(mediaQuery.matches)

    updateMobileRoadmapMotion()
    mediaQuery.addEventListener('change', updateMobileRoadmapMotion)
    return () => mediaQuery.removeEventListener('change', updateMobileRoadmapMotion)
  }, [])

  useLayoutEffect(() => {
    const scene = roadmapSceneRef.current
    if (!scene) return undefined

    const updateSceneSize = () => {
      const { width, height } = scene.getBoundingClientRect()
      setRoadmapSceneSize({ width, height })
    }
    updateSceneSize()

    const observer = new ResizeObserver(updateSceneSize)
    observer.observe(scene)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateDocumentLanguage = (language) => {
      document.documentElement.lang = language
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    }

    updateDocumentLanguage(i18n.resolvedLanguage || i18n.language)
    i18n.on('languageChanged', updateDocumentLanguage)
    return () => i18n.off('languageChanged', updateDocumentLanguage)
  }, [i18n])

  useEffect(() => {
    try {
      window.localStorage.setItem(plannerProgressStorageKey, JSON.stringify(plannerProgress))
    } catch (error) {
      console.error('Unable to save learning-plan progress.', error)
    }
  }, [plannerProgress])

  useEffect(() => {
    const cancelScroll = () => {
      window.cancelAnimationFrame(scrollFrame.current)
      scrollFrame.current = 0
    }
    const cancelScrollFromKey = (event) => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) {
        cancelScroll()
      }
    }

    window.addEventListener('wheel', cancelScroll, { passive: true })
    window.addEventListener('touchstart', cancelScroll, { passive: true })
    window.addEventListener('keydown', cancelScrollFromKey)
    return () => {
      cancelScroll()
      window.removeEventListener('wheel', cancelScroll)
      window.removeEventListener('touchstart', cancelScroll)
      window.removeEventListener('keydown', cancelScrollFromKey)
    }
  }, [])

  const changeLanguage = (event) => {
    window.localStorage.setItem('edtech-language', event.target.value)
    i18n.changeLanguage(event.target.value)
  }

  const toggleTheme = () => {
    setDarkMode((isDark) => {
      window.localStorage.setItem('edtech-theme', isDark ? 'light' : 'dark')
      return !isDark
    })
  }

  const closeMenu = () => setMenuOpen(false)
  const roadmapZoom = 1 + roadmapCamera * 0.1
  const roadmapProgress = roadmapNodes.length > 1
    ? roadmapCamera / (roadmapNodes.length - 1)
    : 0
  const roadmapFocus = projectRoadmapWaypoint(roadmapCamera, roadmapCamera)
  const roadmapFocusScreenX = roadmapSceneSize.width * (roadmapCamera >= 3 ? 0.56 : 0.5)
  const roadmapFocusScreenY = roadmapSceneSize.height * 0.5
  const roadmapWaypointX = (roadmapFocus.x / 100) * roadmapSceneSize.width
  const roadmapWaypointY = (roadmapFocus.y / 100) * roadmapSceneSize.height
  const roadmapCameraPanX = roadmapFocusScreenX - roadmapSceneSize.width * 0.5
    - (roadmapWaypointX - roadmapSceneSize.width * 0.5) * roadmapZoom
  const roadmapCameraPanY = roadmapFocusScreenY - roadmapSceneSize.height * 0.5
    - (roadmapWaypointY - roadmapSceneSize.height * 0.5) * roadmapZoom
  const roadmapMotionTransition = isMobileRoadmap
    || shouldReduceMotion
    ? { type: 'tween', duration: 0 }
    : roadmapMotion
  const roadmapPath = createRoadmapPath(
    roadmapNodes.map((_, index) => projectRoadmapWaypoint(index, 0)),
  )
  const roadmapRibbonPath = createRoadmapRibbon(
    roadmapNodes.map((_, index) => projectRoadmapWaypoint(index, 0)),
  )
  const changeRoadmapCamera = (direction) => {
    setRoadmapPopupIndex(null)
    setRoadmapCamera((position) => Math.min(
      roadmapNodes.length - 1,
      Math.max(0, position + direction),
    ))
  }

  useLayoutEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const previousPaddingInlineEnd = document.body.style.paddingInlineEnd
    const computedPaddingInlineEnd = window.getComputedStyle(document.body).paddingInlineEnd
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.paddingInlineEnd = `calc(${computedPaddingInlineEnd} + ${scrollbarWidth}px)`
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.paddingInlineEnd = previousPaddingInlineEnd
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  const handleInternalNavigation = (event) => {
    if (!(event.target instanceof Element)) return

    const link = event.target.closest('a[href*="#"]')
    if (!link) return

    const destination = new URL(link.href, window.location.href)
    if (
      destination.origin !== window.location.origin
      || destination.pathname !== window.location.pathname
      || destination.search !== window.location.search
      || !destination.hash
    ) return

    const target = document.getElementById(decodeURIComponent(destination.hash.slice(1)))
    if (!target) return

    event.preventDefault()
    window.cancelAnimationFrame(scrollFrame.current)
    closeMenu()
    window.history.pushState(null, '', destination.hash)

    const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0
    const targetTop = Math.max(
      0,
      Math.min(
        target.getBoundingClientRect().top + window.scrollY - headerHeight - 16,
        document.documentElement.scrollHeight - window.innerHeight,
      ),
    )
    const startTop = window.scrollY
    const distance = targetTop - startTop
    const duration = Math.min(850, Math.max(450, Math.abs(distance) * 0.35))
    let startTime

    const animateScroll = (time) => {
      startTime ??= time
      const progress = Math.min((time - startTime) / duration, 1)
      const easedProgress = progress < 0.5
        ? 4 * progress ** 3
        : 1 - ((-2 * progress + 2) ** 3) / 2

      window.scrollTo(0, startTop + distance * easedProgress)
      if (progress < 1) {
        scrollFrame.current = window.requestAnimationFrame(animateScroll)
      } else {
        scrollFrame.current = 0
      }
    }

    scrollFrame.current = window.requestAnimationFrame(animateScroll)
  }

  const toggleFaqItem = (index) => {
    setOpenFaqItems((openItems) => {
      const nextOpenItems = new Set(openItems)
      if (nextOpenItems.has(index)) nextOpenItems.delete(index)
      else nextOpenItems.add(index)
      return nextOpenItems
    })
  }

  const togglePlannerStep = (stepIndex) => {
    setPlannerProgress((progress) => {
      const steps = [...(progress[selectedPlannerCourse.category] || [false, false, false])]
      steps[stepIndex] = !steps[stepIndex]
      return { ...progress, [selectedPlannerCourse.category]: steps }
    })
  }

  const resetPlannerProgress = () => {
    setPlannerProgress((progress) => {
      const nextProgress = { ...progress }
      delete nextProgress[selectedPlannerCourse.category]
      return nextProgress
    })
  }

  return (
    <div
      className="site-shell"
      data-theme={darkMode ? "dark" : "light"}
      onClick={handleInternalNavigation}
    >
      <header className="site-header">
        <div className="site-header-inner">
          <a
            className="brand"
            href="#home"
            onClick={closeMenu}
            aria-label={t("ui.homeLabel")}
          >
            <span className="brand-mark">
              <Globe2 size={19} strokeWidth={2.2} />
            </span>
            <span>
              Edu<span className="brand-accent">Future</span>
            </span>
          </a>

          <button
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={menuOpen}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <button
            aria-hidden={!menuOpen}
            aria-label={t("nav.closeMenu")}
            className={`menu-backdrop${menuOpen ? " is-open" : ""}`}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            type="button"
          />
          <nav
            className={`main-nav${menuOpen ? " is-open" : ""}`}
            aria-label={t("nav.label")}
          >
            <div className="mobile-nav-heading">
              <span className="mobile-nav-brand-mark">
                <Globe2 size={19} strokeWidth={2.2} />
              </span>
              <span className="mobile-nav-brand-copy">
                <strong>
                  Edu<span className="brand-accent">Future</span>
                </strong>
                <small>{t("nav.label")}</small>
              </span>
              <button
                aria-label={t("nav.closeMenu")}
                className="mobile-nav-close"
                onClick={closeMenu}
                type="button"
              >
                <X size={21} />
              </button>
            </div>
            <a href="#about" onClick={closeMenu}>
              {t("nav.about")}
            </a>
            <a href="#roadmap" onClick={closeMenu}>
              {t("nav.roadmap")}
            </a>
            <a href="#how-it-works" onClick={closeMenu}>
              {t("nav.how")}
            </a>
            <a href="#courses" onClick={closeMenu}>
              {t("nav.courses")}
            </a>
            <a href="#insights" onClick={closeMenu}>
              {t("nav.insights")}
            </a>
            <a href="#faq" onClick={closeMenu}>
              {t("nav.faq")}
            </a>
            <label className="language-picker">
              <span className="sr-only">{t("nav.language")}</span>
              <Globe2 aria-hidden="true" size={16} />
              <select
                value={currentLanguage}
                onChange={changeLanguage}
                aria-label={t("nav.language")}
              >
                {languages.map(({ code, label }) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={
                darkMode ? t("theme.switchToLight") : t("theme.switchToDark")
              }
              title={
                darkMode ? t("theme.switchToLight") : t("theme.switchToDark")
              }
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
              <span>{darkMode ? t("theme.light") : t("theme.dark")}</span>
            </button>
            <a className="nav-cta" href="#programs" onClick={closeMenu}>
              {t("nav.cta")} <ArrowRight aria-hidden="true" size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={revealVariants}
          >
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {t("hero.eyebrow")}
            </p>
            <h1>
              {t("hero.title")} <span>{t("hero.highlight")}</span>
            </h1>
            <p className="hero-wordline" aria-label={movingWords.join(", ")}>
              <Sparkles aria-hidden="true" size={15} />
              {shouldReduceMotion ? (
                <span>{movingWords[0]}</span>
              ) : (
                <span className="hero-word-window" aria-hidden="true">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.span
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      className="hero-moving-word"
                      exit={{ opacity: 0, x: wordSlideDirection * -28, filter: "blur(2px)" }}
                      initial={{ opacity: 0, x: wordSlideDirection * 28, filter: "blur(2px)" }}
                      key={`${currentLanguage}-${movingWordIndex}`}
                      transition={{ duration: 0.48, ease: revealEase }}
                    >
                      {movingWords[movingWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              )}
            </p>
            <p className="hero-description">{t("hero.description")}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#courses">
                {t("hero.primary")} <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="button button-secondary" href="#about">
                {t("hero.secondary")}
              </a>
            </div>
            <div className="hero-metrics" aria-label={t("ui.heroMetricsLabel")}>
              {heroMetrics.map((metric) => (
                <div className="hero-metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <span>{t("hero.note")}</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-art"
            aria-label={t("hero.artLabel")}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : { rotateY: -5, rotateX: 2, y: -3 }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: revealEase,
            }}
            role="img"
          >
            <span className="hero-orbit-ring" aria-hidden="true" />
            <span className="hero-orbit-dot hero-orbit-dot-one" aria-hidden="true" />
            <span className="hero-orbit-dot hero-orbit-dot-two" aria-hidden="true" />
            <span className="hero-sparkle" aria-hidden="true"><Sparkles size={18} /></span>
            <div className="art-grid" />
            <span className="art-tag tag-top">{t("hero.artTagTop")}</span>
            <div className="learning-scene" aria-hidden="true">
              <span className="learning-halo" />
              <div className="learning-book">
                <span className="book-cover" />
                <div className="book-spread">
                  <div className="book-page book-page-left">
                    <span className="page-label">01 / {t("hero.screenKicker")}</span>
                    <span className="page-illustration"><BrainCircuit size={29} /></span>
                    <span className="page-line page-line-short" />
                    <span className="page-line" />
                    <span className="page-line page-line-medium" />
                  </div>
                  <div className="book-page book-page-right">
                    <span className="page-heading">{t("hero.screenTitle")}</span>
                    <span className="page-line" />
                    <span className="page-line page-line-medium" />
                    <span className="page-line" />
                    <span className="page-progress"><i /></span>
                  </div>
                </div>
                <span className="book-spine" />
              </div>
              <div className="learning-float learning-float-idea">
                <BrainCircuit size={17} />
                <span>01</span>
              </div>
              <div className="learning-float learning-float-play">
                <MonitorPlay size={17} />
                <span>02</span>
              </div>
              <div className="learning-float learning-float-achieve">
                <Award size={17} />
                <span>03</span>
              </div>
            </div>
            <span className="art-tag tag-bottom">{t("hero.artTagBottom")}</span>
            <div className="floating-chip">
              <BrainCircuit size={18} />
              <span>AI</span>
            </div>
          </motion.div>

          <a className="scroll-cue" href="#about" aria-label={t("hero.scroll")}>
            <ArrowDown size={16} />
          </a>
        </section>

        <section
          className="theme-statement section-wrap"
          aria-label={t("hero.themeLabel")}
        >
          <span className="theme-rule" />
          <p>{t("hero.themeLabel")}</p>
          <span className="theme-rule" />
        </section>

        <section className="intro-section" id="about">
          <motion.div
            className="section-wrap intro-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={scrollRevealVariants}
          >
            <div>
              <p className="eyebrow">{t("about.eyebrow")}</p>
              <h2>{t("about.title")}</h2>
            </div>
            <div className="intro-copy">
              <p>{t("about.description")}</p>
              <a className="text-link" href="#programs">
                {t("about.link")} <ArrowRight aria-hidden="true" size={17} />
              </a>
            </div>
            <div className="intro-highlights" aria-label={t("ui.highlightsLabel")}>
              {aboutHighlights.map((item) => (
                <article className="intro-highlight" key={item.title}>
                  <span className="intro-highlight-mark" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="roadmap-section section-wrap" id="roadmap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("roadmap.eyebrow")}</p>
              <h2>{t("roadmap.title")}</h2>
            </div>
            <p className="section-side-note">{t("roadmap.description")}</p>
          </div>

          <div className="roadmap-map">
            <div className="roadmap-toolbar">
              <div className="roadmap-progress-copy">
                <span className="roadmap-progress-label">
                  {t("roadmap.stepLabel")} {String(roadmapCamera + 1).padStart(2, '0')} / {String(roadmapNodes.length).padStart(2, '0')}
                </span>
                <strong>{roadmapNodes[roadmapCamera]?.title}</strong>
                <div
                  aria-label={`${t("roadmap.progressLabel")}: ${Math.round(roadmapProgress * 100)}%`}
                  aria-valuemax={roadmapNodes.length - 1}
                  aria-valuemin={0}
                  aria-valuenow={roadmapCamera}
                  className="roadmap-progress-track"
                  role="progressbar"
                >
                  <span style={{ width: `${roadmapProgress * 100}%` }} />
                </div>
              </div>
              <div className="roadmap-toolbar-controls">
                <button
                  aria-label={t("roadmap.previous")}
                  className="roadmap-control-button"
                  disabled={roadmapCamera === 0}
                  onClick={() => changeRoadmapCamera(-1)}
                  type="button"
                >
                  <ChevronLeft aria-hidden="true" size={18} />
                </button>
                <button
                  aria-label={t("roadmap.restart")}
                  className="roadmap-control-button roadmap-restart-button"
                  disabled={roadmapCamera === 0}
                  onClick={() => {
                    setRoadmapPopupIndex(null)
                    setRoadmapCamera(0)
                  }}
                  type="button"
                >
                  <RotateCcw aria-hidden="true" size={16} />
                  <span>{t("roadmap.restart")}</span>
                </button>
                <button
                  aria-label={t("roadmap.next")}
                  className="roadmap-control-button roadmap-next-button"
                  disabled={roadmapCamera >= roadmapNodes.length - 1}
                  onClick={() => changeRoadmapCamera(1)}
                  type="button"
                >
                  <ChevronRight aria-hidden="true" size={18} />
                </button>
              </div>
            </div>
            <div
              aria-label={t("ui.roadmapMapLabel")}
              className={`roadmap-scene${roadmapCamera >= roadmapNodes.length - 1 ? ' is-max-zoom' : ''}`}
              ref={roadmapSceneRef}
              onClick={(event) => {
                if (
                  event.target instanceof Element
                  && event.target.closest('.roadmap-waypoint')
                ) return
                changeRoadmapCamera(1)
              }}
              onContextMenu={(event) => {
                event.preventDefault()
                changeRoadmapCamera(-1)
              }}
              onKeyDown={(event) => {
                if (event.target !== event.currentTarget) return
                const direction = event.key === 'ArrowRight' ? 1
                  : event.key === 'ArrowLeft' ? -1
                    : event.key === 'Enter' || event.key === ' ' ? 1
                      : 0
                if (!direction) return
                event.preventDefault()
                changeRoadmapCamera(direction)
              }}
              role="group"
              tabIndex={0}
            >
              <span className="roadmap-camera-status" aria-live="polite">
                {t("roadmap.stepLabel")} {String(roadmapCamera + 1).padStart(2, '0')} / {String(roadmapNodes.length).padStart(2, '0')} · {roadmapZoom.toFixed(1)}×
              </span>
              <motion.div
                animate={{
                  x: roadmapCameraPanX,
                  y: roadmapCameraPanY,
                  scale: roadmapZoom,
                  rotateX: 7,
                }}
                className="roadmap-world"
                initial={false}
                style={{ transformPerspective: 1200 }}
                transition={roadmapMotionTransition}
              >
                <svg
                  aria-hidden="true"
                  className="roadmap-road"
                  preserveAspectRatio="none"
                  viewBox="0 0 1000 500"
                >
                  <defs>
                    <linearGradient id="roadmap-line-depth" x1="0%" x2="0%" y1="100%" y2="0%">
                      <stop offset="0" stopColor="#2864ba" />
                      <stop offset="0.5" stopColor="#568bd5" />
                      <stop offset="1" stopColor="#a8d5fb" />
                    </linearGradient>
                    <linearGradient id="roadmap-progress-glow" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0" stopColor="#f0bd63" />
                      <stop offset="1" stopColor="#ffe5a8" />
                    </linearGradient>
                  </defs>
                  <path
                    className="roadmap-ribbon-shadow"
                    d={roadmapRibbonPath}
                  />
                  <path
                    className="roadmap-ribbon"
                    d={roadmapRibbonPath}
                  />
                  <path
                    className="roadmap-trail-shadow"
                    d={roadmapPath}
                  />
                  <path
                    id="roadmap-route-path"
                    className="roadmap-trail-base"
                    d={roadmapPath}
                  />
                  <path
                    className="roadmap-trail-highlight"
                    d={roadmapPath}
                  />
                  <path
                    className="roadmap-trail-center"
                    d={roadmapPath}
                  />
                  <path
                    className="roadmap-progress-path"
                    d={roadmapPath}
                    pathLength="1"
                    style={{
                      strokeDasharray: 1,
                      strokeDashoffset: 1 - roadmapProgress,
                    }}
                  />
                </svg>
                {roadmapNodes.map((node, index) => (
                  <RoadmapWaypoint
                    index={index}
                    key={roadmapTargets[index]}
                    node={node}
                    camera={roadmapCamera}
                    currentIndex={roadmapCamera}
                    activePopupIndex={roadmapPopupIndex}
                    onPopupChange={setRoadmapPopupIndex}
                    target={roadmapTargets[index]}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="how-section section-wrap" id="how-it-works">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("how.eyebrow")}</p>
              <h2>{t("how.title")}</h2>
            </div>
            <p className="section-side-note">{t("how.description")}</p>
          </div>
          <div className="workflow-grid">
            {workflowSteps.map((step, index) => {
              const Icon = workflowIcons[index];
              return (
                <motion.article
                  className="workflow-step"
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={scrollRevealVariants}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className="workflow-number">0{index + 1}</span>
                  <span className="workflow-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="impact-section section-wrap" id="impact">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("prototypeScope.eyebrow")}</p>
              <h2>{t("prototypeScope.title")}</h2>
            </div>
            <p className="section-side-note">{t("prototypeScope.description")}</p>
          </div>
          <div className="impact-grid">
            {t("prototypeScope.items", { returnObjects: true }).map((item, index) => (
              <motion.div
                className="impact-item"
                key={`${item.label}-${index}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={scrollRevealVariants}
                transition={{ delay: index * 0.08 }}
              >
                <span className="impact-value">{item.value}</span>
                <span className="impact-label">{item.label}</span>
                <span className="impact-detail">{item.detail}</span>
              </motion.div>
            ))}
          </div>
          <p className="prototype-scope-note">{t("prototypeScope.note")}</p>
        </section>

        <section className="courses-section" id="courses">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{t("courses.eyebrow")}</p>
                <h2>{t("courses.title")}</h2>
              </div>
              <p className="section-side-note">{t("courses.description")}</p>
            </div>
            <div className="course-controls">
              <div
                className="course-filters"
                role="group"
                aria-label={t("courses.filterLabel")}
              >
                {t("courses.filters", { returnObjects: true }).map((filter) => (
                  <button
                    className={
                      courseFilter === filter.id
                        ? "filter-chip is-active"
                        : "filter-chip"
                    }
                    key={filter.id}
                    type="button"
                    aria-pressed={courseFilter === filter.id}
                    onClick={() => setCourseFilter(filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              <label className="course-search">
                <Search size={16} aria-hidden="true" />
                <span className="sr-only">{t("courses.searchLabel")}</span>
                <input
                  type="search"
                  value={courseSearch}
                  onChange={(event) => setCourseSearch(event.target.value)}
                  placeholder={t("courses.searchPlaceholder")}
                />
              </label>
            </div>
            <div className="course-grid">
              {filteredCourses.map((course, index) => (
                <motion.article
                  className="course-card"
                  key={course.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={scrollRevealVariants}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className={`course-visual course-visual-${index % 4}`}>
                    <span>{course.label}</span>
                    <BookOpen size={28} strokeWidth={1.5} />
                  </div>
                  <div className="course-content">
                    <div className="course-meta">
                      <span>{course.level}</span>
                      <span>{course.duration}</span>
                    </div>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <div className="skill-list">
                      {course.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                    <a href="#how-it-works">
                      {t("courses.viewCourse")} <ArrowRight size={15} />
                    </a>
                  </div>
                </motion.article>
              ))}
              {filteredCourses.length === 0 && (
                <p className="no-courses">{t("courses.empty")}</p>
              )}
            </div>
            <section className="learning-planner" aria-labelledby="planner-title">
              <div className="planner-heading">
                <div>
                  <p className="eyebrow">{t('planner.eyebrow')}</p>
                  <h3 id="planner-title">{t('planner.title')}</h3>
                  <p>{t('planner.description')}</p>
                </div>
                <div className="planner-controls">
                  <label>
                    <span>{t('planner.trackLabel')}</span>
                    <select
                      value={selectedPlannerCourse?.category || ''}
                      onChange={(event) => setPlannerTrack(event.target.value)}
                    >
                      {courses.map((course) => (
                        <option key={course.category} value={course.category}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>{t('planner.timeLabel')}</span>
                    <select
                      value={plannerHours}
                      onChange={(event) => setPlannerHours(event.target.value)}
                    >
                      {[2, 4, 6].map((hours) => (
                        <option key={hours} value={hours}>
                          {t('planner.hoursOption', { hours })}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
              {selectedPlannerCourse && (
                <>
                  <div className="planner-progress">
                    <span>
                      {t('planner.progress', {
                        completed: plannerCompletedCount,
                        total: plannerSteps.length,
                      })}
                    </span>
                    <progress
                      aria-label={t('planner.progressLabel')}
                      max={plannerSteps.length}
                      value={plannerCompletedCount}
                    />
                  </div>
                  <ol className="planner-steps">
                    {plannerSteps.map((step, index) => (
                      <li
                        className={`planner-step${selectedPlannerProgress[index] ? ' is-complete' : ''}`}
                        key={step.week}
                      >
                        <label>
                          <input
                            checked={Boolean(selectedPlannerProgress[index])}
                            onChange={() => togglePlannerStep(index)}
                            type="checkbox"
                          />
                          <span className="planner-step-copy">
                            <span className="planner-week">{step.week}</span>
                            <strong>{t(`planner.steps.${index}.title`, {
                              skill: selectedPlannerCourse.skills[index],
                            })}</strong>
                            <span>{t(`planner.steps.${index}.description`, {
                              skill: selectedPlannerCourse.skills[index],
                              hours: plannerHours,
                            })}</span>
                          </span>
                        </label>
                      </li>
                    ))}
                  </ol>
                </>
              )}
              <div className="planner-note">
                <p>{t('planner.note')}</p>
                <button
                  className="planner-reset"
                  onClick={resetPlannerProgress}
                  type="button"
                >
                  <RotateCcw aria-hidden="true" size={15} />
                  {t('planner.reset')}
                </button>
              </div>
            </section>
          </div>
        </section>

        <section className="program-section" id="programs">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{t("programs.eyebrow")}</p>
                <h2>{t("programs.title")}</h2>
              </div>
              <p className="section-side-note">{t("programs.description")}</p>
            </div>
            <div className="program-grid">
              {featureCards.map((item, index) => {
                const Icon = featureIcons[index];
                return (
                  <motion.article
                    className="program-card"
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={scrollRevealVariants}
                    transition={{ delay: index * 0.08 }}
                  >
                    <span className="card-number">0{index + 1}</span>
                    <span className="card-icon">
                      <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a
                      href="#courses"
                      aria-label={`${t("programs.discover")} ${item.title}`}
                    >
                      {t("programs.discover")}{" "}
                      <ArrowRight aria-hidden="true" size={16} />
                    </a>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="insights-section section-wrap" id="insights">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("references.eyebrow")}</p>
              <h2>{t("references.title")}</h2>
            </div>
            <p className="section-side-note">{t("references.description")}</p>
          </div>
          <div className="insights-grid">
            {t("references.items", { returnObjects: true }).map((item) => (
              <article className="insight-card" key={item.title}>
                <span className="insight-category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="insight-source">{item.source}</span>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {t("references.readMore")} <ExternalLink size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="community-section" id="community">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{t("community.eyebrow")}</p>
                <h2>{t("community.title")}</h2>
              </div>
              <p className="section-side-note">{t("community.description")}</p>
            </div>
            <div className="community-grid">
              {t("community.roles", { returnObjects: true }).map(
                (role, index) => (
                  <article className="community-card" key={role.title}>
                    <span>0{index + 1}</span>
                    <h3>{role.title}</h3>
                    <p>{role.description}</p>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="faq-section section-wrap" id="faq">
          <div className="faq-heading">
            <p className="eyebrow">{t("faq.eyebrow")}</p>
            <h2>{t("faq.title")}</h2>
            <p>{t("faq.description")}</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openFaqItems.has(index);
              const questionId = `faq-question-${index}`;
              const answerId = `faq-answer-${index}`;
              return (
                <div
                  className={`faq-item${isOpen ? " is-open" : ""}`}
                  key={item.question}
                >
                  <button
                    aria-controls={answerId}
                    aria-expanded={isOpen}
                    className="faq-trigger"
                    id={questionId}
                    onClick={() => toggleFaqItem(index)}
                    type="button"
                  >
                    {item.question}
                    <ChevronDown size={18} />
                  </button>
                  <FaqAnswer
                    answer={item.answer}
                    answerId={answerId}
                    isOpen={isOpen}
                    questionId={questionId}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">{t("contact.eyebrow")}</p>
              <h2>{t("contact.title")}</h2>
              <p>{t("contact.description")}</p>
            </div>
            <div className="contact-action">
              <Mail size={21} />
              {import.meta.env.VITE_CONTACT_EMAIL ? (
                <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}>
                  {import.meta.env.VITE_CONTACT_EMAIL}
                </a>
              ) : (
                <span>{t("contact.pending")}</span>
              )}
              <small>{t("contact.note")}</small>
            </div>
          </div>
        </section>

        <section className="participate-section section-wrap" id="participate">
          <div className="participate-panel">
            <div className="participate-mark">
              <Globe2 size={23} />
            </div>
            <div className="participate-copy">
              <p className="eyebrow">{t("participate.eyebrow")}</p>
              <h2>{t("participate.title")}</h2>
              <p>{t("participate.description")}</p>
            </div>
            <a className="button button-light" href="#courses">
              {t("participate.cta")} <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-identity">
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark">
                <Globe2 size={19} strokeWidth={2.2} />
              </span>
              <span>
                Edu<span className="brand-accent">Future</span>
              </span>
            </a>
            <p>{t("footer.tagline")}</p>
          </div>
          <nav aria-label={t("nav.label")} className="footer-links">
            <a href="#about">{t("nav.about")}</a>
            <a href="#roadmap">{t("nav.roadmap")}</a>
            <a href="#programs">{t("nav.programs")}</a>
            <a href="#courses">{t("courses.title")}</a>
            <a href="#insights">{t("references.title")}</a>
            <a href="#faq">{t("faq.title")}</a>
          </nav>
        </div>
        <div className="footer-bottom section-wrap">
          <span className="copyright">{t("footer.copyright")}</span>
          <a className="footer-back-to-top" href="#home">
            <span>{t("footer.backToTop")}</span>
            <ArrowUp aria-hidden="true" size={15} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App
