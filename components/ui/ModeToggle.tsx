'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function SwitchDemo() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <div className="relative w-8 h-8">
          <Sun
            className={`absolute inset-0 size-8 transition-all duration-300 ${
              isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
            }`}
          />
          <Moon
            className={`absolute inset-0 size-8 transition-all duration-300 ${
              isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
            }`}
          />
        </div>
        <span className="sr-only">Toggle Theme</span>
      </button>
    </div>
  )
}
