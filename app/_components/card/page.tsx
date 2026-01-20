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

const Card = (props: CardProps) => {
  const {
    title = 'Project Title',
    year = '2025',
    role = 'Front-end Developer',
    tags = [],
    linkDemo,
    linkCode,
    image
  } = props

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto bg-gray-800 rounded-2xl overflow-hidden shadow shadow-gray-500/50">
      <div className="relative w-full lg:w-1/2 h-96 lg:h-auto flex items-center justify-center">
        <div className="relative w-[80%] h-[80%]">
          <Image
            src={image || '/placeholder.png'}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
        {tags && tags.length > 0 && (
          <div className="absolute top-6 left-6">
            <span className="bg-[#0A0A0A] text-white text-sm font-medium px-3 py-1.5 rounded-4xl">
              {tags[0]}
            </span>
          </div>
        )}
      </div>

      {/* Right side - Content */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {title}
          </h2>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-600/20 text-blue-400 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-white font-medium mb-4">PROJECT INFO</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Year</p>
                <p className="text-white">{year}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Role</p>
                <p className="text-white">{role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            target="_blank"
            href={linkDemo || '#'}
            className="bg-white text-black hover:bg-gray-100 font-medium py-3 px-6 rounded-lg text-center transition-colors"
          >
            LIVE DEMO
          </Link>
          <Link
            target="_blank"
            href={linkCode || '#'}
            className="border border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg text-center transition-colors"
          >
            SEE ON GITHUB
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
