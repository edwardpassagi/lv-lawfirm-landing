import { Language } from '@/context/LanguageContext'

type TranslationSection<T> = {
  [K in Language]: T
}

interface NavTranslations {
  home: string
  services: string
  team: string
  about: string
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

interface AboutTranslations {
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

interface DisclaimerTranslations {
  title: string
  content: string
  cancel: string
  continue: string
  continueContact: string
}

interface Attorney {
  name: string
  position: string
  photo: string
  photoCard: string
  bio: string
  photoPosition?: string
}

interface AttorneysTranslations {
  title: string
  attorneys: Attorney[]
}

export const attorneys = [
  {
    name: 'Dr. Hendrikus Passagi, S.Sos., S.H., M.H., M.Sc., CFTP., CIMBA., C.Med',
    position: 'Of Counsel & Business Consultant',
    photo: '/images/team/hendrikus.jpeg',
    photoCard: '/images/team/hendrikus-card.jpeg',
    bio: {
      en: 'Dr. Hendrikus holds a Doctor degree in Finance and Master of Science in Finance, complemented by his law degree and extensive certifications. With distinguished experience as former Director of Financial Technology Licensing and Supervision at the Financial Services Authority (OJK), he brings exceptional expertise in fintech regulation, corporate law, and business strategy. He specializes in financial technology, corporate governance, regulatory compliance, and serves as independent commissioner for various corporations.',
      id: 'Dr. Hendrikus memegang gelar Doktor di bidang Keuangan dan Master of Science in Finance, dilengkapi dengan gelar hukum dan berbagai sertifikasi profesional. Dengan pengalaman terkemuka sebagai mantan Direktur Perizinan dan Pengawasan Teknologi Finansial di Otoritas Jasa Keuangan (OJK), beliau membawa keahlian luar biasa dalam regulasi fintech, hukum korporasi, dan strategi bisnis. Beliau berspesialisasi dalam teknologi finansial, tata kelola perusahaan, kepatuhan regulasi, dan menjabat sebagai komisaris independen untuk berbagai korporasi.'

    }
  },
  {
    name: 'Zhafran Yafi, S.H.',
    position: 'Partner',
    photo: '/images/team/zhafran.jpeg',
    photoCard: '/images/team/zhafran-card.jpeg',
    bio: {
      en: 'A distinguished Partner at the firm, Zhafran brings extensive expertise in civil litigation, commercial disputes, and corporate legal matters. His practice encompasses contract law, business transactions, and dispute resolution. With a strategic approach to complex legal challenges, he has successfully represented clients in high-stakes litigation and provides comprehensive legal counsel to businesses across various industries.',
      id: 'Sebagai Partner terkemuka di firma ini, Zhafran membawa keahlian luas dalam litigasi perdata, sengketa komersial, dan urusan hukum korporasi. Praktiknya mencakup hukum kontrak, transaksi bisnis, dan penyelesaian sengketa. Dengan pendekatan strategis terhadap tantangan hukum yang kompleks, beliau telah berhasil mewakili klien dalam litigasi berisiko tinggi dan memberikan konsultasi hukum komprehensif kepada bisnis di berbagai industri.'
    }
  },
  {
    name: 'Jonathan Hendson Passagi, S.H., LL.M., J.D.',
    position: 'Middle Associate',
    photo: '/images/team/jonathan.jpeg',
    photoCard: '/images/team/jonathan-card.jpeg',
    bio: {
      en: 'Jonathan holds advanced legal degrees including an LL.M. and J.D., reflecting his deep commitment to legal excellence. He specializes in technology law, blockchain regulation, and digital innovation, having contributed to academic research on governing blockchain-based tokens in Indonesia. His practice focuses on international law, contract negotiation, technology transactions, and providing forward-thinking legal solutions for clients navigating the intersection of law and technology.',
      id: 'Jonathan memegang gelar hukum lanjutan termasuk LL.M. dan J.D., mencerminkan komitmen mendalam terhadap keunggulan hukum. Beliau berspesialisasi dalam hukum teknologi, regulasi blockchain, dan inovasi digital, telah berkontribusi pada riset akademis tentang tata kelola token berbasis blockchain di Indonesia. Praktiknya berfokus pada hukum internasional, negosiasi kontrak, transaksi teknologi, dan memberikan solusi hukum progresif bagi klien yang menavigasi persimpangan antara hukum dan teknologi.'
    }
  },
  {
    name: 'Fajar Wahyudi Passagi, S.H.',
    position: 'Associate',
    photo: '/images/team/fajar.jpeg',
    photoCard: '/images/team/fajar-card.jpeg',
    bio: {
      en: 'Fajar is a dedicated Associate specializing in civil litigation, family law, and general legal practice. He provides meticulous legal research, drafting, and client representation with unwavering attention to detail. His practice includes handling divorce proceedings, custody matters, property disputes, and various civil litigation cases. Fajar is committed to delivering personalized legal services and achieving favorable outcomes for his clients.',
      id: 'Fajar adalah Associate yang berdedikasi dengan spesialisasi dalam litigasi perdata, hukum keluarga, dan praktik hukum umum. Beliau memberikan riset hukum yang teliti, penyusunan dokumen, dan representasi klien dengan perhatian detail yang konsisten. Praktiknya mencakup penanganan proses perceraian, perkara hak asuh, sengketa properti, dan berbagai kasus litigasi perdata. Fajar berkomitmen untuk memberikan layanan hukum yang personal dan mencapai hasil yang menguntungkan bagi klien.'
    }
  },
  {
    name: 'Framana Umsini Passagi, S.H.',
    position: 'Associate',
    photo: '/images/team/framana.jpeg',
    photoCard: '/images/team/framana-card.jpeg',
    bio: {
      en: 'Framana specializes in corporate compliance, regulatory affairs, and business law documentation. She assists clients with corporate governance matters, regulatory submissions, and ensures adherence to Indonesian business regulations. Her practice includes drafting and reviewing corporate documents, handling compliance audits, and providing legal advisory on regulatory requirements. Framana is dedicated to helping businesses maintain legal compliance while achieving their strategic objectives.',
      id: 'Framana berspesialisasi dalam kepatuhan korporasi, urusan regulasi, dan dokumentasi hukum bisnis. Beliau membantu klien dengan masalah tata kelola perusahaan, pengajuan regulasi, dan memastikan kepatuhan terhadap regulasi bisnis Indonesia. Praktiknya mencakup penyusunan dan peninjauan dokumen korporasi, penanganan audit kepatuhan, dan pemberian konsultasi hukum tentang persyaratan regulasi. Framana berdedikasi untuk membantu bisnis mempertahankan kepatuhan hukum sambil mencapai tujuan strategis mereka.'
    }
  },
  {
    name: 'Edward Passagi, AES, B.Sc, MCS',
    position: 'Tech Consultant',
    photo: '/images/team/edward.jpeg',
    photoCard: '/images/team/edward-card.jpg',
    bio: {
      en: 'Edward is a technology consultant specializing in the intersection of law and digital innovation. With academic background in Computer Science and professional certifications, he provides expert consulting on legal technology implementation, digital transformation strategies, cybersecurity compliance, and technology infrastructure for modern law practices. His unique expertise helps law firms and corporate clients leverage technology to enhance efficiency, security, and service delivery.',
      id: 'Edward adalah konsultan teknologi yang berspesialisasi dalam persimpangan antara hukum dan inovasi digital. Dengan latar belakang akademis di Ilmu Komputer dan sertifikasi profesional, beliau memberikan konsultasi ahli tentang implementasi teknologi hukum, strategi transformasi digital, kepatuhan keamanan siber, dan infrastruktur teknologi untuk praktik hukum modern. Keahlian unik beliau membantu firma hukum dan klien korporasi memanfaatkan teknologi untuk meningkatkan efisiensi, keamanan, dan penyampaian layanan.'
    }
  },
]

export const translations = {
  nav: {
    id: {
      home: 'Beranda',
      services: 'Layanan',
      team: 'Tim Kami',
      about: 'Tentang Kami',
      contactUs: 'Hubungi Kami',
      language: 'EN'
    },
    en: {
      home: 'Home',
      services: 'Services',
      team: 'Our Team',
      about: 'About Us',
      contactUs: 'Contact Us',
      language: 'ID'
    }
  } as TranslationSection<NavTranslations>,

  hero: {
    id: {
      title: 'Lux Visionem & Partners',
      subtitle: 'Pengacara • Pengurus & Kurator Kepailitan • Konsultan Bisnis & Pajak',
      cta: 'Jadwalkan Konsultasi'
    },
    en: {
      title: 'Lux Visionem & Partners',
      subtitle: 'Attorneys • Receivers & Administrators for Bankruptcy • Business & Tax Consultants',
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

  about: {
    id: {
      title: 'Tentang Kami',
      description: 'Firma hukum terkemuka dengan keahlian dalam hukum korporasi, litigasi, dan konsultasi bisnis berbasis teknologi informasi. Melayani klien lokal dan internasional dengan integritas dan profesionalisme.',
      office: 'Alamat Kantor',
      hours: 'Jam Operasional',
      weekdays: 'Senin - Jumat',
      saturday: 'Sabtu',
      telephone: 'Telepon: +62 812 5888 6362'
    },
    en: {
      title: 'About Us',
      description: 'A premier law firm specializing in corporate law, litigation, and IT-based business consulting. Serving local and international clients with integrity and professionalism.',
      office: 'Office Address',
      hours: 'Operating Hours',
      weekdays: 'Monday - Friday',
      saturday: 'Saturday',
      telephone: 'Telephone: +62 812 5888 6362'
    }
  } as TranslationSection<AboutTranslations>,

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
      title: 'Tim Kami',
    },
    en: {
      title: 'Our Team',
    }
  } as TranslationSection<{ title: string }>,

  disclaimer: {
    id: {
      title: 'Pemberitahuan Penting',
      content: 'Harap jangan sertakan informasi rahasia atau sensitif dalam formulir kontak, pesan teks, atau pesan suara. Formulir kontak mengirim informasi melalui email yang tidak terenkripsi dan tidak aman. Mengirimkan formulir kontak, mengirim pesan teks, melakukan panggilan telepon, atau meninggalkan pesan suara tidak menciptakan hubungan pengacara-klien.',
      cancel: 'Batal',
      continue: 'Lanjutkan Penjadwalan',
      continueContact: 'Lanjutkan ke WhatsApp'
    },
    en: {
      title: 'Important Notice',
      content: 'Please do not include any confidential or sensitive information in a contact form, text message, or voicemail. The contact form sends information by non-encrypted email, which is not secure. Submitting a contact form, sending a text message, making a phone call, or leaving a voicemail does not create an attorney-client relationship.',
      cancel: 'Cancel',
      continue: 'Continue Scheduling',
      continueContact: 'Continue to WhatsApp'
    }
  } as TranslationSection<DisclaimerTranslations>
} 