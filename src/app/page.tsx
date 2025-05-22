'use client'

import { motion } from 'framer-motion'
import { ScaleIcon, ShieldCheckIcon, UserGroupIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline'
import Navbar from '@/components/Navbar'
import Background from '@/components/Background'

const services = [
  {
    title: 'Hukum Korporasi',
    description: 'Panduan ahli dalam hukum bisnis, merger & akuisisi, dan tata kelola perusahaan.',
    icon: ScaleIcon,
  },
  {
    title: 'Litigasi',
    description: 'Representasi kuat dalam proses pengadilan dan penyelesaian sengketa.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Hukum Keluarga',
    description: 'Dukungan penuh untuk masalah keluarga, perceraian, dan kasus hak asuh.',
    icon: UserGroupIcon,
  },
  {
    title: 'Hukum Internasional',
    description: 'Keahlian hukum lintas batas untuk operasi bisnis global.',
    icon: GlobeAsiaAustraliaIcon,
  },
]

export default function Home() {
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
              LV Lawfirm
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100 drop-shadow font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Keunggulan Layanan Hukum di Indonesia
            </motion.p>
            <motion.button 
              className="btn btn-secondary font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Jadwalkan Konsultasi
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-dark">
        <div className="container">
          <h2 className="text-4xl font-serif text-center mb-16 text-white">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="p-6 bg-primary/10 backdrop-blur-sm rounded-lg shadow-lg border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <service.icon className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-serif mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 font-serif">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-light">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-serif mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hubungi Kami
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-gray-200 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Jadwalkan konsultasi dengan tim hukum berpengalaman kami untuk mendiskusikan kasus Anda.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <motion.div 
                className="bg-dark/90 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg border border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif mb-4 text-secondary">Kantor Jakarta</h3>
                <div className="space-y-2">
                  <p className="text-gray-100 font-serif">Jalan Utama 123</p>
                  <p className="text-gray-100 font-serif">Jakarta, Indonesia 12345</p>
                  <p className="text-gray-100 font-serif">Telepon: +62 21 1234 5678</p>
                  <p className="text-gray-100 font-serif">Email: kontak@lvlawfirm.com</p>
                </div>
              </motion.div>
              <motion.div 
                className="bg-dark/90 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg border border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif mb-4 text-secondary">Jam Operasional</h3>
                <div className="space-y-2">
                  <p className="text-gray-100 font-serif">Senin - Jumat</p>
                  <p className="text-gray-100 font-serif">09:00 - 18:00 WIB</p>
                  <p className="text-gray-100 font-serif">Sabtu</p>
                  <p className="text-gray-100 font-serif">09:00 - 13:00 WIB</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 