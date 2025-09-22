'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLanguage, type Language } from '@/context/LanguageContext'
import { translations } from '@/translations'
import Image from 'next/image'

const getNavItems = (language: Language) => [
  { name: translations.nav[language].home, href: '#home' },
  { name: translations.nav[language].services, href: '#services' },
  { name: translations.nav[language].contact, href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const navItems = getNavItems(language)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const toggleLanguage = () => {
    const newLang = language === 'id' ? 'en' : 'id'
    if (language !== newLang) {
      setLanguage(newLang)
    }
  }

  const LanguageToggle = () => (
    <motion.button
      onClick={toggleLanguage}
      className="relative w-16 h-8 rounded-full bg-dark/20 border border-gray-300 hover:border-white transition-colors duration-200 group"
      aria-label="Toggle language"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-1 flex"
        animate={{ justifyContent: language === 'id' ? 'flex-start' : 'flex-end' }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="w-6 h-6 bg-white rounded-full"
          whileHover={{ scale: 1.1 }}
          layout
        />
      </motion.div>
      <div className="absolute inset-0 flex justify-between items-center px-2 text-sm text-gray-300 font-medium pointer-events-none">
        <motion.span
          animate={{ color: language === 'id' ? '#ffffff' : '#9CA3AF' }}
          transition={{ duration: 0.2 }}
        >
          ID
        </motion.span>
        <motion.span
          animate={{ color: language === 'en' ? '#ffffff' : '#9CA3AF' }}
          transition={{ duration: 0.2 }}
        >
          EN
        </motion.span>
      </div>
    </motion.button>
  )

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-sm' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20">
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
            <a href="https://wa.me/message/NMAAAO2JPOBCF1" className="btn btn-secondary whitespace-nowrap min-w-[120px] mr-6">
              {translations.nav[language].contactUs}
            </a>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center ml-auto">
            <button
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
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
                <LanguageToggle />
              </div>
              <a
                href="https://wa.me/6281258886362"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-2 btn btn-secondary text-center"
              >
                {translations.nav[language].contactUs}
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
} 