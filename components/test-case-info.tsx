import { CheckCircle, AlertCircle } from "lucide-react"

interface TestCaseInfoProps {
  passed: number
  total: number
  hiddenPassed?: number
  totalHidden?: number
  failedMessage?: string
}

export default function TestCaseInfo({ passed, total, hiddenPassed, totalHidden, failedMessage }: TestCaseInfoProps) {
  const allPassed = passed === total
  const allHiddenPassed = totalHidden === 0 || (hiddenPassed !== undefined && hiddenPassed === totalHidden)

  return (
    <div className="space-y-2">
      {/* Regular test cases */}
      <div className={`p-3 rounded-md ${allPassed ? "bg-primary/10" : "bg-amber-100 dark:bg-amber-950"}`}>
        <div className="flex items-center gap-2">
          {allPassed ? (
            <CheckCircle className="h-5 w-5 text-primary" />
          ) : (
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          )}
          <p className="font-medium">
            {passed}/{total} test cases passed
          </p>
        </div>
        {!allPassed && failedMessage && <p className="mt-1 text-sm text-muted-foreground pl-7">{failedMessage}</p>}
      </div>

      {/* Hidden test cases */}
      <div className={`p-3 rounded-md ${allHiddenPassed ? "bg-primary/10" : "bg-amber-100 dark:bg-amber-950"}`}>
        <div className="flex items-center gap-2">
          {allHiddenPassed ? (
            <CheckCircle className="h-5 w-5 text-primary" />
          ) : (
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          )}
          <p className="font-medium">
            {totalHidden === 0
              ? "No hidden test cases"
              : `${hiddenPassed || 0}/${totalHidden} hidden test cases passed`}
          </p>
        </div>
      </div>
    </div>
  )
}
