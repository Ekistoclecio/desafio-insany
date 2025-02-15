import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  preload: true
})

export const metadata: Metadata = {
  title: 'Desafio Front-End Insany'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${archivo.variable}`}>{children}</body>
    </html>
  )
}
