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
        className="font-display font-semibold tracking-tightest"
        style={{ fontSize: 'clamp(30px,4.4vw,52px)', lineHeight: 1.06 }}
      >
        {title}
        {accent && (
          <>
            {' '}
            <span className="text-cork">{accent}</span>
          </>
        )}
      </h2>
      {sub && (
        <p className="mt-5 text-[17px] leading-relaxed opacity-80" style={{ maxWidth: '52ch' }}>
          {sub}
        </p>
      )}
    </AnimateIn>
  )
}
