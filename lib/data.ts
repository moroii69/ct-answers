import type { Question, Subject } from "./types"
import { javaTheoryQuestions } from "./data/java-theory"
import { javaLabQuestions } from "./data/java-lab"
import { dbmsTheoryQuestions } from "./data/dbms-theory"
import { dbmsLabQuestions } from "./data/dbms-lab"

export type { McqOption, Question, Subject } from "./types"

export const subjects: Subject[] = [
  {
    id: "java-theory",
    title: "Java Programming (Theory)",
    description: "Theoretical concepts of Java programming language",
    language: "java",
  },
  {
    id: "java-lab",
    title: "Java Programming (Laboratory)",
    description: "Practical implementation of Java programming concepts",
    language: "java",
  },
  {
    id: "dbms-theory",
    title: "Database Management Systems (Theory)",
    description: "Theoretical concepts of database management systems",
    language: "sql",
  },
  {
    id: "dbms-lab",
    title: "Database Management Systems (Laboratory)",
    description: "Practical implementation of database management systems",
    language: "sql",
  },
]

// Combine all questions from different subjects
export const questions: Question[] = [
  ...javaTheoryQuestions,
  ...javaLabQuestions,
  ...dbmsTheoryQuestions,
  ...dbmsLabQuestions,
]

// Helper functions
export function getQuestionsBySubject(subjectId: string): Question[] {
  return questions.filter((q) => q.subject === subjectId)
}

export function getQuestionById(subjectId: string, questionId: string): Question | undefined {
  return questions.find((q) => q.subject === subjectId && q.id === questionId)
}

export function searchQuestions(query: string): Question[] {
  const lowerQuery = query.toLowerCase()

  return questions.filter(
    (q) =>
      q.id.toLowerCase().includes(lowerQuery) ||
      q.title.toLowerCase().includes(lowerQuery) ||
      q.description.toLowerCase().includes(lowerQuery) ||
      q.question.toLowerCase().includes(lowerQuery),
  )
}

export function getSubjectById(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id)
}
