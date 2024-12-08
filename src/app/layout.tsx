import { Cabin } from 'next/font/google'
import './globals.css'

const cabin = Cabin({ subsets: ['latin'] })

export const metadata = {
  title: 'Deep Work Enclave',
  description: 'A place for focused, deep work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cabin.className}>
      <body>{children}</body>
    </html>
  )
}

