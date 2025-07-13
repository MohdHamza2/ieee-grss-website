"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ExternalLink, Globe, Users, Award } from "lucide-react"
import { motion } from "framer-motion"

export function Conferences() {
  const conferences = [
    {
      title: "IGARSS 2025",
      fullName: "IEEE International Geoscience and Remote Sensing Symposium",
      date: "July 13-18, 2025",
      location: "Brussels, Belgium",
      description:
        "The premier international forum for the presentation of technological advances and research results in geoscience and remote sensing.",
      topics: ["Earth Observation", "Climate Change", "Disaster Management", "AI in Remote Sensing"],
      type: "International",
      status: "upcoming",
      url: "https://www.2025.ieeeigarss.org/",
    },
    {
      title: "GRSS Workshop Series",
      fullName: "Technical Workshops on Advanced Remote Sensing",
      date: "Throughout 2025",
      location: "Various Locations",
      description:
        "Specialized workshops focusing on cutting-edge techniques in remote sensing and geoscience applications.",
      topics: ["SAR Processing", "Hyperspectral Imaging", "Machine Learning", "Data Fusion"],
      type: "Workshop",
      status: "ongoing",
      url: "https://www.grss-ieee.org/event/13th-international-workshop-on-advanced-ground-penetrating-radar/",
    },
    {
      title: "Regional GRSS Conference",
      fullName: "Asia-Pacific Remote Sensing Conference",
      date: "September 2025",
      location: "Singapore",
      description: "Regional conference bringing together researchers and practitioners from the Asia-Pacific region.",
      topics: ["Regional Applications", "Capacity Building", "Technology Transfer", "Collaboration"],
      type: "Regional",
      status: "upcoming",
      url: "https://www.grss-ieee.org/event/2026-ieee-mediterranean-and-middle-east-geoscience-and-remote-sensing-symposium/",
    },
    {
      title: "Student Paper Competition",
      fullName: "IEEE GRSS Student Paper Competition",
      date: "March 2025",
      location: "Online/Hybrid",
      description: "Annual competition for student researchers to present their work in geoscience and remote sensing.",
      topics: ["Student Research", "Innovation", "Peer Review", "Recognition"],
      type: "Competition",
      status: "registration-open",
      url: "https://www.grss-ieee.org/event/ieee-grss-iadf-school-on-computer-vision-for-earth-observation-4th-edition/",
    },
  ]

  const conferenceFeatures = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Conferences spanning across continents with international participation",
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Connect with leading researchers and industry professionals worldwide",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Opportunities for awards, recognition, and career advancement",
    },
  ]

  return (
    <section
      id="conferences"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/earth-satellite-2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 text-blue-300 border-blue-300 bg-blue-900/20">
              Conferences & Symposiums
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Global Scientific Gatherings</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Join the world's leading conferences in geoscience and remote sensing. Present your research, learn from
              experts, and build lasting professional connections.
            </p>
          </motion.div>

          {/* Conference Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {conferenceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <feature.icon className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Conferences Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {conferences.map((conference, index) => (
              <motion.div
                key={conference.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge
                        variant={
                          conference.status === "upcoming"
                            ? "default"
                            : conference.status === "ongoing"
                              ? "secondary"
                              : "outline"
                        }
                        className={
                          conference.status === "upcoming"
                            ? "bg-blue-500/20 text-blue-300 border-blue-400"
                            : conference.status === "ongoing"
                              ? "bg-green-500/20 text-green-300 border-green-400"
                              : "bg-orange-500/20 text-orange-300 border-orange-400"
                        }
                      >
                        {conference.status === "upcoming"
                          ? "Upcoming"
                          : conference.status === "ongoing"
                            ? "Ongoing"
                            : "Registration Open"}
                      </Badge>
                      <Badge variant="outline" className="text-gray-300 border-gray-400">
                        {conference.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white mb-2">{conference.title}</CardTitle>
                    <p className="text-sm text-gray-300 mb-3">{conference.fullName}</p>

                    <div className="space-y-2">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{conference.date}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{conference.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4 leading-relaxed">{conference.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-white mb-2">Key Topics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {conference.topics.map((topic, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs bg-blue-500/20 text-blue-300 border-blue-400"
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4 border-t border-white/20">
                        <Button 
                          size="sm" 
                          className="bg-blue-600 hover:bg-blue-700 flex-1"
                          onClick={() => window.open(conference.url, '_blank')}
                        >
                          Learn More
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-blue-300 border-blue-400 hover:bg-blue-500/20 bg-transparent"
                          onClick={() => window.open(conference.url, '_blank')}
                        >
                          Register
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Present Your Research?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of researchers, scientists, and industry professionals at IEEE GRSS conferences. Share your
              discoveries, learn from experts, and advance your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://www.2025.ieeeigarss.org/', '_blank')}
              >
                Submit Abstract
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-300 hover:bg-blue-500/20 bg-transparent"
                onClick={() => window.open('https://www.grss-ieee.org/events/', '_blank')}
              >
                View All Conferences
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
