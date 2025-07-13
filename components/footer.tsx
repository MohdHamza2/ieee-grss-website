"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Conferences", href: "#conferences" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
    { name: "Terms & Policies", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ]

  const resources = [
    { name: "Educational Materials", href: "https://www.grss-ieee.org/?s=Educational+Materials" },
    { name: "Research Papers", href: "https://www.grss-ieee.org/?s=Research+Papers" },
    { name: "Video Tutorials", href: "https://www.grss-ieee.org/?s=Video+Tutorials" },
    { name: "Software Tools", href: "https://www.grss-ieee.org/?s=Software+Tools" },
    { name: "Datasets", href: "https://www.grss-ieee.org/?s=Datasets" },
  ]

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const formData = new FormData()
      formData.append("email", email)

      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setMessage("Successfully subscribed!")
        setEmail("")
      } else {
        setMessage(data.error || "Failed to subscribe")
      }
    } catch (error) {
      setMessage("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <motion.img
                src="/images/grss-logo.png"
                alt="IEEE GRSS MJCET Logo"
                className="w-10 h-10 object-contain cursor-pointer transition-all duration-300"
                whileHover={{
                  scale: 1.15,
                  filter: "brightness(1.2)",
                  transition: { duration: 0.3 },
                }}
                animate={{
                  filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <div>
                <h3 className="text-xl font-bold">IEEE GRSS</h3>
                <p className="text-sm text-gray-400">MJCET Chapter</p>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advancing geoscience and remote sensing education at Muffakham Jah College of Engineering & Technology,
              Hyderabad since October 2024.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
                onClick={() =>
                  window.open("https://www.instagram.com/ieeegrssmjcet?igsh=MWU5MHV5Ym14OXV5cw==", "_blank")
                }
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
                onClick={() => window.open("https://wa.me/911234567890", "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
                onClick={() => (window.location.href = "mailto:ieeegrssmjcet@gmail.com")}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-white">+91 6303 837 037</p>
                  <p className="text-xs text-gray-400">Available for inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-white">ieeegrssmjcet@gmail.com</p>
                  <p className="text-xs text-gray-400">24/7 support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-white">MJCET, Hyderabad</p>
                  <p className="text-xs text-gray-400">Telangana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest events and updates.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? "..." : "Subscribe"}
                </Button>
              </div>
              {message && (
                <p className={`text-sm ${message.includes("Successfully") ? "text-green-400" : "text-red-400"}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} IEEE GRSS MJCET Chapter. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                This website is for educational purposes. Not affiliated with the main IEEE GRSS website.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">
                Terms & Policies
              </Link>
              <Link href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="text-xs text-gray-400 hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
