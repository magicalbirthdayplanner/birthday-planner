"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { predefinedThemes, interestCategories, colorOptions } from "@/lib/data"
import { ChildInfo, PartyTheme } from "@/types"
import { Sparkles, ChevronLeft, ChevronRight, PartyPopper, Loader2 } from "lucide-react"

export default function NewPartyPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isGenerating, setIsGenerating] = useState(false)
  const [childInfo, setChildInfo] = useState<ChildInfo>({
    name: "",
    age: 5,
    interests: [],
    colors: [],
  })
  const [selectedTheme, setSelectedTheme] = useState<PartyTheme | null>(null)
  const [aiThemes, setAiThemes] = useState<PartyTheme[]>([])
  const [partyDate, setPartyDate] = useState("")
  const [partyLocation, setPartyLocation] = useState("")

  const progress = (step / 3) * 100

  const generateAIThemes = async () => {
    setIsGenerating(true)
    // Simulate AI generation (replace with actual OpenAI API call)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    const mockAIThemes: PartyTheme[] = [
      {
        id: "ai-1",
        name: `${childInfo.name}'s Epic ${childInfo.interests[0] || 'Adventure'} Party`,
        description: `A magical celebration combining ${childInfo.interests.slice(0, 2).join(" and ")} with stunning ${childInfo.colors.slice(0, 2).join(" and ")} decorations.`,
        colors: childInfo.colors.slice(0, 3),
        icon: "🎉",
        matchScore: 98,
      },
      {
        id: "ai-2",
        name: `Super ${childInfo.name}'s Wonder World`,
        description: "An imaginative journey through your child's favorite things with personalized activities.",
        colors: ["#FFD700", "#FF69B4", "#9370DB"],
        icon: "✨",
        matchScore: 94,
      },
      {
        id: "ai-3",
        name: `${childInfo.name}'s Dream Celebration`,
        description: `Perfect for a ${childInfo.age}-year-old who loves ${childInfo.interests[0] || "fun"}!`,
        colors: childInfo.colors.slice(0, 3).length > 0 ? childInfo.colors.slice(0, 3) : ["#FF69B4", "#9370DB", "#00BFFF"],
        icon: "🌟",
        matchScore: 89,
      },
    ]
    
    setAiThemes(mockAIThemes)
    setIsGenerating(false)
  }

  const handleNext = () => {
    if (step === 1 && childInfo.name && childInfo.interests.length > 0) {
      generateAIThemes()
    }
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit and redirect to dashboard
      router.push("/dashboard")
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const toggleInterest = (interest: string) => {
    setChildInfo((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const toggleColor = (color: string) => {
    setChildInfo((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-950 dark:to-indigo-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold gradient-text">Magical Birthday Planner</span>
            </a>
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-gray-500">Step {step} of 3</span>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Progress value={progress} className="mb-8" />

          {/* Step 1: Child Information */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tell Us About the Birthday Star</CardTitle>
                <CardDescription>
                  We&apos;ll use this to create personalized theme recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Child&apos;s Name</label>
                    <Input
                      placeholder="e.g., Emma"
                      value={childInfo.name}
                      onChange={(e) => setChildInfo({ ...childInfo, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Age Turning</label>
                    <Input
                      type="number"
                      min={0}
                      max={12}
                      value={childInfo.age}
                      onChange={(e) => setChildInfo({ ...childInfo, age: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">
                    Interests ({childInfo.interests.length} selected)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interestCategories.map((interest) => (
                      <button
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          childInfo.interests.includes(interest)
                            ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                            : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">
                    Favorite Colors ({childInfo.colors.length} selected)
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {colorOptions.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => toggleColor(color.value)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg border-2 transition-all ${
                          childInfo.colors.includes(color.value)
                            ? "border-purple-500 bg-purple-50 dark:bg-purple-900"
                            : "border-gray-200 dark:border-gray-700"
                        }`}
                      >
                        <div
                          className="w-6 h-6 rounded-full border"
                          style={{ backgroundColor: color.value }}
                        />
                        <span className="text-sm">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Theme Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Sparkles className="mr-2 h-6 w-6 text-purple-500" />
                    AI-Recommended Themes
                  </CardTitle>
                  <CardDescription>
                    Personalized just for {childInfo.name} based on their interests
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isGenerating ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <Loader2 className="h-12 w-12 animate-spin text-purple-500 mb-4" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Our AI is crafting the perfect themes...
                      </p>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {aiThemes.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => setSelectedTheme(theme)}
                          className={`text-left p-4 rounded-xl border-2 transition-all ${
                            selectedTheme?.id === theme.id
                              ? "border-purple-500 bg-purple-50 dark:bg-purple-900"
                              : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-4">
                              <span className="text-4xl">{theme.icon}</span>
                              <div>
                                <h3 className="font-semibold text-lg">{theme.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                  {theme.description}
                                </p>
                              </div>
                            </div>
                            <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                              {theme.matchScore}% Match
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="text-center">
                <p className="text-gray-500 mb-4">Or choose a classic theme</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {predefinedThemes.slice(0, 4).map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedTheme?.id === theme.id
                          ? "border-purple-500 bg-purple-50 dark:bg-purple-900"
                          : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                      }`}
                    >
                      <div className="text-3xl mb-2">{theme.icon}</div>
                      <div className="text-sm font-medium">{theme.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Party Details */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <PartyPopper className="mr-2 h-6 w-6 text-purple-500" />
                  Final Details
                </CardTitle>
                <CardDescription>
                  Add the finishing touches to your party plan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Party Date</label>
                  <Input
                    type="date"
                    value={partyDate}
                    onChange={(e) => setPartyDate(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Input
                    placeholder="e.g., Our backyard, Chuck E. Cheese, etc."
                    value={partyLocation}
                    onChange={(e) => setPartyLocation(e.target.value)}
                  />
                </div>

                {selectedTheme && (
                  <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Selected Theme</h4>
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{selectedTheme.icon}</span>
                      <div>
                        <p className="font-medium">{selectedTheme.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {selectedTheme.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={
                (step === 1 && (!childInfo.name || childInfo.interests.length === 0)) ||
                (step === 2 && !selectedTheme) ||
                isGenerating
              }
              className="bg-gradient-to-r from-pink-500 to-purple-500"
            >
              {step === 3 ? (
                <>
                  Create Party
                  <PartyPopper className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
