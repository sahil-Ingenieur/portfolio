import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
      >
        <Link
          to="/"
          className="self-start rounded-sm font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
        >
          Sahil
        </Link>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  [
                    'rounded-sm transition-colors',
                    'focus-visible:outline focus-visible:outline-2',
                    'focus-visible:outline-offset-4',
                    'focus-visible:outline-[var(--color-accent)]',
                    isActive
                      ? 'font-medium text-[var(--color-accent)]'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-text)]',
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