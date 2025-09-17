"use client"

import { useEffect, useState } from "react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [checked, setChecked] = useState(false)

 
  useEffect(() => {
    setMounted(true)
    setChecked(theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches))
  }, [theme])

  const toggle = () => {
    if (checked) {
      setTheme("light")
      setChecked(false)
    } else {
      setTheme("dark")
      setChecked(true)
    }
  }

  if (!mounted) return null 

  return (
    <div className="flex items-center justify-between space-x-2 w-full  p-2 rounded">
      <Label htmlFor="dark-mode">Dark Mode</Label>
      <Switch  id="dark-mode" checked={checked} onCheckedChange={toggle} />
    </div>
  )
}
