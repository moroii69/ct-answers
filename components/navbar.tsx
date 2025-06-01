"use client"

import type React from "react"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed top-6 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-14 items-center justify-between px-4">
        {!isSearchOpen ? (
          <>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </Button>
              <Link href="/" className="text-lg font-bold">
                CodeTantra<span className="text-primary">Answers</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-4">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/about" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                About
              </Link>
            </nav>

            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} aria-label="Search">
                <Search size={18} />
              </Button>
              {mounted && (
                <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </Button>
              )}
            </div>
          </>
        ) : (
          <form onSubmit={handleSearch} className="flex w-full items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} aria-label="Close search">
              <X size={18} />
            </Button>
            <Input
              type="search"
              placeholder="Search questions..."
              className="flex-1"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="ghost" size="icon">
              <Search size={18} />
            </Button>
          </form>
        )}
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col">
            <Link
              href="/"
              className="px-4 py-3 text-sm font-medium border-b hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-3 text-sm font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
