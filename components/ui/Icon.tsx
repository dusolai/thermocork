import clsx from 'clsx'
import { asset } from '@/lib/asset'

// Official Thermocork gold icon set (PNG, transparent)
export const ICONS = {
  thermal: 'thermal.png',
  acoustic: 'acoustic.png',
  waterproof: 'waterproof.png',
  breathable: 'breathable.png',
  elastic: 'elastic.png',
  decorative: 'decorative.png',
  ecologic: 'ecologic.png',
  fire: 'fire.png',
  conductivity: 'conductivity.png',
  'non-toxic': 'non-toxic.png',
  fast: 'fast.png',
  versatile: 'versatile.png',
} as const

export type IconName = keyof typeof ICONS

export default function Icon({
  name,
  size = 40,
  className,
}: {
  name: IconName
  size?: number
  className?: string
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(`/brand/icons/${ICONS[name]}`)}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="lazy"
      className={clsx('object-contain', className)}
      style={{ width: size, height: size }}
    />
  )
}
