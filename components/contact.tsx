"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Send, Users, Calendar, Presentation } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formDataToSend = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value)
      })

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        })
        
        // Show success message
        const notification = document.createElement('div')
        notification.className = 'fixed top-20 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300'
        notification.textContent = 'Message sent successfully! We will get back to you within 24 hours.'
        document.body.appendChild(notification)
        
        setTimeout(() => {
          notification.remove()
        }, 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setSubmitStatus("error")
      
      // Show error message
      const notification = document.createElement('div')
      notification.className = 'fixed top-20 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300'
      notification.textContent = 'Failed to send message. Please try again later.'
      document.body.appendChild(notification)
      
      setTimeout(() => {
        notification.remove()
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 6303 837 037",
      description: "Call us for inquiries",
      action: "Call Now",
      href: "tel:+916303837037",
    },
    {
      icon: Mail,
      title: "Email",
      value: "ieeegrssmjcet@gmail.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "MJCET, Hyderabad",
      description: "Muffakham Jah College of Engineering & Technology",
    },
  ]

  const collaborationTypes = [
    {
      icon: Users,
      title: "Sponsorship",
      description: "Partner with us to sponsor events and support student activities",
      email: "sponsor@ieeegrssmjcet.com",
    },
    {
      icon: Calendar,
      title: "Host Events",
      description: "Collaborate with us to organize workshops, seminars, and conferences",
      email: "events@ieeegrssmjcet.com",
    },
    {
      icon: Presentation,
      title: "Present Topics",
      description: "Share your expertise by presenting at our events and workshops",
      email: "speakers@ieeegrssmjcet.com",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Connect With Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to join our community or collaborate with us? We'd love to hear from you. Reach out for partnerships,
            sponsorships, or to share your expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-blue-600 font-medium">{info.value}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      name="firstName" 
                      placeholder="First Name" 
                      required 
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    <Input 
                      name="lastName" 
                      placeholder="Last Name" 
                      required 
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Input 
                    name="email" 
                    placeholder="Email Address" 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <Input 
                    name="subject" 
                    placeholder="Subject" 
                    required 
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  <Textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows={5} 
                    required 
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Collaboration Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Collaboration Opportunities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {collaborationTypes.map((collab, index) => (
              <Card key={collab.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <collab.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{collab.title}</h4>
                  <p className="text-gray-600 mb-4">{collab.description}</p>
                  <Button
                    variant="outline"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                    onClick={() => (window.location.href = `mailto:${collab.email}`)}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Contact</h3>
          <p className="text-gray-600 mb-6">For immediate assistance or urgent inquiries, reach out to us directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => (window.location.href = "mailto:ieeegrssmjcet@gmail.com")}
            >
              Email Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              onClick={() => (window.location.href = "tel:+916303837037")}
            >
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
