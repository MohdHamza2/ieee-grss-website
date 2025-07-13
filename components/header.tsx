"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const desktopSearchRef = useRef<HTMLFormElement>(null)
  const mobileSearchRef = useRef<HTMLFormElement>(null)
  const pathname = usePathname()
  const isMainPage = pathname === "/"

  const navItems = [
    { name: "Home", href: isMainPage ? "#home" : "/" },
    { name: "About", href: isMainPage ? "#about" : "/#about" },
    { name: "Events", href: isMainPage ? "#events" : "/#events" },
    { name: "Conferences", href: isMainPage ? "#conferences" : "/#conferences" },
    { name: "Resources", href: isMainPage ? "#resources" : "/#resources" },
    { name: "Contact", href: isMainPage ? "#contact" : "/#contact" },
  ]

  const searchableContent = [
    { 
      title: "About IEEE GRSS", 
      section: "about", 
      keywords: [
        "ieee", "grss", "about", "chapter", "mjcet", "muffakham jah", "hyderabad", 
        "geoscience", "remote sensing", "earth observation", "satellite", "mission", 
        "vision", "values", "leadership", "team", "chairperson", "vice chair", 
        "secretary", "treasurer", "webmaster", "mir nabeel", "insiya maryam", 
        "bilal hussain", "mirfath fatima", "mohammed adil", "october 2024", 
        "engineering", "technology", "research", "innovation", "education"
      ] 
    },
    { 
      title: "Upcoming Events", 
      section: "events", 
      keywords: [
        "events", "workshops", "lectures", "competitions", "richard moore", 
        "memorial lecture", "geolaunch", "earth explore", "ideathon", "student", 
        "activities", "upcoming", "calendar", "schedule", "registration", 
        "participate", "join", "attend", "seminar", "conference", "symposium", 
        "training", "hands-on", "practical", "theoretical", "technical"
      ] 
    },
    { 
      title: "Conferences", 
      section: "conferences", 
      keywords: [
        "conferences", "igarss", "workshops", "research", "international", 
        "geoscience", "remote sensing", "symposium", "presentation", "paper", 
        "poster", "abstract", "submission", "deadline", "registration", 
        "travel", "accommodation", "sponsorship", "awards", "recognition", 
        "networking", "collaboration", "partnership", "global", "regional", 
        "local", "student", "professional", "academic"
      ] 
    },
    { 
      title: "Educational Resources", 
      section: "resources", 
      keywords: [
        "resources", "education", "materials", "datasets", "tutorials", 
        "video", "documentation", "guides", "manuals", "textbooks", 
        "research papers", "publications", "journals", "articles", 
        "case studies", "examples", "code", "software", "tools", 
        "applications", "libraries", "frameworks", "algorithms", 
        "methodologies", "best practices", "standards", "protocols"
      ] 
    },
    { 
      title: "Contact Information", 
      section: "contact", 
      keywords: [
        "contact", "email", "phone", "address", "location", "mjcet", 
        "hyderabad", "telangana", "india", "ieeegrssmjcet@gmail.com", 
        "reach", "get in touch", "inquiry", "support", "help", 
        "questions", "feedback", "suggestions", "complaints", 
        "partnership", "collaboration", "sponsorship", "volunteer", 
        "join", "membership", "social media", "linkedin", "twitter"
      ] 
    },
    { 
      title: "Global Presence", 
      section: "global-presence", 
      keywords: [
        "global", "presence", "worldwide", "international", "network", 
        "chapters", "members", "countries", "regions", "collaboration", 
        "partnership", "outreach", "impact", "influence", "recognition", 
        "awards", "achievements", "contributions", "leadership", 
        "innovation", "research", "publications", "conferences", 
        "workshops", "education", "training", "mentoring"
      ] 
    }
  ]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      const lowerQuery = query.toLowerCase()
      
      // Enhanced search with scoring
      const matchingContent = searchableContent
        .map(item => {
          const titleMatch = item.title.toLowerCase().includes(lowerQuery) ? 10 : 0
          const keywordMatches = item.keywords.filter(keyword => 
            keyword.toLowerCase().includes(lowerQuery)
          ).length
          const exactMatches = item.keywords.filter(keyword => 
            keyword.toLowerCase() === lowerQuery
          ).length
          
          const score = titleMatch + (keywordMatches * 2) + (exactMatches * 5)
          
          return {
            ...item,
            score,
            matchedKeywords: item.keywords.filter(keyword => 
              keyword.toLowerCase().includes(lowerQuery)
            )
          }
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
      
      if (matchingContent.length > 0) {
        const bestMatch = matchingContent[0]
        
        if (isMainPage) {
          // On main page, scroll to section
          const element = document.querySelector(`#${bestMatch.section}`)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            // Highlight the section briefly
            element.classList.add('bg-yellow-50', 'transition-colors', 'duration-300')
            setTimeout(() => {
              element.classList.remove('bg-yellow-50')
            }, 2000)
          }
        } else {
          // On other pages, navigate to main page with section
          window.location.href = `/#${bestMatch.section}`
        }
        
        // Show enhanced notification with multiple results
        const notification = document.createElement('div')
        notification.className = 'fixed top-20 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transform transition-all duration-300 max-w-sm'
        
        let notificationText = `Found: ${bestMatch.title}`
        if (matchingContent.length > 1) {
          notificationText += `\nAlso found: ${matchingContent.slice(1, 3).map(item => item.title).join(', ')}`
        }
        
        notification.innerHTML = notificationText.replace(/\n/g, '<br>')
        document.body.appendChild(notification)
        
        setTimeout(() => {
          notification.remove()
        }, 4000)
        
        // Show search suggestions if multiple results and on main page
        if (matchingContent.length > 1 && isMainPage) {
          setTimeout(() => {
            const suggestions = document.createElement('div')
            suggestions.className = 'fixed top-32 right-4 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-3 max-w-sm'
            suggestions.innerHTML = `
              <div class="text-sm font-medium text-gray-900 mb-2">Other results:</div>
              ${matchingContent.slice(1, 4).map(item => 
                `<div class="text-sm text-blue-600 cursor-pointer hover:text-blue-800 py-1" 
                      onclick="document.querySelector('#${item.section}').scrollIntoView({behavior: 'smooth'}); this.parentElement.remove();">
                  ${item.title}
                </div>`
              ).join('')}
            `
            document.body.appendChild(suggestions)
            
            setTimeout(() => {
              suggestions.remove()
            }, 8000)
          }, 1000)
        }
      } else {
        // Show no results with suggestions
        const notification = document.createElement('div')
        notification.className = 'fixed top-20 right-4 bg-gray-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transform transition-all duration-300'
        notification.textContent = isMainPage 
          ? 'No matching sections found. Try: events, contact, resources, about'
          : 'No matching sections found. Try searching on the main page.'
        document.body.appendChild(notification)
        
        setTimeout(() => {
          notification.remove()
        }, 4000)
      }
    }
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuggestions(false)
    handleSearch(searchQuery)
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    
    if (value.trim().length > 0) {
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const getSearchSuggestions = () => {
    if (!searchQuery.trim()) return []
    
    const lowerQuery = searchQuery.toLowerCase()
    return searchableContent
      .filter(item => 
        item.title.toLowerCase().includes(lowerQuery) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
      )
      .slice(0, 5)
  }

  const handleSuggestionClick = (item: any) => {
    setSearchQuery(item.title)
    setShowSuggestions(false)
    
    if (isMainPage) {
      handleSearch(item.title)
    } else {
      // Navigate to main page with section
      window.location.href = `/#${item.section}`
    }
  }

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((desktopSearchRef.current && !desktopSearchRef.current.contains(event.target as Node)) &&
          (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target as Node))) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <Link href="/">
              <motion.img
                src="/images/grss-logo.png"
                alt="IEEE GRSS MJCET Logo"
                className="w-12 h-12 object-contain cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                role="img"
                aria-label="IEEE GRSS MJCET Chapter Logo"
              />
            </Link>
            <Link href="/">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <h1 className="text-xl font-bold text-blue-950 hover:text-blue-700 transition-colors">IEEE GRSS</h1>
                <p className="text-xs text-blue-950">MJCET Chapter</p>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="relative" ref={desktopSearchRef}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search sections..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="pl-10 pr-4 py-2 w-64 border-gray-200 focus:border-blue-500"
                aria-label="Search website content"
              />
              
              {/* Search Suggestions */}
              {showSuggestions && getSearchSuggestions().length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1 max-h-60 overflow-y-auto">
                  {getSearchSuggestions().map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm"
                      onClick={() => handleSuggestionClick(item)}
                    >
                      <div className="font-medium text-gray-900">{item.title}</div>
                      <div className="text-gray-500 text-xs">
                        {item.keywords.slice(0, 3).join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearchSubmit} className="relative mb-4" ref={mobileSearchRef}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search sections..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  className="pl-10 pr-4 py-2 w-full border-gray-200 focus:border-blue-500"
                  aria-label="Search website content"
                />
                
                {/* Mobile Search Suggestions */}
                {showSuggestions && getSearchSuggestions().length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1 max-h-40 overflow-y-auto">
                    {getSearchSuggestions().map((item, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm"
                        onClick={() => {
                          handleSuggestionClick(item)
                          setIsMenuOpen(false)
                        }}
                      >
                        <div className="font-medium text-gray-900">{item.title}</div>
                        <div className="text-gray-500 text-xs">
                          {item.keywords.slice(0, 2).join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </form>
              
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
