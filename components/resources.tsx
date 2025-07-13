"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, Video, FileText, Database } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"

export function Resources() {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Educational Materials",
      description: "Comprehensive learning resources for students and researchers",
      items: [
        "Remote Sensing Fundamentals",
        "GIS Applications Guide",
        "Satellite Data Processing",
        "Earth Observation Techniques",
      ],
      color: "blue",
      url: "https://www.grss-ieee.org/resources/education/external-educational-resources/",
    },
    {
      icon: Database,
      title: "Datasets & Tools",
      description: "Access to satellite data, software tools, and processing platforms",
      items: ["Landsat Data Archive", "Sentinel Satellite Data", "Google Earth Engine", "QGIS Tutorials"],
      color: "green",
      url: "https://www.grss-ieee.org/?s=Datasets+%26+Tools",
    },
    {
      icon: Video,
      title: "Webinars & Lectures",
      description: "Video content from experts and recorded conference sessions",
      items: ["Expert Lecture Series", "Technical Webinars", "Conference Recordings", "Student Presentations"],
      color: "purple",
      url: "https://www.grss-ieee.org/?s=Webinars+%26+Lectures",
    },
    {
      icon: FileText,
      title: "Publications",
      description: "Research papers, journals, and technical documents",
      items: ["IEEE TGRS Journal", "Conference Proceedings", "Technical Reports", "Student Theses"],
      color: "orange",
      url: "https://www.grss-ieee.org/?s=Publications",
    },
  ]

  const featuredResources = [
    {
      title: "Google Earth Engine Handbook",
      type: "Guide",
      description: "Comprehensive guide to using Google Earth Engine for remote sensing applications",
      downloadCount: "2.5K+",
      format: "PDF",
    },
    {
      title: "Satellite Data Processing Toolkit",
      type: "Software",
      description: "Open-source tools for processing and analyzing satellite imagery",
      downloadCount: "1.8K+",
      format: "ZIP",
    },
    {
      title: "Remote Sensing Video Course",
      type: "Course",
      description: "Complete video course covering fundamentals to advanced topics",
      downloadCount: "3.2K+",
      format: "Video",
    },
  ]

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Learning Resources
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Knowledge at Your Fingertips</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access a comprehensive collection of educational materials, datasets, tools, and publications to advance
            your understanding of geoscience and remote sensing.
          </p>
        </motion.div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resourceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-${category.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className={`w-8 h-8 text-${category.color}-600`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className={`w-2 h-2 bg-${category.color}-500 rounded-full mr-3`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`w-full text-${category.color}-600 border-${category.color}-600 hover:bg-${category.color}-50`}
                    onClick={() => window.open(category.url, '_blank')}
                  >
                    Explore Resources
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Featured Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <Card key={resource.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">{resource.type}</Badge>
                    <Badge variant="outline">{resource.format}</Badge>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Download className="w-4 h-4 mr-1" />
                      {resource.downloadCount} downloads
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Resource Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Resource Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <AnimatedCounter value={500} suffix="+" delay={0} />
              </div>
              <div className="text-gray-600">Resources Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                <AnimatedCounter value={10} suffix="K+" delay={200} />
              </div>
              <div className="text-gray-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <AnimatedCounter value={50} suffix="+" delay={400} />
              </div>
              <div className="text-gray-600">Video Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <AnimatedCounter value={24} suffix="/7" delay={600} />
              </div>
              <div className="text-gray-600">Access</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Explore More Resources?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover thousands of educational materials, datasets, and publications to enhance your knowledge in
              geoscience and remote sensing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://www.grss-ieee.org/resources/', '_blank')}
              >
                Browse All Resources
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => window.open('https://www.grss-ieee.org/resources/education/', '_blank')}
              >
                Educational Portal
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
