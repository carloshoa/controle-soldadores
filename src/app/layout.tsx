'use client'
import { Inter } from 'next/font/google'
// import * as google from '@next/font/google'
import Provider from './(componentes)/Provider'
import './globals.css'


// const roboto = google.Roboto({ subsets: ['latin'] })

const inter = Inter({ subsets: ['greek'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Provider >
                <body className={inter.className}>{children}</body>
            </Provider>
        </html>
    )
}
