'use client'

import {FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiExpo
} from 'react-icons/si'
import {TbUsers} from 'react-icons/tb'
import {GoTools} from 'react-icons/go'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import PdfViewer from '../_components/pdf/PdfViewer'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import {pdfjs} from 'react-pdf'

// Use a CDN that supports CORS for the PDF.js worker
const pdfjsVersion = '4.2.67' // Explicitly set a version
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`

export default function AboutPage() {
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)

  function onDocumentLoadSuccess({numPages}: {numPages: number}): void {
    setNumPages(numPages)
  }

  const capabilities = [
    {
      icon: <SiHtml5 className="w-6 h-6" />,
      title: 'Front-end Development',
      description: 'HTML5, CSS3, JavaScript, React.js, and Next.js'
    },
    {
      icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
      title: 'Modern Styling',
      description: 'Responsive designs with Tailwind CSS and CSS3'
    },
    {
      icon: <SiReact className="w-6 h-6 text-blue-400" />,
      title: 'Mobile Development',
      description: 'Cross-platform apps with React Native & Expo'
    },
    {
      icon: <GoTools className="w-6 h-6" />,
      title: 'Problem Solving',
      description: 'Critical thinking and troubleshooting'
    },
    {
      icon: <TbUsers className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Teamwork and effective communication'
    },
    {
      icon: <SiNextdotjs className="w-6 h-6" />,
      title: 'Full-Stack Capabilities',
      description: 'Server-side rendering and API routes with Next.js'
    }
  ]

  const handleDownloadCertificate = () => {
    // This would typically be a link to your certificate file
    alert('Certificate download will start shortly')
    // window.open('/path-to-certificate.pdf', '_blank');
  }

  const experiences = [
    {
      title: 'The Beginning of My Coding Journey',
      period: '2023 - Present',
      responsibilities: [
        'Started learning programming at the age of 12 through Sololearn, focusing on understanding JavaScript fundamentals',
        'Mastered the art of reading and understanding code through hands-on practice with HTML, CSS, and JavaScript',
        'Developed strong problem-solving skills by analyzing and modifying existing codebases'
      ]
    },
    {
      title: 'Building Foundations',
      period: '2024',
      responsibilities: [
        'Intensively studied web development fundamentals through YouTube tutorials and online resources',
        'Achieved proficiency in modern JavaScript (ES6+), TypeScript, and Tailwind CSS',
        'Successfully completed multiple personal projects to solidify understanding of core concepts'
      ]
    },
    {
      title: 'Advanced Development & Professional Growth',
      period: '2025 - Present',
      responsibilities: [
        'Expanded skillset to include React.js and Next.js for building modern web applications',
        'Mastered responsive design principles with Bootstrap and advanced CSS techniques',
        'Developed full-stack applications with a focus on clean, maintainable code',
        'Continuously learning and implementing best practices in software development',
        <div className="pdf-viewer-container mt-4">
          <PdfViewer
            file="/a3b9ca55-6c92-48e0-aba8-2fbc46a2e8ad.pdf"
            width={600}
          />
        </div>
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Left Column - Image */}
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-[500px] bg-gray-100 overflow-hidden">
              <Image
                src="/placeholder.png"
                alt="Front-end Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-3/5">
            <h1 className="text-4xl font-bold text-white mb-4">ABOUT ME</h1>

            <div className="text-gray-300 mb-6 space-y-4">
              <p className="text-lg">
                I am a front-end developer based in Saudi Arabia. I have a
                mobile application development background.
              </p>

              <p>
                I am a hard and dedicated software developer with excellent
                communication, time management, problem-solving, and teamwork
                skills. I have experience working on various projects, including
                web development, and mobile app development.
              </p>

              <p>
                I am passionate about creating innovative solutions that meet
                the needs of our clients. I am a team player who is always
                willing to learn new things and improve my skills.
              </p>

              <p className="font-medium text-gray-100">
                I am proficient in HTML, CSS, JavaScript, React.js, Next.js, and
                Tailwind CSS. I also have experience with React Native and Expo
                for mobile app development.
              </p>
            </div>

            {/* Skills Icons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex flex-col items-center group">
                <SiHtml5 className="w-10 h-10 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs mt-1 text-gray-400">HTML5</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiCss3 className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs mt-1 text-gray-400">CSS3</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiJavascript className="w-10 h-10 text-yellow-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs mt-1 text-gray-400">JavaScript</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiReact className="w-10 h-10 text-blue-300 group-hover:scale-110 transition-transform" />
                <span className="text-xs mt-1 text-gray-400">React</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiNextdotjs className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                <span className="text-xs mt-1 text-gray-400">Next.js</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiTailwindcss className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs mt-1 text-gray-400">Tailwind</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiReact className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs mt-1 text-gray-400">React Native</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiExpo className="w-10 h-10 text-gray-100 group-hover:scale-110 transition-transform" />
                <span className="text-xs mt-1 text-gray-400">Expo</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <Link
                href="https://www.linkedin.com/in/moaaz-yahia-b02b50376/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-7 h-7" />
              </Link>
              <Link
                href="https://github.com/Moaaz-i"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-7 h-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              MY CAPABILITIES
            </h2>
            <div className="w-16 h-1 bg-white mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <div className="text-gray-100">{capability.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-sm text-center">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              MY EXPERIENCE
            </h2>
            <div className="w-16 h-1 bg-white mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            {experiences.map((experience, index) => (
              <div key={index} className="border-l-4 border-white pl-6">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {experience.title}
                  </h3>
                  <p className="text-gray-300 font-medium">
                    {experience.period}
                  </p>
                </div>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-gray-400">
                      <div className="flex items-start">
                        <span className="mr-2">•</span>
                        {typeof responsibility === 'string' ? (
                          <span>{responsibility}</span>
                        ) : (
                          responsibility
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">LET'S CONNECT</h2>

          <div className="mb-6">
            <div className="flex justify-center space-x-6">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/moaaz-yahia-b02b50376/"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Moaaz-i"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>

          <div className="text-gray-500 text-sm border-t border-gray-700 pt-6">
            © {new Date().getFullYear()} Moaaz Yahia. All rights reserved.
          </div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="py-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  )
}
