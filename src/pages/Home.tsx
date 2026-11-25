import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import '../styles/home.css'

const stack = [
  'React',
  'TypeScript',
  'TanStack Query',
  'TanStack Table',
  'Recharts',
]

export default function Home() {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <>
      <Hero />

      <section
        id="selected-work"
        aria-labelledby="selected-work-heading"
        className="home-work"
      >
        <div className="home-section-heading">
          <h2
            id="selected-work-heading"
            className="home-section-title"
          >
            Selected work
          </h2>

          <span className="home-section-meta">
            Independent project / 01
          </span>
        </div>

        <article
          className="home-project"
          aria-labelledby="portfolio-dashboard-title"
        >
          <div className="home-project__content">
            <p className="home-project__eyebrow">
              Financial interfaces
            </p>

            <h3
              id="portfolio-dashboard-title"
              className="home-project__title"
            >
              Portfolio Dashboard
            </h3>

            <p className="home-project__description">
              A clear view of portfolio value, performance, and
              individual holdings. Built with searchable data,
              responsive layouts, and loading/error recovery.
            </p>

            <ul
              aria-label="Technologies used"
              className="home-project__stack"
            >
              {stack.map((technology) => (
                <li
                  key={technology}
                  className="home-project__technology"
                >
                  {technology}
                </li>
              ))}
            </ul>

            <div className="home-project__actions">
              <Link
                to="/projects/portfolio-dashboard/case-study"
                className="button button--primary"
              >
                Read case study
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                to="/projects/portfolio-dashboard"
                className="button button--secondary"
              >
                View demo
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="home-project__note">
              Independent demonstration · Fictional portfolio data
            </p>
          </div>

          <Link
            to="/projects/portfolio-dashboard/case-study"
            aria-label="Read the Portfolio Dashboard case study"
            className="home-project__preview"
          >
            {imageFailed ? (
              <p className="home-project__fallback">
                Preview unavailable. Read the case study to explore
                the project.
              </p>
            ) : (
              <img
                src="/images/portfolio-dashboard.png"
                alt="Portfolio dashboard with valuation cards, a performance chart, and a holdings table."
                width={1600}
                height={1000}
                loading="lazy"
                decoding="async"
                onError={() => setImageFailed(true)}
                className="home-project__image"
              />
            )}
          </Link>
        </article>
      </section>

      <section
        className="home-about"
        aria-labelledby="about-builder-title"
      >
        <div className="home-about__label">
          <p className="home-about__eyebrow">
            A little about me
          </p>
        </div>

        <div className="home-about__content">
          <h2
            id="about-builder-title"
            className="home-about__title"
          >
            I like making things real.
          </h2>

          <p>
            I’m drawn to the point where an idea becomes something
            someone can actually use. Taking a complicated problem,
            finding a clear approach, and building an interface that
            makes it feel straightforward—that’s the work I enjoy.
          </p>

          <p>
            I care about the details, but I also care about getting
            things out the door. For me, building and shipping belong
            together: make thoughtful decisions, follow through, and
            improve what needs improving.
          </p>

          <span className="home-about__signature">
            Thoughtfully built. Shipped with care.
          </span>
        </div>
      </section>
    </>
  )
}