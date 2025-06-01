"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function TermsDialog() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Check if user has accepted terms
    const hasAcceptedTerms = localStorage.getItem("acceptedTerms")
    if (!hasAcceptedTerms) {
      setOpen(true)
    }
  }, [])

  const acceptTerms = () => {
    localStorage.setItem("acceptedTerms", "true")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogDescription>
            Please read and accept our terms and conditions before using this website.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-auto p-4 border rounded-md">
          <h3 className="text-lg font-semibold mb-2">Educational Purpose</h3>
          <p className="mb-4">
            This website is solely created by a student to help others learn and not directly copy. The purpose is to
            provide a resource for understanding programming concepts and solutions.
          </p>

          <h3 className="text-lg font-semibold mb-2">User Responsibility</h3>
          <p className="mb-4">
            By using this website, you agree to use the content responsibly and ethically. The solutions provided should
            be used as learning resources, not for direct submission as your own work.
          </p>

          <h3 className="text-lg font-semibold mb-2">Academic Integrity</h3>
          <p className="mb-4">
            Users are expected to maintain academic integrity and follow their institution's policies regarding academic
            honesty. Copying solutions without understanding them may violate your institution's honor code.
          </p>

          <h3 className="text-lg font-semibold mb-2">Disclaimer</h3>
          <p className="mb-4">
            Any misuse of this website will be on the risk of the user and shall not by any means be blamed on the
            website owner. The website owner is not responsible for any academic penalties or consequences resulting
            from the misuse of the content provided.
          </p>

          <h3 className="text-lg font-semibold mb-2">Best Practices</h3>
          <p className="mb-4">
            We recommend:
            <br />- Attempting to solve problems on your own first
            <br />- Using our solutions to understand concepts
            <br />- Modifying and adapting code to demonstrate your understanding
            <br />- Citing any external resources you use in your work
          </p>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button onClick={acceptTerms} className="w-full sm:w-auto">
            I Accept the Terms and Conditions
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
