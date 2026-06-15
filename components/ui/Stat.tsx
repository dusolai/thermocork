'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

// Splits a value like "70%", "25+", "0.81", "38 dB" into prefix-number-suffix
function parse(value: string) {
  const m = value.match(/^([^\d-]*)(-?[\d.,]+)(.*)$/)
  if (!m) return { prefix: '', num: null as number | null, suffix: value, decimals: 0 }
  const raw = m[2].replace(',', '.')
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0
  return { prefix: m[1], num: parseFloat(raw), suffix: m[3], decimals }
}

export default function Stat({
  value,
  label,
  className,
  big = false,
}: {
  value: string
  label: string
  className?: string
  big?: boolean
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })
  const { prefix, num, suffix, decimals } = parse(value)

  return (
    <div ref={ref} className={className}>
      <div
        className="font-display font-semibold text-cork leading-none"
        style={{ fontSize: big ? 'clamp(44px,6vw,76px)' : 'clamp(32px,4vw,52px)' }}
      >
        {num === null ? (
          value
        ) : (
          <>
            {prefix}
            {inView ? (
              <CountUp end={num} duration={2} decimals={decimals} separator="." />
            ) : (
              num.toFixed(decimals)
            )}
            {suffix}
          </>
        )}
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] opacity-60">{label}</div>
    </div>
  )
}
