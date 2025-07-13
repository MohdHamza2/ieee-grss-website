"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, AlertTriangle, Info } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Disclaimer</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* Alert Banner */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
                <p className="text-sm text-yellow-700 mt-1">
                  Please read this disclaimer carefully before using our website and services.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer Content */}
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-blue-600" />
                General Disclaimer
              </h2>
              <p className="leading-relaxed">
                The information provided on this website is for general informational purposes only. 
                While we strive to keep the information up to date and correct, we make no representations 
                or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                suitability, or availability of the information, products, services, or related graphics 
                contained on the website for any purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Accuracy of Information</h2>
              <p className="leading-relaxed">
                Any reliance you place on such information is therefore strictly at your own risk. 
                In no event will we be liable for any loss or damage including without limitation, 
                indirect or consequential loss or damage, arising from loss of data or profits 
                arising out of, or in connection with, the use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">External Links</h2>
              <p className="leading-relaxed">
                Through this website, you are able to link to other websites which are not under 
                the control of IEEE GRSS MJCET Chapter. We have no control over the nature, content, 
                and availability of those sites. The inclusion of any links does not necessarily 
                imply a recommendation or endorse the views expressed within them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Professional Advice</h2>
              <p className="leading-relaxed">
                The information on this website should not be construed as professional advice. 
                For specific advice related to your situation, please consult with qualified professionals 
                in the relevant field. We recommend seeking professional guidance for any decisions 
                that may affect your academic or professional career.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Event and Conference Information</h2>
              <p className="leading-relaxed">
                Information about events, conferences, and workshops is subject to change without notice. 
                While we endeavor to provide accurate and up-to-date information, we cannot guarantee 
                that all details will remain current. Please verify all information directly with 
                the event organizers before making any commitments.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Technical Information</h2>
              <p className="leading-relaxed">
                Technical information, research papers, and educational resources provided on this website 
                are for educational purposes only. Users should independently verify technical specifications, 
                methodologies, and results before applying them in professional or academic work.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="leading-relaxed">
                IEEE GRSS MJCET Chapter, its officers, members, and volunteers shall not be liable 
                for any direct, indirect, incidental, special, or consequential damages arising 
                from the use of this website or any information contained herein.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to Disclaimer</h2>
              <p className="leading-relaxed">
                We reserve the right to modify this disclaimer at any time. Changes will be effective 
                immediately upon posting on this website. Your continued use of the website after 
                any changes constitutes acceptance of the modified disclaimer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about this disclaimer, please contact us at{' '}
                <a href="mailto:ieeegrssmjcet@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                  ieeegrssmjcet@gmail.com
                </a>
              </p>
            </section>
          </div>

          {/* Footer Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </div>
              <div className="flex space-x-4">
                <Link href="/privacy" className="text-blue-600 hover:text-blue-800 text-sm underline">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-blue-600 hover:text-blue-800 text-sm underline">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 