"use client"

import { motion } from "framer-motion"
import { LogoAnimation } from "./logo-animation"

export function AnimatedLogoSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h3
          className="text-2xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Proudly Part of IEEE GRSS Global Network
        </motion.h3>

        <div className="flex justify-center items-center space-x-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <LogoAnimation
              src="/images/grss-logo.png"
              alt="IEEE GRSS MJCET Logo"
              size="lg"
              variant="floating"
              className="mx-auto mb-4"
            />
            <p className="text-sm text-gray-600 font-medium">MJCET Chapter</p>
          </motion.div>

          <motion.div
            className="text-4xl text-blue-300"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            ⟷
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.2)",
                  "0 0 30px rgba(59, 130, 246, 0.4)",
                  "0 0 20px rgba(59, 130, 246, 0.2)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <span className="text-white font-bold text-2xl">IEEE</span>
            </motion.div>
            <p className="text-sm text-gray-600 font-medium">Global Network</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
