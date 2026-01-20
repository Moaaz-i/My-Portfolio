'use client'

export const smoothScrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const navbarHeight = 80 // Match this with your navbar height
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
