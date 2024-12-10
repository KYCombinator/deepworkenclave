import Hero from '@/components/hero'

export const metadata = {
  title: 'KY Combinator',
  description: '4 startups, free rent, free office space, free food, for 1 year. No equity, No debt, no strings attached.',
  openGraph: {
    title: 'KY Combinator',
    description: '4 startups, free rent, free office space, free food, for 1 year. No equity, No debt, no strings attached.',
    images: [{
      url: 'http://www.deepworkenclave.com/images/deepworkenclave.jpg',
      width: 1200,
      height: 630,
      alt: 'KY Combinator'
    }],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return <Hero />
}