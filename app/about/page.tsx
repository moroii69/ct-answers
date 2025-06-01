import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold">Disclaimer</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Educational Purpose Only</h2>
          <p>
            CodeTantra Answers is created with the sole intention of helping students learn programming concepts and
            understand solution approaches. This platform is designed as an educational resource to supplement your
            learning, not as a substitute for your own work and understanding.
          </p>

          <h2>Responsible Usage</h2>
          <p>We strongly encourage users to:</p>
          <ul>
            <li>Attempt to solve problems independently before consulting solutions</li>
            <li>Use our solutions to understand concepts and approaches, not for direct submission</li>
            <li>Study the provided code to enhance your programming skills</li>
            <li>Modify and adapt solutions to demonstrate your understanding</li>
            <li>Cite any external resources you use in your academic work</li>
          </ul>

          <h2>Academic Integrity</h2>
          <p>
            Using this website to directly copy solutions for submission as your own work may constitute academic
            dishonesty and could violate your institution's honor code or academic integrity policies. Such actions may
            result in serious consequences, including course failure or academic dismissal.
          </p>

          <p>We strongly advise all users to:</p>
          <ul>
            <li>Be familiar with and adhere to your institution's academic integrity policies</li>
            <li>Use this resource ethically and responsibly</li>
            <li>Understand that the purpose of programming assignments is to develop your skills</li>
            <li>Recognize that submitting others' work as your own undermines your education</li>
          </ul>

          <h2>Liability Disclaimer</h2>
          <p>The creators and maintainers of CodeTantra Answers:</p>
          <ul>
            <li>Accept no responsibility for any misuse of the content provided</li>
            <li>Cannot be held liable for any academic penalties or consequences resulting from improper use</li>
            <li>Do not guarantee the accuracy or completeness of all solutions</li>
            <li>Provide this service "as is" without warranties of any kind</li>
          </ul>

          <h2>Best Practices</h2>
          <p>To maximize the educational value of this resource:</p>
          <ul>
            <li>Use solutions as a learning aid after attempting problems yourself</li>
            <li>Try to understand why a solution works, not just what the code does</li>
            <li>Practice implementing similar solutions on your own</li>
            <li>Use the platform to compare your approach with alternative solutions</li>
            <li>Engage actively with the material rather than passively copying</li>
          </ul>

          <p className="font-semibold">
            By using CodeTantra Answers, you acknowledge that you have read, understood, and agree to abide by this
            disclaimer. The responsibility for ethical use of this resource lies solely with you, the user.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/subjects">Browse Subjects</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
