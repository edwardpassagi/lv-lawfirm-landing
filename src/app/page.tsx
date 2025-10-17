'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaBalanceScale, FaShieldAlt, FaUsers, FaGlobe } from 'react-icons/fa'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Background from '@/components/Background'
import DisclaimerModal from '@/components/DisclaimerModal'
import AttorneyModal from '@/components/AttorneyModal'
import { useLanguage } from '@/context/LanguageContext'
import { translations, attorneys } from '@/translations'

const services = [
  {
    icon: FaBalanceScale,
    key: 'corporate',
  },
  {
    icon: FaShieldAlt,
    key: 'litigation',
  },
  {
    icon: FaUsers,
    key: 'family',
  },
  {
    icon: FaGlobe,
    key: 'international',
  },
] as const

export default function Home() {
  const { language } = useLanguage()
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false)
  const [disclaimerAction, setDisclaimerAction] = useState<'schedule' | 'contact'>('schedule')
  const [selectedAttorney, setSelectedAttorney] = useState<typeof attorneys[0] | null>(null)
  const [isAttorneyModalOpen, setIsAttorneyModalOpen] = useState(false)

  const handleScheduleClick = () => {
    setDisclaimerAction('schedule')
    setIsDisclaimerOpen(true)
  }

  const handleContactClick = () => {
    setDisclaimerAction('contact')
    setIsDisclaimerOpen(true)
  }

  const handleDisclaimerClose = () => {
    setIsDisclaimerOpen(false)
  }

  const handleContinue = () => {
    setIsDisclaimerOpen(false)
    if (disclaimerAction === 'schedule') {
      // Open Calendly
      window.open('https://calendly.com/edward-passagi/30min', '_blank')
    } else {
      // Open WhatsApp
      window.open('https://wa.me/message/NMAAAO2JPOBCF1', '_blank')
    }
  }

  const handleAttorneyClick = (attorney: typeof attorneys[0]) => {
    setSelectedAttorney(attorney)
    setIsAttorneyModalOpen(true)
  }

  const handleAttorneyModalClose = () => {
    setIsAttorneyModalOpen(false)
  }

  return (
    <main className="min-h-dvh">
      <Navbar onContactClick={handleContactClick} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Background />
        <div className="container relative z-10">
          <motion.div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-serif mb-6 text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {translations.hero[language].title}
            </motion.h1>
            <motion.p
              className="text-xl md:text-3xl mb-8 max-w-4xl mx-auto text-gray-100 drop-shadow font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {translations.hero[language].subtitle}
            </motion.p>
            <motion.div
              key={language}
              className="flex flex-col gap-4 justify-center items-center w-full max-w-sm mx-auto"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                className="bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-6 py-3 rounded-md font-medium font-serif w-full"
                style={{ backdropFilter: 'blur(8px)' }}
                onClick={handleScheduleClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {translations.hero[language].cta}
              </motion.button>
              <motion.button
                onClick={handleContactClick}
                className="bg-whatsapp/60 border border-whatsapp/30 text-white hover:bg-whatsapp/90 hover:border-whatsapp/50 px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 font-serif w-full"
                style={{ backdropFilter: 'blur(8px)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <FaWhatsapp className="w-5 h-5" />
                {translations.nav[language].contactUs}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 bg-dark">
        <div className="container">
          <h2 className="text-4xl font-serif text-center mb-16 text-white">
            {translations.services[language].title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                className="p-6 bg-primary-light/15 backdrop-blur-sm rounded-lg shadow-lg border border-primary-light/25"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <service.icon className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-serif mb-2 text-white">
                  {translations.services[language][service.key].title}
                </h3>
                <p className="text-gray-300 font-serif">
                  {translations.services[language][service.key].description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Attorneys Section */}
      <section id="attorneys" className="py-20 bg-primary-light">
        <div className="container">
          <h2 className="text-4xl font-serif text-center mb-12 text-white">
            {translations.attorneys[language].title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {attorneys.map((attorney, idx) => (
              <motion.div
                key={attorney.name}
                className="bg-dark/80 rounded-lg shadow-lg border border-primary/20 overflow-hidden flex flex-col h-full cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                onClick={() => handleAttorneyClick(attorney)}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={attorney.photoCard}
                      alt={attorney.name}
                      fill
                      className="object-cover object-top"
                    />
                  </motion.div>
                </div>
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <h3 className="text-lg font-serif text-white mb-2">{attorney.name}</h3>
                  <p className="text-gray-400 text-sm font-serif">{attorney.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-serif mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {translations.about[language].title}
            </motion.h2>
            <motion.p
              className="text-lg mb-12 text-gray-200 font-serif leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {translations.about[language].description}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                className="bg-dark/90 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg border border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif mb-4 text-white">
                  {translations.about[language].office}
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-100 font-serif">Jalan Rusa Raya Blok D1/27 Nuri Bintaro Jaya</p>
                  <p className="text-gray-100 font-serif">Tangerang Selatan, Indonesia 15412</p>
                  <p className="text-gray-100 font-serif">{translations.about[language].telephone}</p>
                  <p className="text-gray-100 font-serif">Email: info@lvlaw.id</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-dark/90 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg border border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif mb-4 text-white">
                  {translations.about[language].hours}
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-100 font-serif">{translations.about[language].weekdays}</p>
                  <p className="text-gray-100 font-serif">09:00 - 18:00 WIB</p>
                  <p className="text-gray-100 font-serif">{translations.about[language].saturday}</p>
                  <p className="text-gray-100 font-serif">09:00 - 13:00 WIB</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="py-6 bg-dark text-center">
        <div className="container">
          <p className="text-gray-400 text-sm font-serif">
            {translations.footer[language].copyright}
          </p>
        </div>
      </footer>

      {/* Disclaimer Modal */}
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={handleDisclaimerClose}
        onContinue={handleContinue}
        continueButtonText={
          disclaimerAction === 'contact'
            ? translations.disclaimer[language].continueContact
            : undefined
        }
      />

      {/* Attorney Detail Modal */}
      <AttorneyModal
        isOpen={isAttorneyModalOpen}
        onClose={handleAttorneyModalClose}
        attorney={selectedAttorney}
        language={language}
      />
    </main>
  )
} 