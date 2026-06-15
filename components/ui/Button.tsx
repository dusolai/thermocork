import Link from 'next/link'
import clsx from 'clsx'

type Variant = 'primary' | 'outline' | 'ghost'

interface Props {
  children: React.ReactNode
  href?: string
  variant?: Variant
  className?: string
  external?: boolean
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

const cls = (v: Variant) => clsx('btn', v === 'primary' && 'btn-primary', v === 'outline' && 'btn-outline', v === 'ghost' && 'btn-ghost')

export default function Button({ children, href, variant = 'primary', className, external, type = 'button', onClick, disabled }: Props) {
  const classes = clsx(cls(variant), className)

  if (href) {
    if (external || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('https://wa.me')) {
      return (
        <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
