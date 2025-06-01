// Types for the data structure
export interface McqOption {
  id: string
  text: string
  isCorrect: boolean
}

export interface Question {
  id: string // Format: x.x.x (e.g., "1.1.1", "2.1.1", etc. - scoped to subject)
  title: string
  description: string
  difficulty: "Easy" | "Medium" | "Hard"
  subject: string
  questionType: "code" | "mcq" | "theory"
  question: string
  solution: string
  language: string
  testCasesPassed?: number
  totalTestCases?: number
  hiddenTestCasesPassed?: number
  totalHiddenTestCases?: number
  failedTestCaseMessage?: string
  mcqOptions?: McqOption[]
  codetantraLink?: string // Link to actual CodeTantra question
}

export interface Subject {
  id: string
  title: string
  description: string
  language: string
}
