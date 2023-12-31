import './globals.css'
import { Cabin } from 'next/font/google'
import { League_Gothic } from 'next/font/google'



export const cabin = Cabin({ subsets: ['latin'] })
export const gothic = League_Gothic({ subsets: ['latin'] })

export const metadata = {
  title: 'Cover|Onyeka',
  description: 'By Henry Mishael',
}

export default function RootLayout({ children }) {
    
  return (
    <html lang="en">
      <body className={`${gothic.className} `}>{children}</body>
    </html>
  )
}
