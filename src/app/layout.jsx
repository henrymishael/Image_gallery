import './globals.css'
import { Cabin } from 'next/font/google'
import { League_Gothic } from 'next/font/google'
import { Nunito } from 'next/font/google'


export const cabin = Cabin({ subsets: ['latin'] })
export const gothic = League_Gothic({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, font }) {
    const selectedFont = font === 'cabin' ? cabin : gothic;
  return (
    <html lang="en">
      <body className={`${selectedFont.className} `}>{children}</body>
    </html>
  )
}
