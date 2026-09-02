import AboutClient from "./about-client"

export const metadata = {
  title: 'About Deploymo | Managed Field Execution Partner India',
  description: 'Deploymo is a managed field-execution company deploying on-ground teams for field marketing, events, promotions and retail projects across Mumbai, Navi Mumbai, and Thane — a B2B promotional manpower specialist, not a recruitment agency.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Deploymo | Managed Field Execution Partner India',
    description: 'Deploymo is a managed field-execution company deploying on-ground teams for field marketing, events, promotions and retail projects across India — not a recruitment agency.',
    url: 'https://deploymo.com/about',
    images: [{ url: 'https://deploymo.com/images/home-hero.jpeg', width: 1200, height: 630, alt: 'About Deploymo' }],
  },
}

export default function AboutPage() {
  return <AboutClient />
}
