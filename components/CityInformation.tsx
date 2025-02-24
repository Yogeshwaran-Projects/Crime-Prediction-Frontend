"use client"

import { useState, useEffect } from "react"

export default function CityInformation() {
  const [cityInfo, setCityInfo] = useState({
    name: "",
    population: 0,
    area: 0,
    description: "",
  })

  useEffect(() => {
    // Simulating fetching city information
    setCityInfo({
      name: "Chennai",
      population: 8_336_817,
      area: 468.9,
      description:
        "Chennai is the most populous city in the Tamilnadu, known for its iconic skyline, diverse culture, and global significance in finance, art, and entertainment.",
    })
  }, [])

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{cityInfo.name}</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="font-medium">Population:</span>
          <p>{cityInfo.population.toLocaleString()}</p>
        </div>
        <div>
          <span className="font-medium">Area:</span>
          <p>{cityInfo.area} sq mi</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">{cityInfo.description}</p>
    </div>
  )
}

