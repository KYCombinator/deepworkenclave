import Hero from '@/components/hero'

export const metadata = {
  openGraph: {
    images: ['/images/DeepWorkEnclave.jpg'],
    description: '4 startups, free rent, free office space, free food, for 1 year. No equity, No debt, no strings attached.',
  },
}

export default function Home() {
  return <Hero />
}