import clsx from 'clsx'
import AnimateIn from './AnimateIn'

export default function SectionHeading({
  tag,
  title,
  accent,
  sub,
  align = 'left',
  className,
}: {
  tag?: string
  title: string
  accent?: string
  sub?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <AnimateIn
      className={clsx(align === 'center' && 'mx-auto text-center', 'max-w-prose2', className)}
    >
      {tag && (
        <span className="tag mb-5">
          <span className="tag-dot" /> {tag}
        </span>
      )}
      <h2
        className="marca m-0"
        style={{ fontSize: 'clamp(32px,5vw,64px)' }}
      >
        {title}
        {accent && (
          <>
            {' '}
            <span className="text-cork">{accent}</span>
          </>
        )}
      </h2>
      {/* Hilo de tinta bajo el rótulo: cierra la región marcada */}
      <span
        aria-hidden
        className={clsx('block mt-5 h-[3px] w-16 bg-gold-600', align === 'center' && 'mx-auto')}
      />
      {sub && (
        <p className="mt-5 text-[17px] leading-relaxed opacity-80" style={{ maxWidth: '52ch' }}>
          {sub}
        </p>
      )}
    </AnimateIn>
  )
}
