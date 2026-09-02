import ServicesClient from "./services-client"

export const metadata = {
  title: 'Field Marketing, Promoter, Event & Brand Activation Services | Deploymo',
  description: 'Managed on-ground teams for field marketing, promoter staffing, event staffing, brand activation, retail audits and field surveys across Mumbai, Navi Mumbai, and Thane.',
  keywords: ['field marketing Mumbai', 'promoter staffing Mumbai', 'event staffing services', 'brand activation agency Mumbai', 'retail audit staff', 'promotional manpower services'],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Field Marketing, Promoter, Event & Brand Activation Services | Deploymo',
    description: 'Managed on-ground teams for field marketing, promoter staffing, event staffing, brand activation, retail audits and field surveys across Mumbai, Navi Mumbai, and Thane.',
    url: 'https://deploymo.com/services',
    images: [{ url: 'https://deploymo.com/images/home-hero.jpeg', width: 1200, height: 630, alt: 'Deploymo Services' }],
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}
