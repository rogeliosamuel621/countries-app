export const isInViewport = (element: HTMLElement | null) => {
  if (!element) return false

  const el = element.getBoundingClientRect()
  return (
    el.top >= 0 &&
    el.left >= 0 &&
    el.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    el.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
