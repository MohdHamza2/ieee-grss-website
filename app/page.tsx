import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/about-us"
import { Events } from "@/components/events"
import { Conferences } from "@/components/conferences"
import { Resources } from "@/components/resources"
import { GlobalPresence } from "@/components/global-presence"
import { Contact } from "@/components/contact"
import { ChatBot } from "@/components/chat-bot"
import { AnimatedLogoSection } from "@/components/animated-logo-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <AnimatedLogoSection />
      <Events />
      <Conferences />
      <Resources />
      <GlobalPresence />
      <Contact />
      <ChatBot />
    </main>
  )
}
