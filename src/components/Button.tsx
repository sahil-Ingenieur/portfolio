type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href: string
}

export default function Button({ children, variant = 'primary', href }: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-accent)] text-white'
      : 'border border-[var(--color-border)]'
  return (
    <a href={href} className={`rounded-md px-5 py-2.5 text-sm font-medium ${styles}`}>
      {children}
    </a>
  )
}