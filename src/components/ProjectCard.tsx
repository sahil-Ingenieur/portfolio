type Project = {
  title: string
  description: string
  stack: string[]
  href: string
}

export default function ProjectCard({ title, description, stack, href }: Project) {
  return (
    <a href={href} className="block rounded-lg border border-[var(--color-border)] p-6 transition hover:border-[var(--color-accent)]">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-muted)]">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span key={tech} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs">{tech}</span>
        ))}
      </div>
    </a>
  )
}