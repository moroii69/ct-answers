import type { McqOption } from "@/lib/data"
import { Check, X } from "lucide-react"

interface McqDisplayProps {
  options: McqOption[]
}

export default function McqDisplay({ options }: McqDisplayProps) {
  return (
    <div className="space-y-3 mt-4">
      {options.map((option) => (
        <div
          key={option.id}
          className={`flex items-start gap-3 p-3 rounded-md ${
            option.isCorrect ? "bg-primary/10 border border-primary/30" : "bg-muted"
          }`}
        >
          <div className="mt-0.5">
            {option.isCorrect ? (
              <Check className="h-5 w-5 text-primary" />
            ) : (
              <X className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
          <div>
            <p className={option.isCorrect ? "font-medium" : ""}>{option.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
