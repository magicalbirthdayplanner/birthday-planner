import { plans } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Sparkles, HelpCircle } from "lucide-react"

export default function PricingPage() {
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
            <Link href="/">
              <Button variant="outline" size="sm">Back to Home</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Start free and upgrade when you need more power. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <Card key={plan.id} className={`card-hover ${plan.id === 'PLUS' ? 'border-purple-500 border-2 shadow-lg' : ''}`}>
                {plan.id === 'PLUS' && (
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline mt-4">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    {plan.price > 0 && <span className="text-gray-500 ml-2">/month</span>}
                  </div>
                  <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/party/new">
                    <Button 
                      className={`w-full mt-8 ${plan.id === 'PLUS' ? 'bg-gradient-to-r from-pink-500 to-purple-500' : ''}`}
                      variant={plan.id === 'STARTER' ? 'outline' : 'default'}
                      size="lg"
                    >
                      {plan.price === 0 ? 'Get Started Free' : 'Start Free Trial'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I switch plans anytime?",
                  a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
                },
                {
                  q: "What happens when I reach my guest limit?",
                  a: "You'll be prompted to upgrade to a higher plan. Your existing parties remain accessible."
                },
                {
                  q: "Is there a free trial for paid plans?",
                  a: "Yes! Both Plus and Pro plans come with a 14-day free trial. No credit card required."
                },
                {
                  q: "Can I cancel my subscription?",
                  a: "Absolutely. You can cancel anytime from your account settings."
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <HelpCircle className="h-5 w-5 text-purple-500 mr-2" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            © 2026 Magical Birthday Planner. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
