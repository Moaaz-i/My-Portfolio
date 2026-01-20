'use client'

import Link from 'next/link'
import {useState, useEffect} from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Close mobile menu when clicking on a nav item
  const handleNavClick = (e: React.MouseEvent) => {
    window.location.href = e.currentTarget.getAttribute('href') || '/'
    setIsOpen(false)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (
        isOpen &&
        !target.closest('.mobile-menu') &&
        !target.closest('.mobile-menu-button') &&
        !target.closest('a')
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])
  const items = [
    {link: '/', id: 'work', name: 'Work'},
    {link: '/about', name: 'About'},
    {link: '/', id: 'contact', name: 'Contact'}
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm py-6 px-4 shadow-lg shadow-gray/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/#home"
          className="text-2xl font-bebas_neue -tracking-wider text-white"
        >
          MOAAZ YAHIA
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {items.map((item, index) => (
            <Link
              href={`${item.link}${item.id ? `#${item.id}` : ''}`}
              className="cursor-pointer"
              key={index}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white mobile-menu-button z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-start h-[400px] bg-black/80 pt-32 pb-8 overflow-y-auto">
            <div className="flex flex-col items-center space-y-8 w-full max-w-xs text-center">
              {items.map((item, index) => (
                <Link
                  href={`${item.link}${item.id ? `#${item.id}` : ''}`}
                  className="text-2xl text-white hover:text-gray-300 transition-colors"
                  key={index}
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
