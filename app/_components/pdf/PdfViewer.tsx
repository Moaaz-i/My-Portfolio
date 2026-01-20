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
    <div className="w-full">
      <iframe
        src={`${pdfUrl}#view=FitH`}
        width={width}
        height={height}
        className="border border-gray-200 rounded-lg"
        title="PDF Viewer"
      />
      <div className="mt-2 text-center">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300
                    bg-linear-to-r from-[#4CAF50] via-[#8BC34A] to-[#CDDC39] hover:opacity-90
                    shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Open in New Tab
        </a>
      </div>
    </div>
  )
}
