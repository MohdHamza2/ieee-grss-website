"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
              Legal Information
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms & Policies</h1>
            <p className="text-xl text-gray-600">Important information about the use of this website</p>
          </motion.div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Educational Purpose Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  This website is created and maintained by the IEEE GRSS MJCET Chapter for educational and
                  informational purposes only. It is not an official website of the IEEE Geoscience and Remote Sensing
                  Society (GRSS) headquarters.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Copyright and Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <ul>
                  <li>This website does not claim any copyright infringement on IEEE GRSS materials</li>
                  <li>All IEEE GRSS trademarks and logos are property of IEEE</li>
                  <li>Content is used for educational purposes under fair use guidelines</li>
                  <li>Original content created by MJCET chapter is available under Creative Commons</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Website Usage Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <ul>
                  <li>This website is for educational and informational use only</li>
                  <li>Users may access and use the content for learning purposes</li>
                  <li>Commercial use of content is prohibited without permission</li>
                  <li>Users must respect intellectual property rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <ul>
                  <li>We collect minimal personal information only when voluntarily provided</li>
                  <li>Contact information is used solely for communication purposes</li>
                  <li>We do not share personal information with third parties</li>
                  <li>Cookies may be used to improve user experience</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                  <Link 
                    href="/privacy" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Read our full Privacy Policy →
                  </Link>
                  <br />
                  <Link 
                    href="/disclaimer" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Read our Disclaimer →
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  The IEEE GRSS MJCET Chapter provides this website "as is" without warranties. We are not liable for
                  any damages arising from the use of this website or its content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>For questions about these terms or this website, please contact us at:</p>
                <ul>
                  <li>Email: ieeegrssmjcet@gmail.com</li>
                  <li>Phone: +91 6303 837 037</li>
                  <li>Address: MJCET, Hyderabad, Telangana, India</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center text-gray-600">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
