"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

const mockData = [
  { name: "Theft", count: 150 },
  { name: "Assault", count: 80 },
  { name: "Burglary", count: 60 },
  { name: "Robbery", count: 40 },
  { name: "Fraud", count: 30 },
]

export default function HistoricalTrends() {
  const [data, setData] = useState([])

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    setData(mockData)
  }, [])

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="bg-white shadow-lg rounded-lg">
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-primary">Historical Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#1e293b" />
              <YAxis stroke="#1e293b" />
              <Tooltip
                contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0" }}
                labelStyle={{ color: "#1e293b" }}
              />
              <Legend />
              <Bar dataKey="count" fill="#1e293b" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  )
}

