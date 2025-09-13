"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Send, Search, MoreVertical, Phone, Video, Paperclip, Smile, Circle } from "lucide-react"

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [message, setMessage] = useState("")

  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      skill: "React Development",
      lastMessage: "Thanks for the great lesson! When is our next session?",
      time: "2m ago",
      unread: 2,
      online: true,
      avatar: "/placeholder.svg?height=40&width=40&text=SJ",
    },
    {
      id: 2,
      name: "Mike Chen",
      skill: "JavaScript Fundamentals",
      lastMessage: "Could you share the resources we discussed?",
      time: "1h ago",
      unread: 0,
      online: true,
      avatar: "/placeholder.svg?height=40&width=40&text=MC",
    },
    {
      id: 3,
      name: "Emma Davis",
      skill: "Node.js Backend",
      lastMessage: "I'm having trouble with the authentication part",
      time: "3h ago",
      unread: 1,
      online: false,
      avatar: "/placeholder.svg?height=40&width=40&text=ED",
    },
    {
      id: 4,
      name: "Alex Thompson",
      skill: "Database Design",
      lastMessage: "Perfect! See you tomorrow at 3 PM",
      time: "1d ago",
      unread: 0,
      online: true,
      avatar: "/placeholder.svg?height=40&width=40&text=AT",
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      content: "Hi! I really enjoyed our React lesson today. The hooks explanation was very clear.",
      time: "10:30 AM",
      isMe: false,
    },
    {
      id: 2,
      sender: "Me",
      content: "I'm glad you found it helpful! React hooks can be tricky at first, but you're getting the hang of it.",
      time: "10:32 AM",
      isMe: true,
    },
    {
      id: 3,
      sender: "Sarah Johnson",
      content: "I practiced the useState examples you gave me. Could we cover useEffect in our next session?",
      time: "10:35 AM",
      isMe: false,
    },
    {
      id: 4,
      sender: "Me",
      content: "useEffect is a great next step. I'll prepare some practical examples for you.",
      time: "10:37 AM",
      isMe: true,
    },
    {
      id: 5,
      sender: "Sarah Johnson",
      content: "Thanks for the great lesson! When is our next session?",
      time: "10:40 AM",
      isMe: false,
    },
  ]

  const selectedConversation = conversations.find((c) => c.id === selectedChat)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Messages</h1>
          <p className="text-gray-400">Connect with your students and instructors</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-400" />
                  Conversations
                </CardTitle>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search conversations..." className="pl-10 bg-gray-800 border-gray-700" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 cursor-pointer hover:bg-gray-800 transition-colors ${
                      selectedChat === conversation.id ? "bg-gray-800 border-r-2 border-green-400" : ""
                    }`}
                    onClick={() => setSelectedChat(conversation.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {conversation.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <Circle className="absolute -bottom-1 -right-1 w-3 h-3 text-green-400 fill-current" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium truncate">{conversation.name}</h4>
                          <span className="text-xs text-gray-400">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-gray-400 truncate mb-1">{conversation.lastMessage}</p>
                        <Badge variant="outline" className="text-xs border-green-400 text-green-400">
                          {conversation.skill}
                        </Badge>
                      </div>
                      {conversation.unread > 0 && (
                        <Badge className="bg-green-600 text-white text-xs">{conversation.unread}</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-gray-800 h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={selectedConversation?.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {selectedConversation?.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {selectedConversation?.online && (
                        <Circle className="absolute -bottom-1 -right-1 w-3 h-3 text-green-400 fill-current" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{selectedConversation?.name}</h3>
                      <p className="text-sm text-gray-400">{selectedConversation?.skill}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isMe ? "bg-green-600 text-white" : "bg-gray-800 text-white"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.isMe ? "text-green-100" : "text-gray-400"}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-800">
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="bg-gray-800 border-gray-700 pr-10"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          // Handle send message
                          setMessage("")
                        }
                      }}
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => setMessage("")}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
