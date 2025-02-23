"use client"

import { ArrowRight, Brain, Database, FileCode, Github, Server, Share2 } from "lucide-react"
import { motion } from "framer-motion"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const performanceData = [
  { name: "Random Forest", accuracy: 92, precision: 89, recall: 90 },
  { name: "SVM", accuracy: 88, precision: 85, recall: 87 },
  { name: "Neural Network", accuracy: 90, precision: 88, recall: 89 },
  { name: "Decision Tree", accuracy: 85, precision: 83, recall: 84 },
]

const monthlyPredictions = [
  { month: "Jan", predictions: 420 },
  { month: "Feb", predictions: 580 },
  { month: "Mar", predictions: 650 },
  { month: "Apr", predictions: 590 },
  { month: "May", predictions: 780 },
  { month: "Jun", predictions: 890 },
]

const tools = [
  {
    name: "Python",
    description: "Primary programming language used for model development",
    icon: FileCode,
  },
  {
    name: "Scikit-learn",
    description: "Machine learning library for model training and evaluation",
    icon: Brain,
  },
  {
    name: "Pandas",
    description: "Data manipulation and analysis library",
    icon: Database,
  },
  {
    name: "TensorFlow",
    description: "Deep learning framework for neural network implementation",
    icon: Server,
  },
]

export default function PredictDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
    <div className="flex-1 space-y-12 p-6 md:p-12 pt-8">
      {/* Hero Section */}
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">Crime Prediction Dashboard</h1>
        <p className="text-2xl text-muted-foreground">Explore our machine learning-powered crime prediction system</p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6 h-44">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Accuracy Rate</CardTitle>
            <LineChart className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">92.4%</div>
            <p className="text-sm text-muted-foreground">+2.3% from previous model</p>
          </CardContent>
        </Card>
        <Card className="p-6 h-44">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Dataset Size</CardTitle>
            <Database className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">50,000+</div>
            <p className="text-sm text-muted-foreground">Crime records analyzed</p>
          </CardContent>
        </Card>
        <Card className="p-6 h-44">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Features Used</CardTitle>
            <Share2 className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">25+</div>
            <p className="text-sm text-muted-foreground">Predictive variables</p>
          </CardContent>
        </Card>
        <Card className="p-6 h-44">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Processing Time</CardTitle>
            <Brain className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{"< 2s"}</div>
            <p className="text-sm text-muted-foreground">Per prediction request</p>
          </CardContent>
        </Card>
      </div>

       {/* Main Content Tabs */}
<Tabs defaultValue="dataset" className="space-y-6">
  <TabsList className="text-lg">
    <TabsTrigger value="dataset" className="px-6 py-3">Dataset</TabsTrigger>
    <TabsTrigger value="model" className="px-6 py-3">Model</TabsTrigger>
    <TabsTrigger value="performance" className="px-6 py-3">Performance</TabsTrigger>
    <TabsTrigger value="tools" className="px-6 py-3">Tools</TabsTrigger>
  </TabsList>

  {/* Dataset Tab */}
  <TabsContent value="dataset" className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl">Dataset Overview</CardTitle>
        <CardDescription className="text-lg">Understanding our crime data collection and preprocessing</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Data Sources</h4>
            <ul className="list-disc list-inside text-md text-muted-foreground space-y-2">
              <li>Official police crime reports (2018-2024)</li>
              <li>Public safety incident databases</li>
              <li>Emergency response logs</li>
              <li>Demographic and socioeconomic data</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Preprocessing Steps</h4>
            <ul className="list-disc list-inside text-md text-muted-foreground space-y-2">
              <li>Data cleaning and normalization</li>
              <li>Feature engineering and selection</li>
              <li>Handling missing values</li>
              <li>Temporal aggregation</li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Monthly Predictions</h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyPredictions}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="predictions" stroke="hsl(var(--primary))" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  </TabsContent>

  {/* Model Tab */}
  <TabsContent value="model" className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl">Model Architecture</CardTitle>
        <CardDescription className="text-lg">Deep dive into our prediction model</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Primary Algorithm</h4>
            <p className="text-md text-muted-foreground">
              We utilize a Random Forest classifier as our primary algorithm, which combines multiple decision
              trees to make robust predictions. This ensemble approach helps reduce overfitting and improves
              generalization.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Model Parameters</h4>
            <ul className="list-disc list-inside text-md text-muted-foreground space-y-2">
              <li>Number of trees: 100</li>
              <li>Max depth: 20</li>
              <li>Min samples split: 10</li>
              <li>Feature selection: PCA</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Training Process</h4>
          <ol className="list-decimal list-inside text-md text-muted-foreground space-y-2">
            <li>Data splitting (80% training, 20% testing)</li>
            <li>Cross-validation with 5 folds</li>
            <li>Hyperparameter tuning using grid search</li>
            <li>Model evaluation on test set</li>
            <li>Regular retraining with new data</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  </TabsContent>

  {/* Performance Tab */}
  <TabsContent value="performance" className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl">Model Performance</CardTitle>
        <CardDescription className="text-lg">Comparative analysis of different algorithms</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={performanceData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="accuracy" fill="hsl(var(--primary))" name="Accuracy" />
            <Bar dataKey="precision" fill="hsl(var(--secondary))" name="Precision" />
            <Bar dataKey="recall" fill="hsl(var(--accent))" name="Recall" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </TabsContent>

  {/* Tools Tab */}
  <TabsContent value="tools" className="space-y-6">
    <div className="grid gap-6 md:grid-cols-2">
      {tools.map((tool) => (
        <Card key={tool.name}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <tool.icon className="h-6 w-6" />
              <CardTitle className="text-xl">{tool.name}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-md text-muted-foreground">{tool.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </TabsContent>
</Tabs>

{/* Action Buttons */}
<div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
    <Link href="/predict" passHref>
      <Button size="lg" variant="default" className="w-full text-white sm:w-auto text-lg px-8 py-4">
        Start Predicting
      </Button>
    </Link>
  </motion.div>
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
    <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
      <Github className="mr-3 h-6 w-6" />
      View on GitHub
    </Button>
  </motion.div>
</div>

      </div>
    </div>
  )
}

