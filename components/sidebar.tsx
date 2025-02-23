import Link from "next/link";
import { Home, BarChart2, Map, Settings, HelpCircle } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Predictions", icon: BarChart2, href: "/predict" },
  { name: "Crime Map", icon: Map, href: "/map" },
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Help", icon: HelpCircle, href: "/help" },
];

export default function Sidebar() {
  return (
    <aside className="bg-primary text-white w-64 min-h-screen p-6">
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} passHref>
            <div className="flex items-center space-x-4 p-4 rounded-xl text-lg hover:bg-primary-light hover:text-secondary hover:scale-105 transition duration-200 cursor-pointer">
              <item.icon className="w-6 h-6" />
              <span className="font-semibold">{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
