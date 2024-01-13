import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], style: 'normal', weight: "700" })

export const metadata: Metadata = {
  title: 'Color Mixer',
  description: 'A Web Application Color Mixer which you can use to mix color and see effects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
