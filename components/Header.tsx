import { Github } from 'lucide-react'

export const Header = () => {
  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <h3 className="text-lg font-bold uppercase md:text-xl">
          Hash<span className="text-secondary">Code</span>
        </h3>

        <a href="/">
          <Github className="size-6" />
        </a>
      </nav>
    </header>
  )
}
