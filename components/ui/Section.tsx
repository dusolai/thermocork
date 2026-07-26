import clsx from 'clsx'
import Container from './Container'

type Tone = 'dark' | 'darker' | 'cream' | 'ivory'

const TONES: Record<Tone, string> = {
  dark: 'bg-ink-900 text-sand-100',
  darker: 'bg-ink-800 text-sand-100',
  cream: 'bg-cream-100 text-sand-900 on-light',
  ivory: 'bg-cream-50 text-sand-900 on-light',
}

export default function Section({
  id,
  tone = 'dark',
  children,
  className,
  containerClassName,
  size = 'content',
  pad = true,
}: {
  id?: string
  tone?: Tone
  children: React.ReactNode
  className?: string
  containerClassName?: string
  size?: 'content' | 'wide' | 'narrow'
  pad?: boolean
}) {
  return (
    <section
      id={id}
      className={clsx('relative isolate', TONES[tone], pad && 'py-24 sm:py-32 lg:py-40', className)}
    >
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}
