import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  Award,
  BrainCircuit,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Globe2,
  Lightbulb,
  Mail,
  Menu,
  Moon,
  MonitorPlay,
  Search,
  Sun,
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
const workflowIcons = [Globe2, BookOpen, BrainCircuit, Award]
const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

function App() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [courseFilter, setCourseFilter] = useState('all')
  const [courseSearch, setCourseSearch] = useState('')
  const [darkMode, setDarkMode] = useState(() => (
    window.localStorage.getItem('edtech-theme') === 'dark'
  ))
  const featureCards = t('programs.items', { returnObjects: true })
  const impactItems = t('impact.items', { returnObjects: true })
  const workflowSteps = t('how.steps', { returnObjects: true })
  const courses = t('courses.items', { returnObjects: true })
  const faqItems = t('faq.items', { returnObjects: true })
  const filteredCourses = useMemo(() => courses.filter((course) => {
    const matchesFilter = courseFilter === 'all' || course.category === courseFilter
    const query = courseSearch.trim().toLocaleLowerCase()
    const matchesSearch = !query || `${course.title} ${course.skills.join(' ')}`.toLocaleLowerCase().includes(query)
    return matchesFilter && matchesSearch
  }), [courses, courseFilter, courseSearch])
  const currentLanguage = languages.some(({ code }) => code === i18n.language)
    ? i18n.language
    : 'en'

  useEffect(() => {
    const updateDocumentLanguage = (language) => {
      document.documentElement.lang = language
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    }

    updateDocumentLanguage(i18n.resolvedLanguage || i18n.language)
    i18n.on('languageChanged', updateDocumentLanguage)
    return () => i18n.off('languageChanged', updateDocumentLanguage)
  }, [i18n])

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

  const handleInternalAnchorClick = (event) => {
    if (
      event.defaultPrevented
      || event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
    ) return

    const clickedElement = event.target instanceof Element ? event.target : null
    const link = clickedElement?.closest('a[href^="#"]')
    if (!link || link.target === '_blank') return

    const target = document.getElementById(link.hash.slice(1))
    if (!target) return

    event.preventDefault()
    if (window.location.hash !== link.hash) {
      window.history.pushState(null, '', link.hash)
    }
    const targetTop = target.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: targetTop, behavior: 'smooth' })
  }

  return (
    <div
      className="site-shell"
      data-theme={darkMode ? 'dark' : 'light'}
      onClickCapture={handleInternalAnchorClick}
    >
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="EduFuture home">
          <span className="brand-mark"><Globe2 size={19} strokeWidth={2.2} /></span>
          <span>Edu<span className="brand-accent">Future</span></span>
        </a>

        <button
          aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={menuOpen}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label={t('nav.label')}>
          <a href="#about" onClick={closeMenu}>{t('nav.about')}</a>
          <a href="#how-it-works" onClick={closeMenu}>{t('nav.how')}</a>
          <a href="#courses" onClick={closeMenu}>{t('nav.courses')}</a>
          <a href="#insights" onClick={closeMenu}>{t('nav.insights')}</a>
          <a href="#faq" onClick={closeMenu}>{t('nav.faq')}</a>
          <label className="language-picker">
            <span className="sr-only">{t('nav.language')}</span>
            <Globe2 aria-hidden="true" size={16} />
            <select value={currentLanguage} onChange={changeLanguage} aria-label={t('nav.language')}>
              {languages.map(({ code, label }) => (
                <option key={code} value={code}>{label}</option>
              ))}
            </select>
          </label>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? t('theme.switchToLight') : t('theme.switchToDark')}
            title={darkMode ? t('theme.switchToLight') : t('theme.switchToDark')}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            <span>{darkMode ? t('theme.light') : t('theme.dark')}</span>
          </button>
          <a className="nav-cta" href="#programs" onClick={closeMenu}>
            {t('nav.cta')} <ArrowRight aria-hidden="true" size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <p className="eyebrow"><span className="eyebrow-dot" />{t('hero.eyebrow')}</p>
            <h1>{t('hero.title')} <span>{t('hero.highlight')}</span></h1>
            <p className="hero-description">{t('hero.description')}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#programs">
                {t('hero.primary')} <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="button button-secondary" href="#about">
                {t('hero.secondary')}
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <span>{t('hero.note')}</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-art"
            aria-label={t('hero.artLabel')}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ rotateY: -5, rotateX: 2, y: -3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            role="img"
          >
            <div className="art-grid" />
            <span className="art-tag tag-top">{t('hero.artTagTop')}</span>
            <div className="laptop-scene">
              <div className="laptop-screen">
                <div className="screen-topbar"><i /><i /><i /><span>learn.space</span></div>
                <div className="screen-content">
                  <div className="screen-sidebar"><b /><b /><b /><b /></div>
                  <div className="screen-main">
                    <span className="screen-kicker">{t('hero.screenKicker')}</span>
                    <strong>{t('hero.screenTitle')}</strong>
                    <div className="screen-progress"><span /></div>
                    <div className="screen-cards"><i /><i /><i /></div>
                  </div>
                </div>
              </div>
              <div className="laptop-base" />
            </div>
            <span className="art-tag tag-bottom">{t('hero.artTagBottom')}</span>
            <div className="floating-chip"><BrainCircuit size={18} /><span>AI</span></div>
          </motion.div>

          <a className="scroll-cue" href="#about" aria-label={t('hero.scroll')}>
            <ArrowDown size={16} />
          </a>
        </section>

        <section className="theme-statement section-wrap" aria-label={t('hero.themeLabel')}>
          <span className="theme-rule" />
          <p>{t('hero.themeLabel')}</p>
          <span className="theme-rule" />
        </section>

        <section className="intro-section" id="about">
          <motion.div
            className="section-wrap intro-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <div>
              <p className="eyebrow">{t('about.eyebrow')}</p>
              <h2>{t('about.title')}</h2>
            </div>
            <div className="intro-copy">
              <p>{t('about.description')}</p>
              <a className="text-link" href="#programs">
                {t('about.link')} <ArrowRight aria-hidden="true" size={17} />
              </a>
            </div>
          </motion.div>
        </section>

        <section className="how-section section-wrap" id="how-it-works">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t('how.eyebrow')}</p>
              <h2>{t('how.title')}</h2>
            </div>
            <p className="section-side-note">{t('how.description')}</p>
          </div>
          <div className="workflow-grid">
            {workflowSteps.map((step, index) => {
              const Icon = workflowIcons[index]
              return (
                <motion.article
                  className="workflow-step"
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={reveal}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className="workflow-number">0{index + 1}</span>
                  <span className="workflow-icon"><Icon size={21} strokeWidth={1.8} /></span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section className="impact-section section-wrap" id="impact">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t('impact.eyebrow')}</p>
              <h2>{t('impact.title')}</h2>
            </div>
            <p className="section-side-note">{t('impact.description')}</p>
          </div>
          <div className="impact-grid">
            {impactItems.map((item, index) => (
              <motion.div
                className="impact-item"
                key={`${item.value}-${index}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={reveal}
                transition={{ delay: index * 0.08 }}
              >
                <span className="impact-value">{item.value}</span>
                <span className="impact-label">{item.label}</span>
                <span className="impact-detail">{item.detail}</span>
              </motion.div>
            ))}
          </div>
          <div className="evidence-note">
            <div className="evidence-copy">
              <span className="evidence-label"><CheckCircle2 size={15} />{t('evidence.label')}</span>
              <p>{t('evidence.summary')}</p>
              <small>{t('evidence.caveat')}</small>
            </div>
            {t('evidence.url') ? (
              <a href={t('evidence.url')} target="_blank" rel="noreferrer">
                {t('evidence.source')} <ExternalLink size={15} />
              </a>
            ) : (
              <span className="evidence-source-placeholder">{t('evidence.source')}</span>
            )}
          </div>
        </section>

        <section className="courses-section" id="courses">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{t('courses.eyebrow')}</p>
                <h2>{t('courses.title')}</h2>
              </div>
              <p className="section-side-note">{t('courses.description')}</p>
            </div>
            <div className="course-controls">
              <div className="course-filters" role="group" aria-label={t('courses.filterLabel')}>
                {t('courses.filters', { returnObjects: true }).map((filter) => (
                  <button
                    className={courseFilter === filter.id ? 'filter-chip is-active' : 'filter-chip'}
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
                <span className="sr-only">{t('courses.searchLabel')}</span>
                <input
                  type="search"
                  value={courseSearch}
                  onChange={(event) => setCourseSearch(event.target.value)}
                  placeholder={t('courses.searchPlaceholder')}
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
                  variants={reveal}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className={`course-visual course-visual-${index % 4}`}>
                    <span>{course.label}</span>
                    <BookOpen size={28} strokeWidth={1.5} />
                  </div>
                  <div className="course-content">
                    <div className="course-meta"><span>{course.level}</span><span>{course.duration}</span></div>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <div className="skill-list">
                      {course.skills.map((skill) => <span key={skill}>{skill}</span>)}
                    </div>
                    <a href="#how-it-works">{t('courses.viewCourse')} <ArrowRight size={15} /></a>
                  </div>
                </motion.article>
              ))}
              {filteredCourses.length === 0 && (
                <p className="no-courses">{t('courses.empty')}</p>
              )}
            </div>
          </div>
        </section>

        <section className="program-section" id="programs">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{t('programs.eyebrow')}</p>
                <h2>{t('programs.title')}</h2>
              </div>
              <p className="section-side-note">{t('programs.description')}</p>
            </div>
            <div className="program-grid">
              {featureCards.map((item, index) => {
                const Icon = featureIcons[index]
                return (
                  <motion.article
                    className="program-card"
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={reveal}
                    transition={{ delay: index * 0.08 }}
                  >
                    <span className="card-number">0{index + 1}</span>
                    <span className="card-icon"><Icon aria-hidden="true" size={22} strokeWidth={1.8} /></span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href="#participate" aria-label={`${t('programs.discover')} ${item.title}`}>
                      {t('programs.discover')} <ArrowRight aria-hidden="true" size={16} />
                    </a>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="insights-section section-wrap" id="insights">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t('insights.eyebrow')}</p>
              <h2>{t('insights.title')}</h2>
            </div>
            <p className="section-side-note">{t('insights.description')}</p>
          </div>
          <div className="insights-grid">
            {t('insights.items', { returnObjects: true }).map((item) => (
              <article className="insight-card" key={item.title}>
                <span className="insight-category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {t('insights.readMore')} <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="insight-placeholder">{t('insights.readMore')}</span>
                )}
                <span className="insight-source">{item.source}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="community-section" id="community">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{t('community.eyebrow')}</p>
                <h2>{t('community.title')}</h2>
              </div>
              <p className="section-side-note">{t('community.description')}</p>
            </div>
            <div className="community-grid">
              {t('community.roles', { returnObjects: true }).map((role, index) => (
                <article className="community-card" key={role.title}>
                  <span>0{index + 1}</span>
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section section-wrap" id="faq">
          <div className="faq-heading">
            <p className="eyebrow">{t('faq.eyebrow')}</p>
            <h2>{t('faq.title')}</h2>
            <p>{t('faq.description')}</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}<ChevronDown size={18} /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">{t('contact.eyebrow')}</p>
              <h2>{t('contact.title')}</h2>
              <p>{t('contact.description')}</p>
            </div>
            <div className="contact-action">
              <Mail size={21} />
              {import.meta.env.VITE_CONTACT_EMAIL ? (
                <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}>
                  {import.meta.env.VITE_CONTACT_EMAIL}
                </a>
              ) : (
                <span>{t('contact.pending')}</span>
              )}
              <small>{t('contact.note')}</small>
            </div>
          </div>
        </section>

        <section className="participate-section section-wrap" id="participate">
          <div className="participate-panel">
            <div className="participate-mark"><Globe2 size={23} /></div>
            <div className="participate-copy">
              <p className="eyebrow">{t('participate.eyebrow')}</p>
              <h2>{t('participate.title')}</h2>
              <p>{t('participate.description')}</p>
            </div>
            <a className="button button-light" href="#courses">
              {t('participate.cta')} <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark"><Globe2 size={19} strokeWidth={2.2} /></span>
          <span>Edu<span className="brand-accent">Future</span></span>
        </a>
        <p>{t('footer.tagline')}</p>
        <div className="footer-links">
          <a href="#about">{t('nav.about')}</a>
          <a href="#programs">{t('nav.programs')}</a>
          <a href="#courses">{t('courses.title')}</a>
          <a href="#insights">{t('insights.title')}</a>
          <a href="#faq">{t('faq.title')}</a>
        </div>
        <span className="copyright">{t('footer.copyright')}</span>
      </footer>
    </div>
  )
};

export default App