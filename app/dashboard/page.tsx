"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  Users,
  Star,
  TrendingUp,
  Calendar,
  Award,
  Coins,
  Clock,
  Target,
  BarChart3,
  DollarSign,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    { label: "Total Points", value: "2,847", icon: Coins, change: "+12%", color: "text-green-400" },
    { label: "Skills Taught", value: "8", icon: BookOpen, change: "+2", color: "text-blue-400" },
    { label: "Students", value: "156", icon: Users, change: "+23", color: "text-purple-400" },
    { label: "Average Rating", value: "4.9", icon: Star, change: "+0.2", color: "text-yellow-400" },
  ]

  const recentActivities = [
    { type: "lesson", title: "React Advanced Patterns", student: "Sarah Johnson", points: 150, time: "2 hours ago" },
    { type: "review", title: "Received 5-star review", student: "Mike Chen", points: 25, time: "4 hours ago" },
    { type: "lesson", title: "JavaScript Fundamentals", student: "Emma Davis", points: 100, time: "1 day ago" },
    { type: "milestone", title: "Completed 50 lessons milestone", student: null, points: 500, time: "2 days ago" },
  ]

  const upcomingLessons = [
    {
      skill: "Advanced React Hooks",
      student: "Alex Thompson",
      time: "Today, 3:00 PM",
      duration: "1h 30m",
      points: 200,
    },
    {
      skill: "Node.js Backend Development",
      student: "Lisa Wang",
      time: "Tomorrow, 10:00 AM",
      duration: "2h",
      points: 250,
    },
    { skill: "Database Design", student: "John Smith", time: "Friday, 2:00 PM", duration: "1h", points: 150 },
  ]

  const skillsProgress = [
    { name: "React Development", students: 45, rating: 4.9, earnings: 6750, progress: 85 },
    { name: "JavaScript Fundamentals", students: 38, rating: 4.8, earnings: 5700, progress: 92 },
    { name: "Node.js Backend", students: 28, rating: 4.7, earnings: 4200, progress: 78 },
    { name: "Database Design", students: 22, rating: 4.9, earnings: 3300, progress: 65 },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-400">Welcome back! Here's your teaching overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-sm ${stat.color} flex items-center mt-1`}>
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-800 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-gray-900 border-gray-800">
            <TabsTrigger value="overview" className="data-[state=active]:bg-green-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="lessons" className="data-[state=active]:bg-green-600">
              Lessons
            </TabsTrigger>
            <TabsTrigger value="earnings" className="data-[state=active]:bg-green-600">
              Earnings
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-green-600">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <div>
                          <p className="font-medium">{activity.title}</p>
                          {activity.student && <p className="text-sm text-gray-400">with {activity.student}</p>}
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-600/20 text-green-400">
                        +{activity.points} pts
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Lessons */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-400" />
                    Upcoming Lessons
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingLessons.map((lesson, index) => (
                    <div key={index} className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{lesson.skill}</h4>
                        <Badge variant="outline" className="border-green-400 text-green-400">
                          {lesson.points} pts
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400 mb-1">Student: {lesson.student}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{lesson.time}</span>
                        <span>{lesson.duration}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Skills Performance */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-400" />
                  Skills Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skillsProgress.map((skill, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{skill.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{skill.students} students</span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            {skill.rating}
                          </span>
                          <span className="text-green-400">{skill.earnings} pts earned</span>
                        </div>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lessons" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Lesson Management</CardTitle>
                <CardDescription>Manage your upcoming and completed lessons</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingLessons.map((lesson, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src={`/placeholder-40x40.png?height=40&width=40&text=${lesson.student
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}`}
                          />
                          <AvatarFallback>
                            {lesson.student
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{lesson.skill}</h4>
                          <p className="text-sm text-gray-400">{lesson.student}</p>
                          <p className="text-xs text-gray-500">
                            {lesson.time} • {lesson.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-green-400 text-green-400">
                          {lesson.points} pts
                        </Badge>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Start Lesson
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Coins className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-gray-400">Total Earnings</span>
                  </div>
                  <p className="text-2xl font-bold">19,950 pts</p>
                  <p className="text-sm text-green-400">+15% this month</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-gray-400">This Month</span>
                  </div>
                  <p className="text-2xl font-bold">2,847 pts</p>
                  <p className="text-sm text-blue-400">+12% vs last month</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-400">Bonus Points</span>
                  </div>
                  <p className="text-2xl font-bold">525 pts</p>
                  <p className="text-sm text-purple-400">From achievements</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  Performance Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Student Satisfaction</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>5 Stars</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>4 Stars</span>
                        <span>18%</span>
                      </div>
                      <Progress value={18} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>3 Stars</span>
                        <span>4%</span>
                      </div>
                      <Progress value={4} className="h-2" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Popular Skills</h4>
                    <div className="space-y-3">
                      {skillsProgress.slice(0, 3).map((skill, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{skill.name}</span>
                          <Badge variant="secondary">{skill.students} students</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
