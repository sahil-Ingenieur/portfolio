import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6"
      >
        <Link
          to="/"
          className="inline-flex min-h-11 items-center self-start rounded-sm font-semibold tracking-tight text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] motion-reduce:transition-none"
        >
          Sahil
        </Link>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm sm:gap-x-6">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  [
                    'inline-flex min-h-11 items-center rounded-sm',
                    'transition-colors motion-reduce:transition-none',
                    'focus-visible:outline focus-visible:outline-2',
                    'focus-visible:outline-offset-4',
                    'focus-visible:outline-[var(--color-accent)]',
                    isActive
                      ? 'text-[var(--color-accent)] underline decoration-1 underline-offset-8'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-accent)]',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}