import ContactClient from "./contact-client"

export const metadata = {
  title: 'Contact Deploymo | Request a Deployment Quote for Promotional Staff',
  description: 'Get in touch with Deploymo to discuss your promotional manpower, event staffing, or brand activation project in Mumbai, Navi Mumbai, and Thane. Request a free quote today.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Deploymo | Request a Deployment Quote',
    description: 'Get in touch with Deploymo to discuss your field marketing, promoter, event staffing or brand activation project in Mumbai.',
    url: 'https://deploymo.com/contact',
    images: [{ url: 'https://deploymo.com/images/home-hero.jpeg', width: 1200, height: 630, alt: 'Contact Deploymo' }],
  },
}

export default function ContactPage() {
  return <ContactClient />
}
