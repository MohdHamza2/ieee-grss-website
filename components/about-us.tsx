"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Eye, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function AboutUs() {
  const teamMembers = [
    {
      name: "Mir Nabeel Uddin",
      position: "Chairperson",
      description: "Leading the chapter with vision and dedication to advance geoscience research.",
    },
    {
      name: "Insiya Maryam",
      position: "Vice Chair",
      description: "Supporting strategic initiatives and fostering community engagement.",
    },
    {
      name: "Bilal Hussain",
      position: "Secretary",
      description: "Managing communications and coordinating chapter activities.",
    },
    {
      name: "Mirfath Fatima",
      position: "Treasurer",
      description: "Overseeing financial operations and resource management.",
    },
    {
      name: "Mohammed Adil",
      position: "Webmaster",
      description: "Maintaining digital presence and technical infrastructure.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400 to-blue-500 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            About IEEE GRSS MJCET
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pioneering Remote Sensing Excellence</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The IEEE Geoscience and Remote Sensing Society (GRSS) MJCET Chapter was established in October 2024 at
            Muffakham Jah College of Engineering & Technology, Hyderabad. We are dedicated to advancing the
            understanding and application of geoscience and remote sensing technologies.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To foster innovation in geoscience and remote sensing technologies, providing students with hands-on
                  experience and research opportunities in Earth observation sciences.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become a leading chapter in advancing remote sensing education and research, contributing to global
                  understanding of Earth systems and environmental monitoring.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Excellence in education, collaborative research, ethical practices, and commitment to advancing
                  scientific knowledge for the betterment of society and environment.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of student leaders working together to advance geoscience and remote sensing at MJCET.
          </p>
        </motion.div>

        {/* Team Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            <div className="w-full h-64 bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-blue-800 font-medium">Team Photo</p>
                <p className="text-blue-600 text-sm">Upload your team photo here</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logo Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg inline-block hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="/images/grss-logo.png"
              alt="IEEE GRSS MJCET Official Logo"
              className="w-32 h-32 object-contain mx-auto mb-4 cursor-pointer"
              whileHover={{
                scale: 1.1,
                rotate: [0, -3, 3, 0],
                transition: { duration: 0.4 },
              }}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.h4
              className="text-lg font-bold text-gray-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Official Chapter Logo
            </motion.h4>
            <motion.p
              className="text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              IEEE Geoscience and Remote Sensing Society - MJCET Chapter
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h4>
                  <Badge variant="secondary" className="mx-auto block w-fit mb-3">
                    {member.position}
                  </Badge>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
