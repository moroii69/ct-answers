import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { remark } from "remark"
import html from "remark-html"
import remarkGfm from "remark-gfm"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert markdown to HTML with proper formatting
export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false }) // Allow HTML tags for proper formatting
    .use(remarkGfm)
    .process(markdown)
  return result.toString()
}

// Get language name for syntax highlighting
export function getLanguageName(language: string) {
  switch (language.toLowerCase()) {
    case "java":
      return "java"
    case "sql":
      return "sql"
    case "psql":
      return "sql"
    default:
      return "text"
  }
}
