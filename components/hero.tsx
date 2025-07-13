"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, Calendar, Award } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"

export function Hero() {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events')
    if (eventsSection) {
      eventsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/images/earth-satellite-2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Established October 2024
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                IEEE GRSS
                <span className="block text-blue-300">MJCET Chapter</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                Advancing Geoscience and Remote Sensing at Muffakham Jah College of Engineering & Technology, Hyderabad.
                Join us in exploring Earth observation technologies and building the future of remote sensing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={scrollToEvents}
              >
                Explore Events
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
                onClick={scrollToContact}
              >
                Join Our Community
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">
                  <AnimatedCounter value={5} suffix="+" delay={0} />
                </div>
                <div className="text-sm text-gray-300">Events Organized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">
                  <AnimatedCounter value={100} suffix="+" delay={200} />
                </div>
                <div className="text-sm text-gray-300">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">
                  <AnimatedCounter value={7} delay={400} />
                </div>
                <div className="text-sm text-gray-300">Months Active</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">
                  <AnimatedCounter value={1} delay={600} />
                </div>
                <div className="text-sm text-gray-300">College Chapter</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 shadow-2xl">
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                <Globe className="w-10 h-10 text-white" />
              </div>

              <div className="space-y-6 text-white">
                <h3 className="text-2xl font-bold">Next Event</h3>
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-semibold text-lg">EXPOGENIX</h4>
                  <p className="text-blue-100">Project Showcase - July 17, 2025</p>
                  <p className="text-sm text-blue-200 mt-1">Fintech, Spacetech, Edtech, Agrotech</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center text-sm text-blue-200">
                      <Calendar className="w-4 h-4 mr-2" />
                      July 17, 2025
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1"
                      onClick={() => window.open('https://forms.gle/tyKiCGmgM4w3U2Dh9', '_blank')}
                    >
                      Register Now
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <Users className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm">Team Members</div>
                    <div className="font-bold">
                      <AnimatedCounter value={15} delay={800} />
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <Award className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm">Achievements</div>
                    <div className="font-bold">
                      <AnimatedCounter value={5} suffix="+" delay={1000} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
