import { useEffect, useMemo, useState } from 'react'
import { Github, Linkedin, Mail, MessageCircle, Moon, PenLine, Phone, Sun } from 'lucide-react'
import './App.css'
import { achievements, contactLinks, education, experiences, profile, projects, skills } from './data/portfolio'

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
      <Sun size={18} strokeWidth={1.6} aria-hidden="true" />
      <span>Light</span>
    </span>
    <span className="theme-toggle__option" data-mode="dark">
      <Moon size={18} strokeWidth={1.6} aria-hidden="true" />
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

  const contactIconMap = {
    mail: Mail,
    phone: Phone,
    whatsapp: MessageCircle,
    linkedin: Linkedin,
    github: Github,
    dev: PenLine,
  }

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
            <a className="button button--primary" href="/MouryaVamsiModugulaResume.pdf" target="_blank" rel="noreferrer">
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
                  {(() => {
                    const Icon = contactIconMap[link.icon]
                    return Icon ? <Icon size={16} strokeWidth={1.8} aria-hidden="true" /> : null
                  })()}
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

        <section className="section section--projects">
          <div className="section__heading">
            <h2>Personal Build Lab</h2>
            <p>Selected side projects where I explore product ideas, refine design systems, and experiment with tooling.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <a key={project.title} className="project-card" href={project.url} target="_blank" rel="noreferrer">
                <div className="project-card__media" style={{ backgroundImage: project.accent }}>
                  <span className="project-card__badge">{project.badge}</span>
                  <div className="project-card__texture" aria-hidden="true" />
                </div>
                <div className="project-card__content">
                  <div className="project-card__header">
                    <h3>{project.title}</h3>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <p className="project-card__headline">{project.headline}</p>
                  <p>{project.description}</p>
                  <ul className="project-card__highlights">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
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
          <p className="education__resume">
            View full academic details inside{' '}
            <a href="/MouryaVamsiModugulaResume.pdf" target="_blank" rel="noreferrer">
              my CV
            </a>
            .
          </p>
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
          <a className="button button--accent" href="https://wa.me/917337048355?text=Hi%20Mourya%2C%20let%27s%20connect!" target="_blank" rel="noreferrer">
            Message on WhatsApp
          </a>
        </footer>
        <div className="footer-meta">
          <div className="footer-meta__brand">
            <span className="footer-meta__dot" aria-hidden="true" />
            <span>{profile.name}</span>
          </div>
          <div className="footer-meta__links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {(() => {
                  const Icon = contactIconMap[link.icon]
                  return Icon ? <Icon size={15} strokeWidth={1.8} aria-hidden="true" /> : null
                })()}
                {link.label}
              </a>
            ))}
          </div>
          <span className="footer-meta__copyright">
            © {new Date().getFullYear()} Mourya Modugula. Crafted with React + Vite.
          </span>
        </div>
      </main>
    </div>
  )
}

export default App
