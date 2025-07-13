"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, MapPin, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"

export function GlobalPresence() {
  const presenceData = [
    {
      icon: Users,
      title: "Global Members",
      value: "20,000+",
      description: "Active IEEE GRSS members worldwide",
    },
    {
      icon: MapPin,
      title: "Regional Groups",
      value: "15+",
      description: "Chapters and groups across continents",
    },
    {
      icon: Globe,
      title: "Annual Events",
      value: "50+",
      description: "Conferences, workshops, and symposiums",
    },
    {
      icon: Calendar,
      title: "Countries",
      value: "10+",
      description: "International presence and collaboration",
    },
  ]

  return (
    <section
      id="global-presence"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/earth-satellite.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-blue-300 border-blue-300 bg-blue-900/20">
            Global Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">IEEE GRSS Worldwide</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            From our local chapter in Hyderabad to the global IEEE GRSS community, we are part of a worldwide network
            dedicated to advancing geoscience and remote sensing technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {presenceData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <item.icon className="w-8 h-8 text-blue-300" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <div className="text-3xl font-bold text-blue-300 mb-2">{item.value}</div>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">MJCET Chapter Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-1">
                  <AnimatedCounter value={5} suffix="+" delay={0} />
                </div>
                <div className="text-gray-300 text-sm">Events Organized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-1">
                  <AnimatedCounter value={100} suffix="+" delay={200} />
                </div>
                <div className="text-gray-300 text-sm">Student Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-1">
                  <AnimatedCounter value={7} delay={400} />
                </div>
                <div className="text-gray-300 text-sm">Months Active</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-1">
                  <AnimatedCounter value={1} suffix="st" delay={600} />
                </div>
                <div className="text-gray-300 text-sm">GRSS Chapter in MJCET</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
