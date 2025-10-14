'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import Image from 'next/image'

interface AttorneyModalProps {
  isOpen: boolean
  onClose: () => void
  attorney: {
    name: string
    position: string
    photo: string
    bio: {
      id: string
      en: string
    }
  } | null
  language: 'id' | 'en'
}

export default function AttorneyModal({ isOpen, onClose, attorney, language }: AttorneyModalProps) {
  if (!attorney) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-dark border border-primary/30 rounded-lg shadow-2xl max-w-4xl w-full mx-4 my-8 relative h-[90vh] md:h-[700px] flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white transition-colors bg-dark/80 rounded-full p-2"
                aria-label="Close modal"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="flex flex-col md:flex-row flex-1 overflow-hidden rounded-lg">
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-64 md:h-full flex-shrink-0 md:rounded-l-lg overflow-hidden">
                  <Image
                    src={attorney.photo}
                    alt={attorney.name}
                    fill
                    className="object-cover object-[center_10%]"
                  />
                </div>

                {/* Text Section - Scrollable */}
                <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto flex-1 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
                  <h2 className="text-3xl font-serif text-white mb-3">
                    {attorney.name}
                  </h2>
                  <p className="text-gray-400 text-lg font-serif mb-6">
                    {attorney.position}
                  </p>
                  <p className="text-gray-300 font-serif leading-relaxed">
                    {attorney.bio[language]}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
