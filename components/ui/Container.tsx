import clsx from 'clsx'

export default function Container({
  children,
  className,
  size = 'content',
}: {
  children: React.ReactNode
  className?: string
  size?: 'content' | 'wide' | 'narrow'
}) {
  return (
    <div
      className={clsx(
        'mx-auto w-full',
        size === 'wide' && 'max-w-wide',
        size === 'content' && 'max-w-content',
        size === 'narrow' && 'max-w-3xl',
        'px-5 sm:px-8 lg:px-10',
        className,
      )}
    >
      {children}
    </div>
  )
}
