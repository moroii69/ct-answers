"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon, ExternalLink } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { searchQuestions, getSubjectById } from "@/lib/data"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (query) {
      setIsSearching(true)
      const foundQuestions = searchQuestions(query)
      setResults(foundQuestions)
      setIsSearching(false)
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.history.pushState({}, "", `/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearching(true)
      const foundQuestions = searchQuestions(searchQuery)
      setResults(foundQuestions)
      setIsSearching(false)
    }
  }

  return (
    <div className="container px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Search Results</h1>

        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by question number (e.g., 1.1.1) or keywords"
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit">Search</Button>
        </form>
      </div>

      {isSearching ? (
        <div className="text-center p-8">
          <p>Searching...</p>
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-3">
          {results.map((question) => {
            const subject = getSubjectById(question.subject)
            return (
              <div
                key={`${question.subject}-${question.id}`}
                className="p-4 rounded-lg border bg-card hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                        {question.id}
                      </span>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-muted">{question.difficulty}</span>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {question.questionType.toUpperCase()}
                      </span>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        {subject?.title}
                      </span>
                    </div>
                    <h2 className="text-base font-medium">{question.title}</h2>
                  </div>
                  <div className="flex gap-2">
                    {question.codetantraLink && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={question.codetantraLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5 mr-1" />
                          Question
                        </Link>
                      </Button>
                    )}
                    <Button size="sm" asChild>
                      <Link href={`/subjects/${question.subject}/question/${question.id}`}>Answer</Link>
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : query ? (
        <div className="text-center p-8 border rounded-lg">
          <p className="text-muted-foreground mb-4">No results found for "{query}"</p>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      ) : (
        <div className="text-center p-8 border rounded-lg">
          <p className="text-muted-foreground">Enter a search term to find questions</p>
        </div>
      )}
    </div>
  )
}
