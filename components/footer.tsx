export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CodeTantra Answers. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          For any queries, reach out at{" "}
          <a href="mailto:kurosen930@gmail.com" className="text-primary hover:underline">
            kurosen930@gmail.com
          </a>
        </p>
      </div>
    </footer>
  )
}
