import Link from "next/link"
import { Bell, User } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" passHref>
              <span className="text-2xl font-bold text-primary cursor-pointer">CrimeInsight Pro</span>
            </Link>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              <Bell className="h-6 w-6" />
            </button>
            <button className="ml-3 p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

