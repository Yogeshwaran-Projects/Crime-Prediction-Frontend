"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast, Toaster } from "sonner"
import PredictionResults from "./PredictionResults"

const cities = [
    { value: "0", label: "Ahmedabad" },
    { value: "1", label: "Bengaluru" },
    { value: "2", label: "Chennai" },
    { value: "3", label: "Coimbatore" },
    { value: "4", label: "Delhi" },
    { value: "5", label: "Ghaziabad" },
    { value: "6", label: "Hyderabad" },
    { value: "7", label: "Indore" },
    { value: "8", label: "Jaipur" },
    { value: "9", label: "Kanpur" },
    { value: "10", label: "Kochi" },
    { value: "11", label: "Kolkata" },
    { value: "12", label: "Kozhikode" },
    { value: "13", label: "Lucknow" },
    { value: "14", label: "Mumbai" },
    { value: "15", label: "Nagpur" },
    { value: "16", label: "Patna" },
    { value: "17", label: "Pune" },
    { value: "18", label: "Surat" },
]

const crimeTypes = [
    { value: "0", label: "Crime Committed by Juveniles" },
    { value: "1", label: "Crime against SC" },
    { value: "2", label: "Crime against ST" },
    { value: "3", label: "Crime against Senior Citizen" },
    { value: "4", label: "Crime against children" },
    { value: "5", label: "Crime against women" },
    { value: "6", label: "Cyber Crimes" },
    { value: "7", label: "Economic Offences" },
    { value: "8", label: "Kidnapping" },
    { value: "9", label: "Murder" },
]

export default function CrimePredictionForm() {
    const [formData, setFormData] = useState({
        city: "",
        crimeType: "",
        year: "",
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [result, setResult] = useState(null)

    const handleChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);
        setResult(null);

        try {
            const response = await fetch("http://127.0.0.1:5001/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData).toString(),
            });

            console.log("Backend Response Status:", response.status); // Log the status code
            const data = await response.json();
            console.log("Backend Response Data:", data); // Log the response data

            if (data.crimeRate) { // Check for crimeRate instead of predictedCases
                const transformedResult = {
                    predictedCrime: data.crimeRate, // Use crimeRate as predictedCrime
                    cityName: data.city, // Map city to cityName
                    crimeType: data.crimeType,
                    year: data.year.toString(), // Convert year to string
                };
                setResult(transformedResult);
                console.log("Result set in state:", transformedResult);
                toast.success("The crime rate prediction has been calculated.");
            } else {
                setError("Failed to fetch prediction.");
                toast.error("Failed to fetch prediction. Please try again.");
            }
        } catch (err) {
            setError("An error occurred: " + err.message);
            toast.error(`An error occurred: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <Toaster richColors position="top-right" />
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                    <Label htmlFor="city" className="text-lg">
                        City
                    </Label>
                    <Select value={formData.city} onValueChange={(value) => handleChange("city", value)} required>
                        <SelectTrigger id="city" className="text-lg py-6 bg-white text-black border border-gray-300 rounded-lg shadow-md">
                            <SelectValue placeholder="Select a city" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black border border-gray-300 rounded-lg shadow-lg">
                            {cities.map((city) => (
                                <SelectItem key={city.value} value={city.value} className="text-lg hover:bg-gray-100">
                                    {city.label}
                                </SelectItem>
                            ))}
                        </SelectContent>

                    </Select>
                </div>
                <div className="space-y-4">
                    <Label htmlFor="crime-type" className="text-lg">
                        Crime Type
                    </Label>
                    <Select value={formData.crimeType} onValueChange={(value) => handleChange("crimeType", value)} required>
                        <SelectTrigger id="crime-type" className="text-lg py-6 bg-white text-black border border-gray-300 rounded-lg shadow-md">
                            <SelectValue placeholder="Select a crime type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black border border-gray-300 rounded-lg shadow-lg">
                            {crimeTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value} className="text-lg hover:bg-gray-100">
                                    {type.label}
                                </SelectItem>
                            ))}
                        </SelectContent>

                    </Select>
                </div>
                <div className="space-y-4">
                    <Label htmlFor="year" className="text-lg">
                        Year
                    </Label>
                    <Input
                        id="year"
                        type="number"
                        placeholder="Enter year"
                        value={formData.year}
                        onChange={(e) => handleChange("year", e.target.value)}
                        min="2000"
                        max="2100"
                        required
                        className="text-lg py-6"
                    />
                </div>
                <Button type="submit" className="w-full text-lg py-6" disabled={isLoading}>
                    {isLoading ? "Predicting..." : "Predict Crime Rate"}
                </Button>
            </form>
            {error && <div className="text-red-600 text-lg mt-4">{error}</div>}
            console.log("Result in parent component:", result);
            {result && <PredictionResults result={result} />}
        </div>
    )
}
