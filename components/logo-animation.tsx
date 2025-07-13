"use client"

import { motion } from "framer-motion"

interface LogoAnimationProps {
  src: string
  alt: string
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "header" | "footer" | "showcase" | "floating"
}

export function LogoAnimation({ src, alt, className = "", size = "md", variant = "header" }: LogoAnimationProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  }

  const variants = {
    header: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      hover: {
        scale: 1.1,
        rotate: [0, -2, 2, 0],
        transition: { duration: 0.3 },
      },
    },
    footer: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      hover: {
        scale: 1.15,
        filter: "brightness(1.2)",
        transition: { duration: 0.3 },
      },
    },
    showcase: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      hover: {
        scale: 1.1,
        rotate: [0, -3, 3, 0],
        transition: { duration: 0.4 },
      },
    },
    floating: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      hover: {
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 },
      },
    },
  }

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`${sizeClasses[size]} object-contain cursor-pointer transition-all duration-300 ${className}`}
      initial={variants[variant].initial}
      animate={variants[variant].animate}
      whileHover={variants[variant].hover}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.6 }}
      {...(variant === "showcase" && {
        animate: {
          ...variants[variant].animate,
          scale: [1, 1.02, 1],
        },
        transition: {
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      })}
      {...(variant === "footer" && {
        animate: {
          ...variants[variant].animate,
          filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
        },
        transition: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      })}
    />
  )
}
