'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/translations'

interface DisclaimerModalProps {
  isOpen: boolean
  onClose: () => void
  onContinue: () => void
  continueButtonText?: string
}

export default function DisclaimerModal({ isOpen, onClose, onContinue, continueButtonText }: DisclaimerModalProps) {
  const { language } = useLanguage()
  const defaultContinueText = translations.disclaimer[language].continue

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
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
              className="bg-dark border border-primary/30 rounded-lg shadow-2xl max-w-md w-full mx-4 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif text-white mb-4">
                  {translations.disclaimer[language].title}
                </h3>

                <p className="text-gray-300 font-serif mb-6 leading-relaxed">
                  {translations.disclaimer[language].content}
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 rounded-md transition-colors font-serif"
                  >
                    {translations.disclaimer[language].cancel}
                  </button>
                  <button
                    onClick={onContinue}
                    className="btn btn-secondary font-serif flex-1"
                  >
                    {continueButtonText || defaultContinueText}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}