'use client'

import {useState, useEffect} from 'react'
import {Document, Page, pdfjs} from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Initialize PDF.js worker
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
}

// Fix for DOMMatrix issue in Node.js environment
if (typeof window === 'undefined') {
  class DOMMatrixPolyfill {
    a = 1
    b = 0
    c = 0
    d = 1
    e = 0
    f = 0
    m11 = 1
    m12 = 0
    m13 = 0
    m14 = 0
    m21 = 0
    m22 = 1
    m23 = 0
    m24 = 0
    m31 = 0
    m32 = 0
    m33 = 1
    m34 = 0
    m41 = 0
    m42 = 0
    m43 = 0
    m44 = 1
    is2D = true
    isIdentity = true

    constructor(init?: string | number[]) {
      if (init) {
        if (typeof init === 'string') {
          // Parse the matrix string
          const values = init
            .replace(/[^0-9.,-]/g, '')
            .split(',')
            .map(Number)
          if (values.length >= 6) {
            this.a = values[0]
            this.b = values[1]
            this.c = values[2]
            this.d = values[3]
            this.e = values[4]
            this.f = values[5]
          }
        } else if (Array.isArray(init)) {
          if (init.length >= 6) {
            this.a = init[0]
            this.b = init[1]
            this.c = init[2]
            this.d = init[3]
            this.e = init[4]
            this.f = init[5]
          }
        }
      }
    }

    static fromFloat32Array(array32: Float32Array): DOMMatrix {
      return new (this as any)(Array.from(array32))
    }

    static fromFloat64Array(array64: Float64Array): DOMMatrix {
      return new (this as any)(Array.from(array64))
    }

    static fromMatrix(other?: DOMMatrixInit): DOMMatrix {
      return new (this as any)(other as any)
    }
  }

  // @ts-ignore
  global.DOMMatrix = DOMMatrixPolyfill
}

interface PdfViewerProps {
  file: string
  width?: number | string
  height?: number | string
}

export default function PdfViewer({
  file,
  width = '100%',
  height = '500px'
}: PdfViewerProps) {
  const [isClient, setIsClient] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const pdfUrl = file.startsWith('http')
    ? file
    : `${process.env.NEXT_PUBLIC_BASE_URL || ''}${file}`

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="w-full h-64 flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full h-64 flex flex-col items-center justify-center bg-red-50 text-red-600 p-4 rounded-lg">
        <div className="text-lg font-medium mb-2">Error Loading PDF</div>
        <div className="text-sm mb-4">{error}</div>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Open PDF in New Tab
        </a>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-0 bg-linear-to-br from-green-500/10 to-transparent rounded-2xl -m-2 transform group-hover:scale-[1.01] transition-all duration-300" />
        <div className="relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            src={`${pdfUrl}?view=FitH`}
            width={width}
            height={height}
            className="w-full min-h-[500px] sm:min-h-[600px] rounded-lg border-0"
            title="PDF Viewer"
            loading="lazy"
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y pinch-zoom',
              scrollbarWidth: 'thin',
              scrollbarColor: '#4CAF50 #1a1a1a'
            }}
          />
        </div>
      </div>
      <div className="mt-6 text-center">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-xl text-white text-base font-medium transition-all duration-300
                    bg-linear-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600
                    shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4l2 2h4l2-2h4a2 2 0 012 2v12a2 2 0 01-2 2h-2.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>View Full Screen</span>
        </a>
      </div>
    </div>
  )
}
