import ContactClient from "./contact-client"

export const metadata = {
  title: 'Contact Deploymo | Request a Deployment Quote',
  description: 'Get in touch with Deploymo to discuss your field marketing, promoter, event staffing or brand activation project. Offices in Khandwa, MP and Andheri West, Mumbai.',
  openGraph: {
    title: 'Contact Deploymo | Request a Deployment Quote',
    description: 'Get in touch with Deploymo to discuss your field marketing, promoter, event staffing or brand activation project. Offices in Khandwa, MP and Andheri West, Mumbai.',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
