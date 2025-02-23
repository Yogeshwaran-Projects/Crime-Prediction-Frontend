"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Database, Share2, Timer, Brain } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function CrimePredictionDashboard() {
  const [formData, setFormData] = useState({
    area: "",
    weapon_used: "",
    victim_age: "",
    victim_sex: "",
  })
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)
    setIsDrawerOpen(true)

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
    } finally {
      setIsLoading(false)
    }
  }

  const severityColor = {
    Low: "bg-green-100 text-green-900",
    Medium: "bg-yellow-100 text-yellow-900",
    High: "bg-orange-100 text-orange-900",
    Severe: "bg-red-100 text-red-900",
    Unknown: "bg-gray-100 text-gray-900",
  }

  return (
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">Crime Prediction Dashboard</h1>
          <p className="text-2xl text-gray-600">Explore our machine learning-powered crime prediction system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-gray-500">Accuracy Rate</h3>
              <Brain className="h-8 w-8 text-gray-400" />
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold">92.4%</p>
              <p className="text-lg text-green-600">+2.3% from previous model</p>
            </div>
          </Card>

          <Card className="p-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-gray-500">Dataset Size</h3>
              <Database className="h-8 w-8 text-gray-400" />
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold">50,000+</p>
              <p className="text-lg text-gray-600">Crime records analyzed</p>
            </div>
          </Card>

          <Card className="p-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-gray-500">Features Used</h3>
              <Share2 className="h-8 w-8 text-gray-400" />
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-lg text-gray-600">Predictive variables</p>
            </div>
          </Card>

          <Card className="p-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-gray-500">Processing Time</h3>
              <Timer className="h-8 w-8 text-gray-400" />
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold">{"< 2s"}</p>
              <p className="text-lg text-gray-600">Per prediction request</p>
            </div>
          </Card>
        </div>

        <Card className="p-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Make a Prediction</h2>
              <p className="text-xl text-gray-600">
                Enter the required information to predict potential criminal activity
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label htmlFor="area" className="text-lg font-medium text-gray-900">
                    Area Code
                  </label>
                  <Input
                    type="number"
                    name="area"
                    placeholder="Enter Area Code"
                    value={formData.area}
                    onChange={handleChange}
                    required
                    className="border-gray-200 focus:ring-gray-900 focus:border-gray-900 text-xl py-4"
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="weapon_used" className="text-lg font-medium text-gray-900">
                    Weapon Used Code
                  </label>
                  <Input
                    type="number"
                    name="weapon_used"
                    placeholder="Enter Weapon Used Code"
                    value={formData.weapon_used}
                    onChange={handleChange}
                    required
                    className="border-gray-200 focus:ring-gray-900 focus:border-gray-900 text-xl py-4"
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="victim_age" className="text-lg font-medium text-gray-900">
                    Victim Age
                  </label>
                  <Input
                    type="number"
                    name="victim_age"
                    placeholder="Enter Victim Age"
                    value={formData.victim_age}
                    onChange={handleChange}
                    required
                    className="border-gray-200 focus:ring-gray-900 focus:border-gray-900 text-xl py-4"
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="victim_sex" className="text-lg font-medium text-gray-900">
                    Victim Sex
                  </label>
                  <Input
                    type="text"
                    name="victim_sex"
                    placeholder="Victim Sex (M/F/X/H/-)"
                    value={formData.victim_sex}
                    onChange={handleChange}
                    required
                    className="border-gray-200 focus:ring-gray-900 focus:border-gray-900 text-xl py-4"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                  <DrawerTrigger asChild>
                    <Button
                      type="submit"
                      className="bg-gray-900 text-white hover:bg-gray-800 text-xl py-6 px-8"
                      disabled={isLoading}
                    >
                      {isLoading ? "Analyzing..." : "Analyze and Predict"}
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="bg-white">
                    <div className="mx-auto w-full max-w-2xl">
                      <DrawerHeader>
                        <DrawerTitle className="text-3xl font-bold">Prediction Result</DrawerTitle>
                        <DrawerDescription className="text-xl">Based on the provided information</DrawerDescription>
                      </DrawerHeader>
                      <div className="p-6 space-y-6">
                        {result && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-2xl text-gray-600">Predicted Crime:</span>
                              <span className="text-2xl font-medium text-gray-900">{result.predictedCrime}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-2xl text-gray-600">Severity Level:</span>
                              <span
                                className={`px-4 py-2 rounded-full text-xl font-medium ${severityColor[result.severityLevel]}`}
                              >
                                {result.severityLevel}
                              </span>
                            </div>
                            <div className="pt-6 border-t">
                              <p className="text-xl text-gray-600">{result.severityReason}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </form>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-red-50 text-red-900 rounded-lg text-xl"
              >
                {error}
              </motion.div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}

