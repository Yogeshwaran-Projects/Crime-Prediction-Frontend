"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

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
    <Card className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-primary">Enter Crime Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="number"
          name="area"
          placeholder="Area Code"
          value={formData.area}
          onChange={handleChange}
          required
          className="bg-gray-100 text-gray-800 placeholder-gray-500"
        />
        <Input
          type="number"
          name="weapon_used"
          placeholder="Weapon Used Code"
          value={formData.weapon_used}
          onChange={handleChange}
          required
          className="bg-gray-100 text-gray-800 placeholder-gray-500"
        />
        <Input
          type="number"
          name="victim_age"
          placeholder="Victim Age"
          value={formData.victim_age}
          onChange={handleChange}
          required
          className="bg-gray-100 text-gray-800 placeholder-gray-500"
        />
        <Input
          type="text"
          name="victim_sex"
          placeholder="Victim Sex (M/F/X/H/-)"
          value={formData.victim_sex}
          onChange={handleChange}
          required
          className="bg-gray-100 text-gray-800 placeholder-gray-500"
        />
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-light transition"
          >
            Analyze and Predict
          </Button>
        </motion.div>
      </form>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center bg-red-100 text-red-700 p-4 rounded-lg mt-4"
        >
          <AlertCircle className="mr-2" />
          <p>{error}</p>
        </motion.div>
      )}
    </Card>
  )
}

