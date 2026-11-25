const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sahil-ingenieur',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/sahil-Ingenieur',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-5 text-sm text-[var(--color-muted)] sm:px-6">
        <span>
          © {new Date().getFullYear()} Sahil
        </span>

        <nav aria-label="Social links">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-sm transition-colors hover:text-[var(--color-accent)] hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] motion-reduce:transition-none"
                >
                  {link.label}
                  <span className="sr-only">
                    {' '}(opens in a new tab)
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}