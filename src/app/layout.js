import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import AuthWrapper from './components/AuthWrapper'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Bookify App | Book a Room',
  description: 'Book a meeting or conference room for your team',
}

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
      <html lang='en'>
        <body className={inter.className}>
          <Header />
          <main className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>{children}</main>
          <Toaster />
          <Footer />
        </body>
      </html>
    </AuthWrapper>
  )
}
