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
        <span className="tag mb-7">
          <span className="tag-dot" /> {tag}
        </span>
      )}
      <h2
        className="font-display m-0"
        style={{ fontSize: 'clamp(32px,4.8vw,58px)' }}
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
        <p className="mt-6 text-[17px] leading-[1.75] opacity-75 m-0" style={{ maxWidth: '54ch' }}>
          {sub}
        </p>
      )}
    </AnimateIn>
  )
}
