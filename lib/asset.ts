// Prefix static asset URLs with the optional base path so the site works both
// at the domain root (thermocork.es) and as a GitHub Pages project (/thermocork).
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path
  return `${BASE}${path.startsWith('/') ? '' : '/'}${path}`
}
