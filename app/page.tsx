"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl font-bold mb-6 text-primary">CrimeInsight Pro</h1>
        <p className="text-xl mb-8 text-gray-600">
          Empower your law enforcement strategies with advanced AI-driven crime prediction and analysis. Stay ahead of
          criminal activities and enhance public safety with data-driven insights.
        </p>
        <Link href="/predict" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-primary-light transition flex items-center justify-center"
          >
            Start Predicting <ArrowRight className="ml-2" />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}

