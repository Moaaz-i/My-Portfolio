'use client'

import Link from 'next/link'

const Navbar = () => {
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
          {items.map((item) => (
            <Link
              href={`${item.link}${item.id ? `#${item.id}` : ''}`}
              className="cursor-pointer"
              key={item.id}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button (hidden on desktop) */}
        <button className="md:hidden text-white">
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
        </button>
      </div>
    </nav>
  )
}

export default Navbar
