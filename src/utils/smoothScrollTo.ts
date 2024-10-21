export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (!element) return

  window.scrollTo({
    top: element.offsetTop - 100,
    behavior: 'smooth',
  })
}
