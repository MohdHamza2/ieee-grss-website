"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            This Privacy Policy describes how IEEE GRSS MJCET Chapter collects, uses, and protects your information when you visit our website.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <p className="text-gray-600 mb-3">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Institution or organization affiliation</li>
                    <li>Professional interests and areas of expertise</li>
                    <li>Event registration and participation information</li>
                    <li>Newsletter subscription preferences</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-600 mb-3">
                    When you visit our website, we automatically collect certain information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent on each page</li>
                    <li>Referring website information</li>
                    <li>Device information and screen resolution</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Communication:</strong> To respond to your inquiries and provide information about our events and activities</li>
                  <li><strong>Event Management:</strong> To register you for events, workshops, and conferences</li>
                  <li><strong>Newsletter:</strong> To send you updates about our activities, research, and upcoming events</li>
                  <li><strong>Website Improvement:</strong> To analyze website usage and improve user experience</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>With Your Consent:</strong> We may share your information with your explicit consent</li>
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our activities</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                  <li><strong>IEEE Affiliation:</strong> As an IEEE chapter, we may share relevant information with IEEE headquarters for reporting and coordination purposes</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Encryption of sensitive data during transmission</li>
                  <li>Secure storage of personal information</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information to authorized personnel only</li>
                  <li>Regular backup and recovery procedures</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from newsletters and communications</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:ieeegrssmjcet@gmail.com" className="text-blue-600 hover:underline">
                    ieeegrssmjcet@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  Our website uses cookies and similar tracking technologies to enhance your experience:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Related Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  For more information about our website policies and terms of use:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                  <Link 
                    href="/terms" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Terms & Policies →
                  </Link>
                  <br />
                  <Link 
                    href="/disclaimer" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Disclaimer →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:ieeegrssmjcet@gmail.com" className="text-blue-600 hover:underline">
                      ieeegrssmjcet@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> MJCET, Hyderabad, Telangana, India
                  </p>
                  <p className="text-gray-700">
                    <strong>Phone:</strong> +91 6303 837 037
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 