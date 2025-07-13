"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"

export function Events() {
  const events = [
    {
      title: "Richard Moore Memorial Lecture",
      date: "November 2024",
      status: "completed",
      description: "A prestigious lecture series honoring the legacy of Richard Moore in geoscience research.",
      chiefGuest: "Dr. PV Radhadevi, Director ADRIN",
      highlights: ["Satellite Remote Sensing", "Earth Observation", "ADRIN Research"],
      attendees: "150+",
      type: "Memorial Lecture",
    },
    {
      title: "GEOLAUNCH",
      date: "December 2024",
      status: "completed",
      description: "Explore the Earth with Google Earth Engine (GEE) - A comprehensive workshop on GEE applications.",
      highlights: ["Google Earth Engine", "Hands-on Training", "Satellite Data Analysis"],
      attendees: "80+",
      type: "Workshop",
    },
    {
      title: "EARTH EXPLORE & IDEATHON",
      date: "January 2025",
      status: "completed",
      description: "Part of Electrovanza - the national level annual fest. Innovation competition in Earth sciences.",
      highlights: ["Innovation Competition", "Earth Sciences", "National Level"],
      attendees: "200+",
      type: "Competition",
    },
    {
      title: "CAMPUS REWIND",
      date: "July 2025",
      status: "completed",
      description: "An innovative podcast event featuring discussions on remote sensing and geoscience topics.",
      highlights: ["Podcast Format", "Expert Interviews", "Student Participation"],
      attendees: "100+",
      type: "Podcast Event",
    },
    {
      title: "EXPOGENIX",
      date: "July 17, 2025",
      status: "upcoming",
      description: "Project showcase event featuring innovative projects across Fintech, Spacetech, Edtech, and Agrotech domains.",
      highlights: ["Project Showcase", "Fintech", "Spacetech", "Edtech", "Agrotech"],
      attendees: "Expected 200+",
      type: "Project Showcase",
      registrationLink: "https://forms.gle/tyKiCGmgM4w3U2Dh9",
    },
  ]

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Our Events
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Transformative Learning Experiences</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From memorial lectures to hands-on workshops, our events are designed to inspire, educate, and connect the
            geoscience community at MJCET and beyond.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge
                      variant={event.status === "completed" ? "default" : "secondary"}
                      className={
                        event.status === "completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }
                    >
                      {event.status === "completed" ? "Completed" : "Upcoming"}
                    </Badge>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{event.title}</CardTitle>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  {event.chiefGuest && (
                    <div className="bg-blue-50 rounded-lg p-3 mb-3">
                      <p className="text-sm font-medium text-blue-900">Chief Guest:</p>
                      <p className="text-blue-800">{event.chiefGuest}</p>
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.attendees} attendees</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className={
                          event.status === "upcoming" && event.registrationLink
                            ? "text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                            : "text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                        }
                        onClick={() => {
                          if (event.status === "upcoming" && event.registrationLink) {
                            window.open(event.registrationLink, '_blank')
                          }
                        }}
                      >
                        {event.status === "upcoming" && event.registrationLink ? "Register Now" : "Learn More"}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Event Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Event Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <AnimatedCounter value={5} suffix="+" delay={0} />
              </div>
              <div className="text-gray-600">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <AnimatedCounter value={530} suffix="+" delay={200} />
              </div>
              <div className="text-gray-600">Total Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <AnimatedCounter value={3} delay={400} />
              </div>
              <div className="text-gray-600">Months Active</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <AnimatedCounter value={100} suffix="%" delay={600} />
              </div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
