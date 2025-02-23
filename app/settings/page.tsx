"use client"

import { useState } from "react"
import { Database, Download, Globe, Key, Save, Settings2, Share2, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  const [isPending, setIsPending] = useState(false)

  const handleSave = () => {
    setIsPending(true)
    setTimeout(() => {
      setIsPending(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 space-y-10 p-6 md:p-10 pt-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-extrabold tracking-tight">Settings</h2>
          <p className="text-lg text-muted-foreground">Manage your project preferences and configurations</p>
        </div>
        <Separator className="my-8" />

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList>
            <TabsTrigger value="general" className="text-lg">General</TabsTrigger>
            <TabsTrigger value="model" className="text-lg">Model Configuration</TabsTrigger>
            <TabsTrigger value="data" className="text-lg">Data Management</TabsTrigger>
            <TabsTrigger value="api" className="text-lg">API Settings</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">General Settings</CardTitle>
                <CardDescription className="text-lg">Configure your project&apos;s basic settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications" className="text-lg">
                      <span>Email Notifications</span>
                      <span className="text-base text-muted-foreground">
                        Receive notifications about prediction results
                      </span>
                    </Label>
                    <Switch id="notifications" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <Label htmlFor="updates" className="text-lg">
                      <span>Automatic Updates</span>
                      <span className="text-base text-muted-foreground">
                        Keep the model updated with the latest data
                      </span>
                    </Label>
                    <Switch id="updates" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sharing" className="text-lg">
                      <span>Data Sharing</span>
                      <span className="text-base text-muted-foreground">
                        Share anonymous data for research
                      </span>
                    </Label>
                    <Switch id="sharing" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Model Configuration */}
          <TabsContent value="model" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Model Parameters</CardTitle>
                <CardDescription className="text-lg">Configure your prediction model settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div className="grid gap-4">
                    <Label className="text-lg">Algorithm Selection</Label>
                    <Select defaultValue="random-forest">
                      <SelectTrigger>
                        <SelectValue placeholder="Select algorithm" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="random-forest">Random Forest</SelectItem>
                        <SelectItem value="svm">Support Vector Machine</SelectItem>
                        <SelectItem value="neural-network">Neural Network</SelectItem>
                        <SelectItem value="decision-tree">Decision Tree</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-4">
                    <Label className="text-lg">Training Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-4">
                    <Label htmlFor="threshold" className="text-lg">Confidence Threshold</Label>
                    <Input id="threshold" type="number" min="0" max="1" step="0.1" defaultValue="0.8" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data Management */}
          <TabsContent value="data" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Data Sources</CardTitle>
                <CardDescription className="text-lg">Manage your data sources and import settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Database className="h-6 w-6" />
                      <Label className="text-lg">Police Reports Database</Label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Globe className="h-6 w-6" />
                      <Label className="text-lg">Public Safety Data</Label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-lg">
                  <Download className="mr-2 h-6 w-6" />
                  Export Data
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* API Settings */}
          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">API Configuration</CardTitle>
                <CardDescription className="text-lg">Manage your API settings and access</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div className="grid gap-4">
                    <Label className="text-lg">API Version</Label>
                    <Select defaultValue="v2">
                      <SelectTrigger>
                        <SelectValue placeholder="Select version" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="v1">Version 1.0</SelectItem>
                        <SelectItem value="v2">Version 2.0</SelectItem>
                        <SelectItem value="v3-beta">Version 3.0 (Beta)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-4">
                    <Label htmlFor="endpoint" className="text-lg">API Endpoint</Label>
                    <Input id="endpoint" defaultValue="https://api.crimeprediction.com/v2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-6">
          <Button variant="outline" className="text-lg">Cancel</Button>
          <Button onClick={handleSave} disabled={isPending} className="text-lg">
            {isPending && <Settings2 className="mr-2 h-6 w-6 animate-spin" />}
            {!isPending && <Save className="mr-2 h-6 w-6" />}
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}
