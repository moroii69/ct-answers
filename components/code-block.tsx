// Simple code block component to replace react-syntax-highlighter
interface CodeBlockProps {
  language: string
  code: string
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 px-2 py-1 text-xs font-mono text-muted-foreground bg-muted rounded-bl">
        {language.toUpperCase()}
      </div>
      <pre className="p-4 pt-8 overflow-x-auto bg-zinc-950 text-zinc-100 rounded-md font-mono text-sm">
        <code>{code}</code>
      </pre>
    </div>
  )
}
