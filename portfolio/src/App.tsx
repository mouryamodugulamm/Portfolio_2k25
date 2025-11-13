import { useEffect, useMemo, useState } from 'react'
import './App.css'
import {
  achievements,
  contactLinks,
  education,
  experiences,
  profile,
  skills,
} from './data/portfolio'

type Theme = 'light' | 'dark'

const THEME_KEY = 'mourya-theme'

const getPreferredTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const stored = window.localStorage.getItem(THEME_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  const prefersDark = window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false
  return prefersDark ? 'dark' : 'light'
}

const ThemeToggle = ({ theme, onToggle }: { theme: Theme; onToggle: () => void }) => (
  <button
    className={`theme-toggle theme-toggle--${theme}`}
    onClick={onToggle}
    type="button"
    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
  >
    <span className="theme-toggle__option" data-mode="light">
      <svg viewBox="0 0 24 24" width="18" height="18" role="presentation" aria-hidden="true">
        <path
          d="M12 5.25a.75.75 0 0 1 .75.75V7a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm5.303 1.197a.75.75 0 0 1 1.06 1.06l-.53.53a.75.75 0 0 1-1.06-1.06l.53-.53ZM12 9a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm9 .75a.75.75 0 0 1-.75.75H19a.75.75 0 0 1 0-1.5h1.25a.75.75 0 0 1 .75.75Zm-3.447 6.303a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 1.06-1.06l.53.53a.75.75 0 0 1 0 1.06ZM12 17a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-1.5 0v-1.25A.75.75 0 0 1 12 17Zm-6.303-.75a.75.75 0 0 1 1.06 0l.53.53a.75.75 0 0 1-1.06 1.06l-.53-.53a.75.75 0 0 1 0-1.06ZM7 12a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h1.25A.75.75 0 0 1 7 12Zm-1.697-5.553a.75.75 0 1 1 1.06-1.06l.53.53a.75.75 0 1 1-1.06 1.06l-.53-.53Z"
          fill="currentColor"
        />
      </svg>
      <span>Light</span>
    </span>
    <span className="theme-toggle__option" data-mode="dark">
      <svg viewBox="0 0 24 24" width="18" height="18" role="presentation" aria-hidden="true">
        <path
          d="M12.248 4.006a1 1 0 0 1 .936.311 6 6 0 0 0 6.498 1.807 1 1 0 0 1 1.18 1.326 8 8 0 1 1-8.74-4.335 1 1 0 0 1 .126-.109Z"
          fill="currentColor"
        />
      </svg>
      <span>Dark</span>
    </span>
    <span className="theme-toggle__thumb" aria-hidden="true" />
  </button>
)

const Divider = () => <div className="divider" aria-hidden />

function App() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.body.dataset.theme = theme
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const experienceYears = useMemo(() => '5', [])

  return (
    <div className="app">
      <div className="app__background app__background--one" />
      <div className="app__background app__background--two" />
      <main className="layout">
        <header className="hero">
          <div className="hero__top">
            <div className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              Available for hire
            </div>
            <ThemeToggle
              theme={theme}
              onToggle={() => setTheme((mode) => (mode === 'light' ? 'dark' : 'light'))}
            />
          </div>
          <h1 className="hero__title">
            {profile.name}
            <span>{profile.title}</span>
          </h1>
          <p className="hero__summary">{profile.summary}</p>
          <div className="hero__cta">
            <a className="button button--primary" href="/mourya_vamsi_modugula_resume.pdf" target="_blank" rel="noreferrer">
              Download resume
            </a>
            <a className="button button--ghost" href={`mailto:${profile.email}`}>
              Let&apos;s collaborate
            </a>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-item">
              <strong>{experienceYears}</strong>
              <span>Years experience</span>
            </div>
            <div className="hero__meta-item">
              <strong>Security & SaaS</strong>
              <span>Enterprise platforms</span>
            </div>
            <div className="hero__meta-item">
              <strong>Full Stack</strong>
              <span>React • Next.js • Node.js</span>
            </div>
          </div>
          <div className="hero__contact">
            <div className="hero__location">{profile.location}</div>
            <Divider />
            <nav className="hero__links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="section">
          <div className="section__heading">
            <h2>Skills at a glance</h2>
            <p>Polyglot engineer focused on reliable front-end platforms, resilient back-end APIs, and data-rich dashboards.</p>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article key={group.title} className="surface surface--skills">
                <h3>{group.title}</h3>
                <div className="skills-grid__chips">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section__heading">
            <h2>Experience</h2>
            <p>Driving measurable outcomes across cybersecurity, logistics, and ed-tech platforms.</p>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article key={experience.company} className="timeline__item surface surface--timeline">
                <div className="timeline__meta">
                  <h3 className="timeline__project">{experience.project}</h3>
                  <div className="timeline__meta-details">
                    <span>{experience.company}</span>
                    <span aria-hidden="true">•</span>
                    <span>{experience.role}</span>
                  </div>
                  <time>{experience.period}</time>
                </div>
                <p className="timeline__role">{experience.roleFocus}</p>
                <div className="timeline__tech">
                  {experience.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <p className="timeline__description">{experience.description}</p>
                <div className="timeline__highlights">
                  {experience.highlights.map((highlight) => (
                    <div key={highlight.title} className="timeline__highlight">
                      <h4>{highlight.title}</h4>
                      <ul>
                        {highlight.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section__heading">
            <h2>Education</h2>
            <p>Strong academic foundation supporting team leadership and rapid delivery.</p>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article key={item.school} className="surface surface--education">
                <h3>{item.school}</h3>
                <span className="education-grid__degree">{item.degree}</span>
                <span className="education-grid__period">{item.period}</span>
                {item.details ? <p>{item.details}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section section--accent">
          <div className="section__heading">
            <h2>Impact highlights</h2>
            <p>Quantified wins from recent projects.</p>
          </div>
          <ul className="achievements-list">
            {achievements.map((achievement) => (
              <li key={achievement} className="surface surface--achievement">
                {achievement}
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <p>Let&apos;s build something remarkable.</p>
          <a className="button button--primary" href={`mailto:${profile.email}`}>
            Schedule a conversation
          </a>
        </footer>
      </main>
    </div>
  )
}

export default App
