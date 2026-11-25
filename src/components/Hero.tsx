import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <p className="hero__eyebrow">
        Sahil / Senior Front-End Engineer
      </p>

      <h1 id="hero-title" className="hero__title">
        Thoughtful interfaces.
        <br />
        Reliable engineering.
      </h1>

      <p className="hero__lead">
        Front-end engineering for financial services, with 9+ years
        across React, design systems, and complex customer experiences.
      </p>

      <p className="hero__context">
        End-client experience with RBC and TD Securities.
        Consulting experience includes Publicis Sapient.
      </p>

      <div className="action-row">
        <a
          href="#selected-work"
          className="button button--primary"
        >
          Explore my work
          <span aria-hidden="true">↓</span>
        </a>

        <Link
          to="/contact"
          className="button button--secondary"
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}