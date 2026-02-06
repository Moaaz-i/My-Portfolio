'use client'

import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  title?: string
  description?: string
  year?: string
  role?: string
  tags?: string[]
  linkDemo?: string
  linkCode?: string
  image?: string
}

// خارطة الألوان للـ Tags (التمييز الذي طلبته)
const tagColors: Record<string, string> = {
  'Next.js': 'bg-black text-white border-white/20',
  React: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  TypeScript: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  JavaScript: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
  HTML5: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  CSS3: 'bg-blue-600/20 text-blue-400 border-blue-600/30',
  'UI/UX': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  'API Integration': 'bg-green-500/20 text-green-400 border-green-500/30',
  'CRUD Operations': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Responsive Design': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  default: 'bg-blue-600/20 text-blue-400 border-blue-600/20'
}

const Card = (props: CardProps) => {
  const {
    title = 'Project Title',
    description,
    year = '2025',
    role = 'Front-end Developer',
    tags = [],
    linkDemo,
    linkCode,
    image
  } = props

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto bg-gray-800 rounded-2xl overflow-hidden shadow shadow-gray-500/50 mb-10 transition-transform hover:scale-[1.01]">
      {/* Left side - Image */}
      <div className="relative w-full lg:w-1/2 h-96 lg:h-auto flex items-center justify-center bg-gray-900/50">
        <div className="relative w-[80%] h-[80%]">
          <Image
            src={image || '/placeholder.png'}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        {/* التاج العائم (أول ميزة في المصفوفة) */}
        {tags && tags.length > 0 && (
          <div className="absolute top-6 left-6">
            <span className="bg-[#0A0A0A] text-white text-sm font-medium px-3 py-1.5 rounded-full border border-white/10">
              {tags[0]}
            </span>
          </div>
        )}
      </div>

      {/* Right side - Content */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h2>

          {/* الوصف المطور */}
          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

          {/* Tags Cloud - مع التمييز اللوني الخاص لكل تقنية */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag, index) => {
                const colorClass = tagColors[tag] || tagColors['default']
                return (
                  <span
                    key={index}
                    className={`${colorClass} text-sm font-medium px-3 py-1 rounded-full border transition-colors`}
                  >
                    {tag}
                  </span>
                )
              })}
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-white font-medium mb-4 opacity-50 text-sm tracking-widest">
              PROJECT INFO
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Year</p>
                <p className="text-white font-semibold">{year}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Role</p>
                <p className="text-white font-semibold">{role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/5">
          <Link
            target="_blank"
            href={linkDemo || '#'}
            className="bg-white text-black hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-center transition-all active:scale-95"
          >
            LIVE DEMO
          </Link>
          <Link
            target="_blank"
            href={linkCode || '#'}
            className="border border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg text-center transition-all active:scale-95"
          >
            SEE ON GITHUB
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
