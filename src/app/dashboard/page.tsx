import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Sparkles, Plus, Users, Calendar, CheckCircle, Clock } from "lucide-react"

export default function DashboardPage() {
  // Mock data - replace with actual data fetching
  const parties = [
    {
      id: "1",
      childName: "Emma",
      childAge: 5,
      theme: "Unicorn Magic",
      date: new Date("2026-02-15"),
      guestCount: 12,
      totalGuests: 20,
      taskCount: 8,
      completedTasks: 5,
      status: "PLANNING",
    },
  ]

  const upcomingTasks = [
    { id: "1", title: "Order birthday cake", dueDate: "2026-02-10", category: "FOOD" },
    { id: "2", title: "Send invitations", dueDate: "2026-02-05", category: "INVITATIONS" },
    { id: "3", title: "Buy decorations", dueDate: "2026-02-08", category: "SHOPPING" },
  ]

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
              <Link href="/party/new">
                <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-500">
                  <Plus className="mr-2 h-4 w-4" />
                  New Party
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome back! 👋</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              You have {parties.length} party{parties.length !== 1 ? "ies" : ""} in planning
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* My Parties */}
              <Card>
                <CardHeader>
                  <CardTitle>My Parties</CardTitle>
                  <CardDescription>Manage and track your upcoming celebrations</CardDescription>
                </CardHeader>
                <CardContent>
                  {parties.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">🎉</div>
                      <h3 className="text-lg font-medium mb-2">No parties yet</h3>
                      <p className="text-gray-500 mb-4">Create your first magical party!</p>
                      <Link href="/party/new">
                        <Button className="bg-gradient-to-r from-pink-500 to-purple-500">
                          <Plus className="mr-2 h-4 w-4" />
                          Plan a Party
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {parties.map((party) => (
                        <Link key={party.id} href={`/party/${party.id}`}>
                          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-xl">
                                🦄
                              </div>
                              <div>
                                <h3 className="font-semibold">{party.childName}&apos;s {party.childAge}th Birthday</h3>
                                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                  <span className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    {party.date.toLocaleDateString()}
                                  </span>
                                  <span className="flex items-center">
                                    <Users className="h-4 w-4 mr-1" />
                                    {party.guestCount}/{party.totalGuests} guests
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                                {party.status}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Upcoming Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>Stay on track with your party planning</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingTasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                            <Clock className="h-4 w-4 text-purple-500" />
                          </div>
                          <div>
                            <p className="font-medium">{task.title}</p>
                            <p className="text-sm text-gray-500">Due {task.dueDate}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <CheckCircle className="h-5 w-5 text-gray-400 hover:text-green-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Active Parties</span>
                      <span className="font-medium">{parties.length}</span>
                    </div>
                    <Progress value={parties.length * 20} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Total Guests</span>
                      <span className="font-medium">
                        {parties.reduce((sum, p) => sum + p.guestCount, 0)}
                      </span>
                    </div>
                    <Progress value={60} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Tasks Completed</span>
                      <span className="font-medium">
                        {parties.reduce((sum, p) => sum + p.completedTasks, 0)} /{" "}
                        {parties.reduce((sum, p) => sum + p.taskCount, 0)}
                      </span>
                    </div>
                    <Progress value={62} />
                  </div>
                </CardContent>
              </Card>

              {/* Tips Card */}
              <Card className="bg-gradient-to-br from-pink-500 to-purple-500 text-white">
                <CardHeader>
                  <CardTitle className="text-white">💡 Pro Tip</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-90">
                    Book your venue at least 4 weeks in advance for popular dates. 
                    Consider weekday parties for better availability!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
