import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Roshna Shrestha - Computer Engineer & Full Stack Developer',
  description: 'Professional portfolio of Roshna Shrestha - Computer Engineering graduate with expertise in MERN Stack, AI/ML, and Blockchain',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
