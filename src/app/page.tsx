'use client'

import { motion } from 'framer-motion'
import { ScaleIcon, ShieldCheckIcon, UserGroupIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline'
import Navbar from '@/components/Navbar'
import Background from '@/components/Background'
import { useLanguage } from '@/context/LanguageContext'
import { translations, attorneys } from '@/translations'

const services = [
  {
    icon: ScaleIcon,
    key: 'corporate',
  },
  {
    icon: ShieldCheckIcon,
    key: 'litigation',
  },
  {
    icon: UserGroupIcon,
    key: 'family',
  },
  {
    icon: GlobeAsiaAustraliaIcon,
    key: 'international',
  },
] as const

export default function Home() {
  const { language } = useLanguage()

  return (
    <main className="min-h-screen">
      <Navbar />
      
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
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100 drop-shadow font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {translations.hero[language].subtitle}
            </motion.p>
            <motion.button 
              className="btn btn-secondary font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {translations.hero[language].cta}
            </motion.button>
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
                <service.icon className="w-8 h-8 text-secondary mb-4" />
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
          {/* First row: 3 attorneys, centered */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-auto">
              {attorneys.slice(0, 3).map((attorney, idx) => (
                <motion.div
                  key={attorney.name}
                  className="p-6 bg-dark/80 rounded-lg shadow-lg border border-primary/20 flex flex-col items-center text-center min-h-[180px] w-64"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col justify-between h-full w-full flex-1">
                    <div className="flex-1 flex items-start justify-center">
                      <h3 className="text-lg font-serif text-white mb-2">{attorney.name}</h3>
                    </div>
                    <div className="flex-1 flex items-end justify-center">
                      <p className="text-secondary text-sm font-serif">{attorney.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Second row: 2 attorneys, centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-auto">
              {attorneys.slice(3).map((attorney, idx) => (
                <motion.div
                  key={attorney.name}
                  className="p-6 bg-dark/80 rounded-lg shadow-lg border border-primary/20 flex flex-col items-center text-center w-64"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (idx + 3) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-serif text-white mb-2">{attorney.name}</h3>
                  <p className="text-secondary text-sm font-serif">{attorney.position}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-serif mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {translations.contact[language].title}
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-gray-200 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {translations.contact[language].description}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <motion.div 
                className="bg-dark/90 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg border border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif mb-4 text-secondary">
                  {translations.contact[language].office}
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-100 font-serif">Jalan Rusa Raya Blok D1/27 Nuri Bintaro Jaya</p>
                  <p className="text-gray-100 font-serif">Tangerang Selatan, Indonesia 15412</p>
                  <p className="text-gray-100 font-serif">{translations.contact[language].telephone}</p>
                  <p className="text-gray-100 font-serif">Email: info@luxvisionem.com</p>
                </div>
              </motion.div>
              <motion.div 
                className="bg-dark/90 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg border border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif mb-4 text-secondary">
                  {translations.contact[language].hours}
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-100 font-serif">{translations.contact[language].weekdays}</p>
                  <p className="text-gray-100 font-serif">09:00 - 18:00 WIB</p>
                  <p className="text-gray-100 font-serif">{translations.contact[language].saturday}</p>
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
    </main>
  )
} 