import ServicesClient from "./services-client"

export const metadata = {
  title: 'Event Staffing & Promotional Services Mumbai | Deploymo',
  description: 'Hire trained brand promoters, event hostesses, exhibition & audit staff for activations across Mumbai, Navi Mumbai & Thane. 15 core services.',
  keywords: ['field marketing Mumbai', 'promoter staffing Mumbai', 'event staffing services', 'brand activation agency Mumbai', 'retail audit staff', 'promotional manpower services'],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Event Staffing & Promotional Services Mumbai | Deploymo',
    description: 'Hire trained brand promoters, event hostesses, exhibition & audit staff for activations across Mumbai, Navi Mumbai & Thane.',
    url: 'https://www.deploymo.com/services',
    images: [{ url: 'https://www.deploymo.com/images/home-hero.jpeg', width: 1200, height: 630, alt: 'Deploymo services — promotional staffing Mumbai' }],
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}
