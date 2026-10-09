import ContactClient from "./contact-client"

export const metadata = {
  title: 'Contact Deploymo | Promotional Staffing Quote Mumbai',
  description: 'Request a promotional staffing quote from Deploymo — event staff, promoters & hostesses for Mumbai, Navi Mumbai & Thane. Reply within 24 hours.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Deploymo | Promotional Staffing Quote Mumbai',
    description: 'Request a promotional staffing quote from Deploymo — event staff, promoters & hostesses for Mumbai, Navi Mumbai & Thane.',
    url: 'https://www.deploymo.com/contact',
    images: [{ url: 'https://www.deploymo.com/images/home-hero.jpeg', width: 1200, height: 630, alt: 'Contact Deploymo — promotional staffing Mumbai' }],
  },
}

export default function ContactPage() {
  return <ContactClient />
}
