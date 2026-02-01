import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { predefinedThemes, plans } from "@/lib/data"
import { Sparkles, Users, Calendar, ShoppingBag, Utensils, Check, Star } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-950 dark:to-indigo-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold gradient-text">Magical Birthday Planner</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/pricing" className="text-sm font-medium hover:text-purple-500">
                Pricing
              </Link>
              <Link href="/auth/login">
                <Button variant="outline" size="sm">Sign In</Button>
              </Link>
              <Link href="/party/new">
                <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-500">
                  Plan a Party
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            AI-Powered Party Planning
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Create <span className="gradient-text">Magical</span> Birthday
            <br />
            Memories for Your Little One
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Plan unforgettable birthday parties for kids aged 0-12 with AI-powered theme recommendations, 
            smart checklists, and stress-free guest management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/party/new">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8">
                <Sparkles className="mr-2 h-5 w-5" />
                Start Planning Free
              </Button>
            </Link>
            <Link href="#themes">
              <Button size="lg" variant="outline">
                Explore Themes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for a Perfect Party</h2>
            <p className="text-gray-600 dark:text-gray-300">From themes to shopping lists, we&apos;ve got you covered</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "AI Theme Recommendations", desc: "Get personalized theme ideas based on your child's interests and favorite colors" },
              { icon: Users, title: "Guest Management", desc: "Track RSVPs, dietary requirements, and VIP guests with smart lists" },
              { icon: Calendar, title: "Smart Timeline", desc: "Never miss a task with automated checklists and reminders" },
              { icon: ShoppingBag, title: "Shopping Suite", desc: "Find the best deals on decorations, cakes, and party supplies" },
              { icon: Utensils, title: "Food & Catering", desc: "Discover local caterers and plan the perfect party menu" },
              { icon: Check, title: "RSVP Analytics", desc: "Track opens, responses, and follow-ups with detailed analytics" },
            ].map((feature, i) => (
              <Card key={i} className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Party Themes</h2>
            <p className="text-gray-600 dark:text-gray-300">Choose from 8 trending themes or get AI-powered custom recommendations</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {predefinedThemes.map((theme) => (
              <Card key={theme.id} className="card-hover overflow-hidden">
                <div 
                  className="h-32 flex items-center justify-center text-6xl"
                  style={{ background: `linear-gradient(135deg, ${theme.colors[0]}22, ${theme.colors[1]}22)` }}
                >
                  {theme.icon}
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{theme.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{theme.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 dark:text-gray-300">Start free and upgrade as you grow</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.id} className={`card-hover ${plan.id === 'PLUS' ? 'border-purple-500 border-2' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline mt-2">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    {plan.price > 0 && <span className="text-gray-500 ml-2">/month</span>}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/party/new">
                    <Button 
                      className={`w-full mt-6 ${plan.id === 'PLUS' ? 'bg-gradient-to-r from-pink-500 to-purple-500' : ''}`}
                      variant={plan.id === 'STARTER' ? 'outline' : 'default'}
                    >
                      {plan.price === 0 ? 'Get Started Free' : 'Start Free Trial'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan the Perfect Party?</h2>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of parents who use Magical Birthday Planner to create unforgettable celebrations.
            </p>
            <Link href="/party/new">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                <Sparkles className="mr-2 h-5 w-5" />
                Start Planning Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkles className="h-5 w-5 text-purple-500" />
              <span className="font-bold gradient-text">Magical Birthday Planner</span>
            </div>
            <p className="text-sm text-gray-500">
              © 2026 Magical Birthday Planner. Made with 💜 for parents everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
