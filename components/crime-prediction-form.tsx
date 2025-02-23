"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function CrimePredictionForm({ setResult }) {
  const [formData, setFormData] = useState({
    area: "",
    weapon_used: "",
    victim_age: "",
    victim_sex: "",
  })
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      })

      const data = await response.json()

      if (data.predictedCrime) {
        setResult(data)
      } else {
        setError("Failed to fetch prediction.")
      }
    } catch (err) {
      setError("An error occurred: " + err.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-lg p-8 bg-white shadow-xl rounded-2xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Crime Prediction Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="area" className="block text-lg font-medium text-gray-700">Area Code</label>
            <Input
              type="number"
              name="area"
              placeholder="Enter Area Code"
              value={formData.area}
              onChange={handleChange}
              required
              className="bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg py-3 px-4"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="weapon_used" className="block text-lg font-medium text-gray-700">Weapon Used Code</label>
            <Input
              type="number"
              name="weapon_used"
              placeholder="Enter Weapon Used Code"
              value={formData.weapon_used}
              onChange={handleChange}
              required
              className="bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg py-3 px-4"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="victim_age" className="block text-lg font-medium text-gray-700">Victim Age</label>
            <Input
              type="number"
              name="victim_age"
              placeholder="Enter Victim Age"
              value={formData.victim_age}
              onChange={handleChange}
              required
              className="bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg py-3 px-4"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="victim_sex" className="block text-lg font-medium text-gray-700">Victim Sex</label>
            <Input
              type="text"
              name="victim_sex"
              placeholder="Victim Sex (M/F/X/H/-)"
              value={formData.victim_sex}
              onChange={handleChange}
              required
              className="bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg py-3 px-4"
            />
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Analyze and Predict
            </Button>
          </motion.div>
        </form>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center bg-red-100 text-red-700 p-4 rounded-lg mt-6"
          >
            <AlertCircle className="mr-2" />
            <p>{error}</p>
          </motion.div>
        )}
      </Card>
    </div>
  )
}

export function PredictionResult({ result }) {
  if (!result) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-10 w-full max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8"
    >
      <div className="flex items-center space-x-3">
        <CheckCircle className="text-green-500 h-8 w-8" />
        <h3 className="text-3xl font-bold text-gray-800">Prediction Result</h3>
      </div>
      <div className="mt-6 space-y-4">
        <p className="text-lg text-gray-700"><span className="font-semibold">Predicted Crime:</span> {result.predictedCrime}</p>
        <p className="text-lg text-gray-700"><span className="font-semibold">Confidence Score:</span> {result.confidenceScore}</p>
        <p className="text-lg text-gray-700"><span className="font-semibold">Recommended Action:</span> {result.action}</p>
      </div>
    </motion.div>
  )
}
