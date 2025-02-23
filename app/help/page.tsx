"use client"

import { AlertCircle, Book, FileQuestion, Github, HelpCircle, Mail, MessageSquare, Phone } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

const faqData = [
  {
    question: "How accurate is the crime prediction model?",
    answer:
      "Our model achieves an accuracy rate of over 90% based on historical data. The accuracy is continuously monitored and improved through regular model updates and training with new data.",
  },
  {
    question: "What data sources are used for predictions?",
    answer:
      "We utilize multiple data sources including official police reports, emergency response logs, public safety incident databases, and demographic data. All data is properly anonymized and processed following privacy guidelines.",
  },
  {
    question: "How often is the model updated?",
    answer:
      "The model is updated daily with new data, while comprehensive retraining occurs weekly to ensure optimal performance and accuracy in predictions.",
  },
  {
    question: "Can I export the prediction results?",
    answer:
      "Yes, you can export prediction results in multiple formats including CSV, JSON, and PDF. This can be configured in the settings page under the Data Management section.",
  },
  {
    question: "What algorithms are used for prediction?",
    answer:
      "We primarily use Random Forest algorithm along with Support Vector Machines and Neural Networks. The ensemble approach helps in achieving higher accuracy and reliability in predictions.",
  },
]

const tutorialSteps = [
  {
    title: "Getting Started",
    description: "Learn how to set up your account and configure initial settings",
    link: "#getting-started",
  },
  {
    title: "Data Import",
    description: "Guide to importing and managing your crime data",
    link: "#data-import",
  },
  {
    title: "Making Predictions",
    description: "Step-by-step guide to generating crime predictions",
    link: "#predictions",
  },
  {
    title: "Analyzing Results",
    description: "Understanding and interpreting prediction results",
    link: "#analysis",
  },
  {
    title: "Advanced Features",
    description: "Explore advanced features and customization options",
    link: "#advanced",
  },
]

export default function HelpPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        <div className="space-y-0.5">
          <h2 className="text-3xl font-bold tracking-tight">Help Center</h2>
          <p className="text-muted-foreground">Find answers and learn how to use the Crime Prediction System</p>
        </div>
        <Separator className="my-6" />

        <Tabs defaultValue="faq" className="space-y-4">
          <TabsList>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="tutorial">Tutorial</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          {/* FAQ Section */}
          <TabsContent value="faq" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Common questions about the Crime Prediction System</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tutorial Section */}
          <TabsContent value="tutorial" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tutorialSteps.map((step, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0" asChild>
                      <a href={step.link}>Learn More →</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Documentation Section */}
          <TabsContent value="documentation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>Comprehensive guides and API documentation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Book className="h-5 w-5" />
                        User Guide
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Complete user guide with detailed explanations of all features
                      </p>
                      <Button variant="outline" className="w-full">
                        View Guide
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileQuestion className="h-5 w-5" />
                        API Documentation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">Technical documentation for API integration</p>
                      <Button variant="outline" className="w-full">
                        View API Docs
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Alert>
                  <HelpCircle className="h-4 w-4" />
                  <AlertTitle>Quick Tip</AlertTitle>
                  <AlertDescription>
                    Check our GitHub repository for code examples and implementation guides.
                  </AlertDescription>
                </Alert>

                <div className="flex justify-center">
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Support Section */}
          <TabsContent value="support" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Get help from our support team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What do you need help with?" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Describe your issue in detail..." className="min-h-[100px]" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Other Ways to Reach Us</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">support@crimeprediction.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Emergency Support</AlertTitle>
              <AlertDescription>
                For urgent issues requiring immediate attention, please call our emergency support line.
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

