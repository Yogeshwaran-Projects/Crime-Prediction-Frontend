import Link from "next/link"
import { Home, BarChart2, Map, Settings, HelpCircle } from "lucide-react"

const menuItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Predictions", icon: BarChart2, href: "/predict" },
  { name: "Crime Map", icon: Map, href: "/map" },
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Help", icon: HelpCircle, href: "/help" },
]

export default function Sidebar() {
  return (
    <aside className="bg-primary text-white w-64 min-h-screen p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} passHref>
            <div className="flex items-center space-x-2 p-2 rounded hover:bg-primary-light cursor-pointer">
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

