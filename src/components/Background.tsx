'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Background() {
  const pathname = usePathname()
  const basePath = process.env.NODE_ENV === 'development' ? '' : '/lv-lawfirm-landing'
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Background Image */}
      <Image
        src={`${basePath}/images/background-img.avif`}
        alt="Background"
        fill
        priority
        className="object-cover object-center"
        quality={100}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/60" />
    </div>
  )
} 