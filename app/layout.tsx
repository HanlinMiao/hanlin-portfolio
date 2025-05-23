import './globals.css';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hanlin | Portfolio',
  description: 'Hanlin is a full-stack software engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="-z-10 bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="-z-10 bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header/>
            {children}
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
