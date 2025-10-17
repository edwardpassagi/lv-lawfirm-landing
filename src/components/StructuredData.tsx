export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Lux Visionem & Partners',
    alternateName: ['LV Law', 'Lux Vision', 'LV Lawfirm'],
    url: 'https://lvlaw.id',
    logo: 'https://lvlaw.id/images/icon.png',
    image: 'https://lvlaw.id/images/icon.png',
    description: 'Kantor hukum terkemuka di Jakarta dengan keahlian dalam hukum korporasi, litigasi, dan konsultasi bisnis berbasis teknologi informasi.',
    telephone: '+62 812 5888 6362',
    email: 'info@lvlaw.id',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jalan Rusa Raya Blok D1/27 Nuri Bintaro Jaya',
      addressLocality: 'Tangerang Selatan',
      addressRegion: 'Banten',
      postalCode: '15412',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.2708,
      longitude: 106.7358,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Legal Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate Law',
            description: 'Expert guidance in business law, mergers & acquisitions, and corporate governance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Litigation',
            description: 'Strong representation in court proceedings and dispute resolution.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Consulting',
            description: 'IT-based business model development and consulting services.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fintech Regulation',
            description: 'Specialized expertise in financial technology regulation and compliance.',
          },
        },
      ],
    },
    sameAs: [
      'https://lvlaw.id',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
