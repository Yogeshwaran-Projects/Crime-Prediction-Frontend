"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import CrimePredictionForm from "@/components/crime-prediction-form"
import PredictionResult from "@/components/prediction-result"
import HistoricalTrends from "@/components/historical-trends"

export default function PredictPage() {
  const [result, setResult] = useState(null)

  return (
    <div className="container mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-primary"
      >
        Crime Prediction Analysis
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <CrimePredictionForm setResult={setResult} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <PredictionResult result={result} />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12"
      >
        <HistoricalTrends />
      </motion.div>
    </div>
  )
}

