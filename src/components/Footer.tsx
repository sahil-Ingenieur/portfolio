export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-sm text-[var(--color-muted)]">
        <span>© {new Date().getFullYear()} Sahil</span>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/sahil-ingenieur" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/sahil-Ingenieur" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  )
}