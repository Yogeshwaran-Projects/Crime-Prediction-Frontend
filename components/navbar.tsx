"use client"
import Link from "next/link"
import { Bell, User, Search } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary-light shadow-lg text-secondary"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" passHref>
            <span className="text-4xl font-extrabold text-accent cursor-pointer hover:text-secondary transition duration-300">
              CrimeInsight Pro
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-primary-light text-secondary rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-secondary" />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full bg-primary hover:bg-accent hover:text-primary transition"
            >
              <Bell className="h-6 w-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full bg-primary hover:bg-accent hover:text-primary transition"
            >
              <User className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
