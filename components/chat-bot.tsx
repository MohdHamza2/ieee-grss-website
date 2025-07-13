"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm the IEEE GRSS MJCET assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const predefinedResponses: Record<string, string> = {
    hello: "Hello! Welcome to IEEE GRSS MJCET Chapter. How can I assist you today?",
    events:
      "We organize various events including workshops, lectures, and competitions. Our recent events include the Richard Moore Memorial Lecture, GEOLAUNCH, and EARTH EXPLORE & IDEATHON. Would you like to know more about any specific event?",
    join: "To join our chapter, you can contact us at ieeegrssmjcet@gmail.com or call +91 6303 837 037. We welcome students interested in geoscience and remote sensing!",
    contact: "You can reach us at:\n📧 ieeegrssmjcet@gmail.com\n📞 +91 6303 837 037\n📍 MJCET, Hyderabad",
    about:
      "IEEE GRSS MJCET Chapter was established in October 2024 at Muffakham Jah College of Engineering & Technology, Hyderabad. We focus on advancing geoscience and remote sensing education.",
    team: "Our leadership team includes:\n• Chairperson: Mir Nabeel Uddin\n• Vice Chair: Insiya Maryam\n• Secretary: Bilal Hussain\n• Treasurer: Mirfath Fatima\n• Webmaster: Mohammed Adil",
    resources:
      "We provide various resources including educational materials, datasets, video tutorials, and research papers. Visit our resources section for more details!",
    conferences:
      "We participate in and organize conferences like IGARSS, regional workshops, and student competitions. Check our conferences section for upcoming events!",
    default:
      "I'm here to help! You can ask me about our events, how to join, contact information, our team, resources, or conferences. What would you like to know?",
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simple keyword matching for responses
    const lowerInput = inputValue.toLowerCase()
    let response = predefinedResponses.default

    for (const [keyword, reply] of Object.entries(predefinedResponses)) {
      if (lowerInput.includes(keyword)) {
        response = reply
        break
      }
    }

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)

    setInputValue("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
          style={{ display: isOpen ? "none" : "flex" }}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-80 h-96"
          >
            <Card className="h-full flex flex-col shadow-2xl">
              <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-5 h-5" />
                    <CardTitle className="text-lg">GRSS Assistant</CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-blue-700"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.sender === "bot" && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                          {message.sender === "user" && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
