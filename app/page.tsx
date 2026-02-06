'use client'

import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import Image from 'next/image'
import Card from './_components/card/page'
import data from './_utils/data/works.json'
import Link from 'next/link'

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <main className="relative z-10">
      <section
        className="min-h-[calc(100vh-80px)] flex items-center py-8 border-b border-[#484848]"
        id="home"
      >
        <div className="container mx-auto px-4 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
            <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center lg:justify-center">
              <div className="space-y-1">
                <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-6xl font-bebas_neue font-semibold uppercase tracking-tight text-white leading-[0.9]">
                  HI, I AM
                </h3>
                <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-7xl font-bebas_neue font-bold uppercase tracking-tighter text-white leading-[0.9]">
                  Moaaz Yahia
                </h2>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                A front-end developer passionate about building accessible and
                user-friendly websites.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
                <Link
                  href="#contact"
                  className="group flex items-center space-x-2 bg-[#D3E97A] hover:bg-[#C3D96A] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <span className="font-bebas_neue text-lg sm:text-xl tracking-wider">
                    CONTACT ME
                  </span>
                  <span className="w-2 h-2 bg-black rounded-full group-hover:animate-pulse"></span>
                </Link>

                <div className="flex space-x-4">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/moaaz-yahia-b02b50376/"
                    className="p-3 rounded-full border border-gray-700 hover:bg-[#D3E97A] hover:text-black text-[#D3E97A] transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="w-6 h-6" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://github.com/Moaaz-i"
                    className="p-3 rounded-full border border-gray-700 hover:text-black text-[#D3E97A] hover:bg-[#D3E97A] transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center lg:justify-center ">
              <div className="hero-image-container relative w-full rounded-3xl max-w-2xl aspect-23/33 bg-linear-to-br from-green-500/20 to-transparent overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent">
                  <Image
                    src="/placeholder.png"
                    alt=""
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="w-full h-full bg-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8" id="work">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas_neue font-semibold tracking-tight text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
              Here are some of the selected projects that showcase my passion
              for front-end development.
            </p>
          </div>

          <div className="mt-7 flex items-center gap-20 flex-col">
            {[...data.works].reverse().map((work, index) => (
              <Card key={index} {...work} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900"
        id="about"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas_neue font-semibold tracking-tight text-white mb-8">
            ABOUT ME
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Learn more about my background, skills, and experience in the field
            of web development and engineering.
          </p>
          <a
            href="/about"
            className="inline-flex items-center space-x-2 bg-[#D3E97A] hover:bg-[#c4d96a] text-black px-8 py-4 rounded-full font-medium transition-all duration-300 text-lg"
          >
            <span className="font-bebas_neue text-xl tracking-wider">
              LEARN MORE ABOUT ME
            </span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
          </a>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas_neue font-semibold tracking-tight text-white mb-6">
              LET'S CONNECT
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-2xl mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-8 group flex items-center space-x-2 bg-[#D3E97A] hover:bg-[#C3D96A] text-black px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              <span className="font-bebas_neue text-xl tracking-wider">
                SEND MESSAGE
              </span>
              <span className="w-2 h-2 bg-black rounded-full group-hover:animate-pulse"></span>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Moaaz Yahia. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://www.linkedin.com/in/moaaz-yahia-b02b50376/"
              target="_blank"
              className="text-gray-400 hover:text-[#D3E97A] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/Moaaz-i"
              target="_blank"
              className="text-gray-400 hover:text-[#D3E97A] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
