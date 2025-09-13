"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Coins, CreditCard, History, ShoppingCart, Star, Award, TrendingUp } from "lucide-react"

export default function PointsPage() {
  const [selectedPackage, setSelectedPackage] = useState(null)

  const pointPackages = [
    {
      id: 1,
      points: 1000,
      price: 9.99,
      bonus: 0,
      popular: false,
      description: "Perfect for trying out new skills",
    },
    {
      id: 2,
      points: 2500,
      price: 19.99,
      bonus: 500,
      popular: true,
      description: "Most popular choice for regular learners",
    },
    {
      id: 3,
      points: 5000,
      price: 34.99,
      bonus: 1500,
      popular: false,
      description: "Best value for serious skill development",
    },
    {
      id: 4,
      points: 10000,
      price: 59.99,
      bonus: 4000,
      popular: false,
      description: "Ultimate package for skill masters",
    },
  ]

  const recentTransactions = [
    { type: "earned", description: "Completed React Advanced Course", points: 250, date: "2 hours ago" },
    { type: "spent", description: "JavaScript Fundamentals Lesson", points: -150, date: "1 day ago" },
    { type: "earned", description: "Achievement: First 10 Lessons", points: 100, date: "2 days ago" },
    { type: "purchased", description: "Purchased 2500 Points Package", points: 3000, date: "1 week ago" },
    { type: "earned", description: "Received 5-star review bonus", points: 50, date: "1 week ago" },
  ]

  const achievements = [
    { name: "First Steps", description: "Complete your first lesson", points: 50, unlocked: true },
    { name: "Quick Learner", description: "Complete 5 lessons in one day", points: 100, unlocked: true },
    { name: "Skill Collector", description: "Learn 10 different skills", points: 200, unlocked: false },
    { name: "Master Teacher", description: "Teach 50 successful lessons", points: 500, unlocked: true },
    { name: "Community Star", description: "Receive 100 five-star reviews", points: 300, unlocked: false },
    { name: "Point Millionaire", description: "Earn 1,000,000 total points", points: 1000, unlocked: false },
  ]

  const pointsBreakdown = {
    current: 2847,
    earned: 15420,
    spent: 12573,
    purchased: 8500,
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Points & Rewards</h1>
          <p className="text-gray-400">Manage your points, purchase packages, and track your achievements.</p>
        </div>

        {/* Current Balance */}
        <Card className="bg-gradient-to-r from-green-600 to-green-700 border-0 mb-8">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 mb-2">Current Balance</p>
                <p className="text-4xl font-bold text-white">{pointsBreakdown.current.toLocaleString()} Points</p>
                <p className="text-green-100 mt-2">Ready to unlock new skills</p>
              </div>
              <div className="text-right">
                <Coins className="w-16 h-16 text-green-200 mb-4" />
                <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  Use Points
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="purchase" className="space-y-6">
          <TabsList className="bg-gray-900 border-gray-800">
            <TabsTrigger value="purchase" className="data-[state=active]:bg-green-600">
              Purchase Points
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-green-600">
              Transaction History
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-green-600">
              Achievements
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-green-600">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="purchase" className="space-y-6">
            {/* Point Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pointPackages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`bg-gray-900 border-gray-800 cursor-pointer transition-all hover:border-green-400 ${
                    pkg.popular ? "ring-2 ring-green-400" : ""
                  } ${selectedPackage === pkg.id ? "border-green-400 bg-gray-800" : ""}`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <CardHeader className="text-center">
                    {pkg.popular && <Badge className="bg-green-600 text-white mb-2 w-fit mx-auto">Most Popular</Badge>}
                    <div className="flex items-center justify-center mb-2">
                      <Coins className="w-8 h-8 text-green-400" />
                    </div>
                    <CardTitle className="text-2xl">{pkg.points.toLocaleString()}</CardTitle>
                    {pkg.bonus > 0 && <p className="text-green-400 text-sm">+{pkg.bonus} Bonus Points</p>}
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-3xl font-bold mb-2">${pkg.price}</p>
                    <p className="text-sm text-gray-400 mb-4">{pkg.description}</p>
                    <Button
                      className={`w-full ${selectedPackage === pkg.id ? "bg-green-600 hover:bg-green-700" : "bg-gray-700 hover:bg-gray-600"}`}
                    >
                      {selectedPackage === pkg.id ? "Selected" : "Select Package"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Payment Section */}
            {selectedPackage && (
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-green-400" />
                    Complete Purchase
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Card Number</label>
                      <Input placeholder="1234 5678 9012 3456" className="bg-gray-800 border-gray-700" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiry Date</label>
                      <Input placeholder="MM/YY" className="bg-gray-800 border-gray-700" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV</label>
                      <Input placeholder="123" className="bg-gray-800 border-gray-700" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                      <Input placeholder="John Doe" className="bg-gray-800 border-gray-700" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <p className="text-lg font-medium">
                        Total: ${pointPackages.find((p) => p.id === selectedPackage)?.price}
                      </p>
                      <p className="text-sm text-gray-400">
                        You'll receive{" "}
                        {pointPackages.find((p) => p.id === selectedPackage)?.points +
                          (pointPackages.find((p) => p.id === selectedPackage)?.bonus || 0)}{" "}
                        points
                      </p>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700">Purchase Now</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="w-5 h-5 text-green-400" />
                  Transaction History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            transaction.type === "earned"
                              ? "bg-green-400"
                              : transaction.type === "spent"
                                ? "bg-red-400"
                                : "bg-blue-400"
                          }`}
                        ></div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-gray-400">{transaction.date}</p>
                        </div>
                      </div>
                      <div className={`font-bold ${transaction.points > 0 ? "text-green-400" : "text-red-400"}`}>
                        {transaction.points > 0 ? "+" : ""}
                        {transaction.points} pts
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className={`bg-gray-900 border-gray-800 ${achievement.unlocked ? "border-green-400" : "opacity-60"}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${achievement.unlocked ? "bg-green-600" : "bg-gray-700"}`}>
                        <Award className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-1">{achievement.name}</h3>
                        <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                        <Badge
                          variant={achievement.unlocked ? "default" : "secondary"}
                          className={achievement.unlocked ? "bg-green-600" : ""}
                        >
                          {achievement.points} points
                        </Badge>
                      </div>
                      {achievement.unlocked && (
                        <div className="text-green-400">
                          <Star className="w-6 h-6 fill-current" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <Coins className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{pointsBreakdown.earned.toLocaleString()}</p>
                  <p className="text-sm text-gray-400">Total Earned</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <ShoppingCart className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{pointsBreakdown.spent.toLocaleString()}</p>
                  <p className="text-sm text-gray-400">Total Spent</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <CreditCard className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{pointsBreakdown.purchased.toLocaleString()}</p>
                  <p className="text-sm text-gray-400">Total Purchased</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">85%</p>
                  <p className="text-sm text-gray-400">Efficiency Rate</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
