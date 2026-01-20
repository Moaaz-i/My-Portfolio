import {useState, useCallback, useEffect, useRef} from 'react'

export function useFullscreen(element?: HTMLElement | null) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const elementRef = useRef<HTMLElement | null>(element || null)

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      const element = elementRef.current || document.documentElement
      if (element.requestFullscreen) {
        element.requestFullscreen().then(() => {
          setIsFullscreen(true)
        })
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false)
        })
      }
    }
  }, [])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  return {isFullscreen, toggleFullscreen, elementRef}
}
