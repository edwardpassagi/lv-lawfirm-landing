'use client'

import React, { useCallback } from 'react'
import { useState, useEffect, useDeferredValue } from 'react'
import { motion, AnimatePresence, useSpring } from 'framer-motion'
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import { useLanguage, type Language } from '@/context/LanguageContext'
import { translations } from '@/translations'
import Image from 'next/image'

const getNavItems = (language: Language) => [
  { name: translations.nav[language].home, href: '#home' },
  { name: translations.nav[language].services, href: '#services' },
  { name: translations.nav[language].team, href: '#attorneys' },
  { name: translations.nav[language].about, href: '#about' },
]

interface NavbarProps {
  onContactClick: () => void
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const navItems = getNavItems(language)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Show contact button when scrolled past hero section (roughly viewport height)
      setIsPastHero(window.scrollY > window.innerHeight * 0.8)
    }

    // Check scroll position on mount
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const toggleLanguage = useCallback(() => {
    const newLang = language === 'id' ? 'en' : 'id'
    if (language !== newLang) {
      setLanguage(newLang)
    }
  }, [setLanguage])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-sm' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center" style={{ height: '80px', minHeight: '80px' }}>
          {/* Logo - Fixed width column */}
          <div className="w-[280px]">
            <a href="#home" className="flex items-center text-white font-serif text-lg md:text-xl lg:text-2xl whitespace-nowrap">
              <Image
                src="/images/icon.png"
                alt="Lux Visionem & Partners Logo"
                width={32}
                height={32}
                className="mr-3 rounded-md"
              />
              Lux Visionem & Partners
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions - Fixed width column */}
          <div className="hidden lg:flex items-center justify-end w-[280px]">
            <AnimatePresence>
              {isPastHero && (
                <motion.button
                  onClick={onContactClick}
                  className="bg-whatsapp/60 text-white hover:bg-whatsapp-hover whitespace-nowrap min-w-[120px] mr-6 flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-colors duration-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  {translations.nav[language].contactUs}
                </motion.button>
              )}
            </AnimatePresence>
            <LanguageToggle isEN={language === 'en'} onToggle={toggleLanguage} />
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center ml-auto gap-3">
            <AnimatePresence>
              {isPastHero && (
                <motion.button
                  onClick={onContactClick}
                  className="bg-whatsapp/60 text-white hover:bg-whatsapp-hover p-3 rounded-md transition-colors duration-200 flex items-center justify-center"
                  aria-label="Contact on WhatsApp"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>
            <button
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-dark/95 backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-dark/50 rounded-md"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 flex items-center justify-between">
                <span className="text-base font-medium text-gray-300">
                  {language === 'id' ? 'Bahasa' : 'Language'}
                </span>
                <LanguageToggle isEN={language === 'en'} onToggle={toggleLanguage} />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

const LanguageToggle: React.FC<{
  isEN: boolean;
  onToggle: () => void;
}> = React.memo(function LanguageToggle({ isEN, onToggle }) {
  console.count("lang toggle mount")
  return (
    <motion.label
      className="relative inline-block w-12 h-6 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={isEN}
        onChange={onToggle}
        aria-label="Toggle language"
      />
      <span className="absolute inset-0 bg-primary rounded-full shadow-lg" />
      <motion.span
        className="absolute w-6 h-6 bg-white rounded-full shadow-lg"
        animate={{ x: isEN ? 24 : 0 }}
        transition={{ x: { type: 'spring', stiffness: 300, damping: 20 } }}
      />
      <span className="absolute left-2 top-1 text-xs text-white font-medium pointer-events-none mix-blend-difference">
        ID
      </span>
      <span className="absolute right-1 top-1 text-xs text-white font-medium pointer-events-none mix-blend-difference">
        EN
      </span>
    </motion.label>
  )
});