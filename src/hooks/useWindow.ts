import { useState, useEffect } from 'react'

export function useWindow(): {
  windowWidth: number
  isMobile: boolean
} {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth < 1024) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    if (window.innerWidth < 1024) {
      setIsMobile(true)
    }

    setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { windowWidth, isMobile }
}
