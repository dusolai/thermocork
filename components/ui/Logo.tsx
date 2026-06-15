import Link from 'next/link'
import clsx from 'clsx'
import { asset } from '@/lib/asset'

export default function Logo({
  variant = 'largo',
  className,
  height = 30,
  onClick,
}: {
  variant?: 'largo' | 'hexagono' | 'hexagono-sm' | 'vertical'
  className?: string
  height?: number
  onClick?: () => void
}) {
  const file =
    variant === 'largo'
      ? 'logo-largo.png'
      : variant === 'vertical'
        ? 'logo-vertical.png'
        : variant === 'hexagono-sm'
          ? 'logo-hexagono-sm.png'
          : 'logo-hexagono.png'

  return (
    <Link href="/" onClick={onClick} className={clsx('inline-flex items-center no-underline shrink-0', className)} aria-label="Thermocork — inicio">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(`/brand/logos/${file}`)}
        alt="Thermocork"
        height={height}
        style={{ height, width: 'auto' }}
        className="object-contain"
      />
    </Link>
  )
}
