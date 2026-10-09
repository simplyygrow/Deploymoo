import AboutClient from "./about-client"

export const metadata = {
  title: 'About Deploymo | Promotional Staffing Experts in Mumbai',
  description: "Deploymo is Mumbai's B2B promotional staffing agency — trained promoters, hostesses & event staff deployed across Mumbai, Navi Mumbai & Thane.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Deploymo | Promotional Staffing Experts in Mumbai',
    description: "Deploymo is Mumbai's B2B promotional staffing agency — trained promoters, hostesses & event staff deployed across Mumbai, Navi Mumbai & Thane.",
    url: 'https://www.deploymo.com/about',
    images: [{ url: 'https://www.deploymo.com/images/home-hero.jpeg', width: 1200, height: 630, alt: 'About Deploymo — promotional staffing Mumbai' }],
  },
}

export default function AboutPage() {
  return <AboutClient />
}
