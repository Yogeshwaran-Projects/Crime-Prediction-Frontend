"use client"

import { useState } from "react"
import { Calendar, Filter, MapPin, Search } from "lucide-react"
import dynamic from "next/dynamic"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

// Import Leaflet map dynamically to avoid SSR issues
const Map = dynamic(() => import("./map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-muted/20 animate-pulse rounded-xl flex items-center justify-center text-lg font-semibold">
      Loading map...
    </div>
  ),
})

const crimeData = [
  { month: "Jan", count: 65 },
  { month: "Feb", count: 45 },
  { month: "Mar", count: 55 },
  { month: "Apr", count: 40 },
  { month: "May", count: 35 },
  { month: "Jun", count: 50 },
]

const recentCrimes = [
  {
    id: 1,
    type: "Theft",
    location: "Downtown Area",
    date: "2024-02-23",
    status: "Under Investigation",
    description: "Reported theft of personal belongings from parked vehicle",
  },
  {
    id: 2,
    type: "Vandalism",
    location: "Central Park",
    date: "2024-02-22",
    status: "Resolved",
    description: "Property damage reported in public recreational area",
  },
  {
    id: 3,
    type: "Assault",
    location: "Main Street",
    date: "2024-02-21",
    status: "Active",
    description: "Physical altercation between two individuals",
  },
]

export default function CrimeMap() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 space-y-6 p-6 md:p-12 pt-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-5xl font-extrabold tracking-tight">Crime Map Analytics</h2>
            <p className="text-lg text-muted-foreground">Interactive visualization of crime data and statistics</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="lg">
              <Calendar className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="lg">
              <Filter className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <Separator />

        {/* Main Grid */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-7">
          {/* Map Card */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle className="text-3xl">Geographic Distribution</CardTitle>
              <CardDescription className="text-lg">Interactive map showing crime locations and hotspots</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute top-4 right-4 z-10 flex gap-4">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[200px] text-lg bg-background">
                      <SelectValue placeholder="Crime Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="theft">Theft</SelectItem>
                      <SelectItem value="assault">Assault</SelectItem>
                      <SelectItem value="vandalism">Vandalism</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-6 w-6 text-muted-foreground" />
                    <Input
                      placeholder="Search location..."
                      className="w-[250px] pl-10 py-3 text-lg bg-background"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <Map className="w-full h-[500px] rounded-xl mt-6" />
              </div>
            </CardContent>
          </Card>

          {/* Crime Trends */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle className="text-3xl">Crime Trends</CardTitle>
              <CardDescription className="text-lg">Monthly crime statistics and patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={crimeData}>
                  <XAxis dataKey="month" tick={{ fontSize: 16 }} />
                  <YAxis tick={{ fontSize: 16 }} />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} className="fill-primary" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Crimes */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {recentCrimes.map((crime) => (
            <Card key={crime.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">{crime.type}</CardTitle>
                    <div className="flex items-center text-lg text-muted-foreground">
                      <MapPin className="mr-2 h-5 w-5" />
                      {crime.location}
                    </div>
                  </div>
                  <div
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                      crime.status === "Active"
                        ? "bg-red-200 text-red-800"
                        : crime.status === "Resolved"
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {crime.status}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-lg">{crime.description}</p>
                  <p className="text-lg text-muted-foreground">Reported on: {crime.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
