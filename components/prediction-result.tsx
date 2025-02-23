"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldAlert, TrendingUp, AlertTriangle } from "lucide-react"

export default function PredictionResult({ result }) {
  if (!result) return null

  const severityColor = {
    Low: "text-green-600",
    Medium: "text-yellow-600",
    High: "text-red-600",
  }

  const severityIcon = {
    Low: <TrendingUp className="w-5 h-5 text-green-600" />,
    Medium: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
    High: <ShieldAlert className="w-5 h-5 text-red-600" />,
  }

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Card className="bg-white shadow-lg rounded-lg">
        <CardContent className="p-6">
          <div className="flex items-center text-primary mb-4">
            {severityIcon[result.severityLevel]}
            <h3 className="text-2xl font-bold ml-2">Prediction Result</h3>
          </div>
          <div className="space-y-2">
            <p>
              <strong>Predicted Crime:</strong> {result.predictedCrime}
            </p>
            <p>
              <strong>Severity Level:</strong>{" "}
              <span className={severityColor[result.severityLevel]}>{result.severityLevel}</span>
            </p>
            <p>
              <strong>Reason:</strong> {result.severityReason}
            </p>
            <p>
              <strong>Additional Insights:</strong> {result.additionalInsights}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

