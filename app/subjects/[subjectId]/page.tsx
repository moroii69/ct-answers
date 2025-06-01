import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { notFound } from "next/navigation"
import { getSubjectById, getQuestionsBySubject } from "@/lib/data"

interface SubjectPageProps {
  params: {
    subjectId: string
  }
}

export default function SubjectPage({ params }: SubjectPageProps) {
  const subject = getSubjectById(params.subjectId)

  if (!subject) {
    notFound()
  }

  const questions = getQuestionsBySubject(params.subjectId)

  return (
    <div className="container px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back
        </Link>
        <h1 className="text-2xl font-bold">{subject.title}</h1>
      </div>

      {questions.length > 0 ? (
        <div className="space-y-3">
          {questions.map((question) => (
            <div key={question.id} className="p-4 rounded-lg border bg-card hover:border-primary/50 transition-all">
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
                    <Link href={`/subjects/${params.subjectId}/question/${question.id}`}>Answer</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-8 border rounded-lg">
          <p className="text-muted-foreground mb-4">No questions found for this subject.</p>
          <Button asChild>
            <Link href="/">Go Back</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
