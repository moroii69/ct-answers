"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, Check, ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { getQuestionById, getSubjectById } from "@/lib/data"
import { markdownToHtml } from "@/lib/utils"
import McqDisplay from "@/components/mcq-display"
import TestCaseInfo from "@/components/test-case-info"
import CodeBlock from "@/components/code-block"

interface QuestionPageProps {
  params: {
    subjectId: string
    questionId: string
  }
}

export default function QuestionPage({ params }: QuestionPageProps) {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)
  const [questionHtml, setQuestionHtml] = useState<string>("")
  const [solutionHtml, setSolutionHtml] = useState<string>("")

  const question = getQuestionById(params.subjectId, params.questionId)
  const subject = getSubjectById(params.subjectId)

  useEffect(() => {
    if (question) {
      // Convert markdown to HTML for both question and solution
      markdownToHtml(question.question).then((html) => {
        setQuestionHtml(html)
      })

      if (question.questionType === "theory") {
        markdownToHtml(question.solution).then((html) => {
          setSolutionHtml(html)
        })
      }
    }
  }, [question])

  if (!question || !subject) {
    return (
      <div className="container px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Question Not Found</h1>
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    )
  }

  const copyCode = () => {
    navigator.clipboard.writeText(question.solution)
    setCopied(true)
    toast({
      title: "Copied",
      description: "Solution copied to clipboard",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <Link
          href={`/subjects/${params.subjectId}`}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to {subject.title}
        </Link>

        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium px-2 py-1 rounded bg-primary/10 text-primary">{question.id}</span>
              <span className="text-xs px-2 py-1 rounded bg-muted">{question.difficulty}</span>
              <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                {question.questionType.toUpperCase()}
              </span>
            </div>
            <h1 className="text-2xl font-bold">{question.title}</h1>
          </div>

          <div className="flex gap-2">
            {question.codetantraLink && (
              <Button variant="outline" size="sm" asChild>
                <Link href={question.codetantraLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Split View Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Question Panel */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">Question</h2>
          <div className="prose dark:prose-invert max-w-none prose-sm">
            <div dangerouslySetInnerHTML={{ __html: questionHtml }} />
          </div>
        </div>

        {/* Solution Panel */}
        <div className="rounded-lg border bg-card overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Solution</h2>
            {question.questionType === "code" && (
              <Button variant="ghost" size="sm" onClick={copyCode}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            )}
          </div>

          <div className="overflow-auto p-4">
            {question.questionType === "mcq" && question.mcqOptions ? (
              <McqDisplay options={question.mcqOptions} />
            ) : question.questionType === "code" ? (
              <>
                <CodeBlock language={question.language} code={question.solution} />
                {question.testCasesPassed !== undefined && question.totalTestCases !== undefined && (
                  <div className="mt-4">
                    <TestCaseInfo
                      passed={question.testCasesPassed}
                      total={question.totalTestCases}
                      hiddenPassed={question.hiddenTestCasesPassed}
                      totalHidden={question.totalHiddenTestCases}
                      failedMessage={question.failedTestCaseMessage}
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="prose dark:prose-invert max-w-none prose-sm">
                <div dangerouslySetInnerHTML={{ __html: solutionHtml }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
