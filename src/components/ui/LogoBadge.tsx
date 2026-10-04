/** The real Le Rose 2 logo inside a round cream badge — used across the site. */
export function LogoBadge({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden rounded-full bg-cream ${className}`}>
      <img src="/logo.png" alt="Le Rose 2" className="h-[88%] w-[88%] rounded-full object-contain" />
    </span>
  )
}
