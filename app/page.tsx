import HomeClient from "./home-client"

export const metadata = {
  title: 'Promotional Staffing Mumbai | Deploymo Event Staffing',
  description: 'Deploymo deploys 10K+ trained brand promoters, sales promoters & event hostesses across Mumbai, Navi Mumbai & Thane. Request a quote today.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Promotional Staffing Mumbai | Deploymo Event Staffing',
    description: 'Deploymo deploys 10K+ trained brand promoters, sales promoters & event hostesses across Mumbai, Navi Mumbai & Thane.',
    url: 'https://www.deploymo.com',
    siteName: 'Deploymo',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://www.deploymo.com/images/home-hero.jpeg', width: 1200, height: 630, alt: 'Deploymo brand promoters Mumbai' }],
  },
}

export default function HomePage() {
  return <HomeClient />
}
