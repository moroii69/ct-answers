import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function Home() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-lg text-center space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            CodeTantra <span className="text-primary">Answers</span>
          </h1>
          <p className="text-muted-foreground">Find programming solutions</p>
        </div>

        <form action="/search" className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" name="q" placeholder="Search questions..." className="pl-10" />
          </div>
          <Button type="submit" className="w-full">
            Search
          </Button>
        </form>

        <div className="grid grid-cols-2 gap-3">
          <Button asChild variant="outline" size="sm">
            <Link href="/subjects/java-theory">Java Theory</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/subjects/java-lab">Java Lab</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/subjects/dbms-theory">DBMS Theory</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/subjects/dbms-lab">DBMS Lab</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
