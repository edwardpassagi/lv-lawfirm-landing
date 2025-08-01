import { Language } from '@/context/LanguageContext'

type TranslationSection<T> = {
  [K in Language]: T
}

interface NavTranslations {
  home: string
  services: string
  contact: string
  contactUs: string
  language: string
}

interface HeroTranslations {
  title: string
  subtitle: string
  cta: string
}

interface ServiceTranslations {
  title: string
  description: string
}

interface ServicesTranslations {
  title: string
  corporate: ServiceTranslations
  litigation: ServiceTranslations
  family: ServiceTranslations
  international: ServiceTranslations
}

interface ContactTranslations {
  title: string
  description: string
  office: string
  hours: string
  weekdays: string
  saturday: string
  telephone: string
}

interface FooterTranslations {
  copyright: string
}

interface Attorney {
  name: string
  position: string
}

interface AttorneysTranslations {
  title: string
  attorneys: Attorney[]
}

export const attorneys = [
  { name: 'Hendrikus Passagi, S.Sos., S.H., M.H., M.Sc., C.Med.', position: 'Partner' },
  { name: 'Zhafran Yafi, S.H.', position: 'Partner' },
  { name: 'Jonathan Hendson Passagi, S.H., LL.M., J.D.', position: 'Middle Associate' },
  { name: 'Fajar Wahyudi Passagi, S.H.', position: 'Associate' },
  { name: 'Framana Umsini Wangsawijaya, S.H.', position: 'Associate' },
]

export const translations = {
  nav: {
    id: {
      home: 'Beranda',
      services: 'Layanan',
      contact: 'Kontak',
      contactUs: 'Hubungi Kami',
      language: 'EN'
    },
    en: {
      home: 'Home',
      services: 'Services',
      contact: 'Contact',
      contactUs: 'Contact Us',
      language: 'ID'
    }
  } as TranslationSection<NavTranslations>,
  
  hero: {
    id: {
      title: 'Lux Visionem & Partners',
      subtitle: 'Keunggulan Layanan Hukum di Indonesia',
      cta: 'Jadwalkan Konsultasi'
    },
    en: {
      title: 'Lux Visionem & Partners',
      subtitle: 'Legal Excellence in Indonesia',
      cta: 'Schedule Consultation'
    }
  } as TranslationSection<HeroTranslations>,
  
  services: {
    id: {
      title: 'Layanan Kami',
      corporate: {
        title: 'Hukum Korporasi',
        description: 'Panduan ahli dalam hukum bisnis, merger & akuisisi, dan tata kelola perusahaan.'
      },
      litigation: {
        title: 'Litigasi',
        description: 'Representasi kuat dalam proses pengadilan dan penyelesaian sengketa.'
      },
      family: {
        title: 'Hukum Keluarga',
        description: 'Dukungan penuh untuk masalah keluarga, perceraian, dan kasus hak asuh.'
      },
      international: {
        title: 'Hukum Internasional',
        description: 'Keahlian hukum lintas batas untuk operasi bisnis global.'
      }
    },
    en: {
      title: 'Our Services',
      corporate: {
        title: 'Corporate Law',
        description: 'Expert guidance in business law, mergers & acquisitions, and corporate governance.'
      },
      litigation: {
        title: 'Litigation',
        description: 'Strong representation in court proceedings and dispute resolution.'
      },
      family: {
        title: 'Family Law',
        description: 'Full support for family matters, divorce, and custody cases.'
      },
      international: {
        title: 'International Law',
        description: 'Cross-border legal expertise for global business operations.'
      }
    }
  } as TranslationSection<ServicesTranslations>,
  
  contact: {
    id: {
      title: 'Hubungi Kami',
      description: 'Jadwalkan konsultasi dengan tim hukum berpengalaman kami untuk mendiskusikan kasus Anda.',
      office: 'Alamat Kantor',
      hours: 'Jam Operasional',
      weekdays: 'Senin - Jumat',
      saturday: 'Sabtu',
      telephone: 'Telepon: +62 812 5888 6362'
    },
    en: {
      title: 'Contact Us',
      description: 'Schedule a consultation with our experienced legal team to discuss your case.',
      office: 'Office Address',
      hours: 'Operating Hours',
      weekdays: 'Monday - Friday',
      saturday: 'Saturday',
      telephone: 'Telephone: +62 812 5888 6362'
    }
  } as TranslationSection<ContactTranslations>,

  footer: {
    id: {
      copyright: '© 2025 Lux Visionem & Partners. Hak cipta dilindungi undang-undang.'
    },
    en: {
      copyright: '© 2025 Lux Visionem & Partners. All rights reserved.'
    }
  } as TranslationSection<FooterTranslations>,

  attorneys: {
    id: {
      title: 'Para Pengacara Kami',
    },
    en: {
      title: 'Our Attorneys',
    }
  } as TranslationSection<{ title: string }>
} 