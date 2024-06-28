import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header/header'
import Providers from '@/components/Providers'
import Sidebar from '@/components/Sidebar'
import DrawerButton from '@/components/DrawerButton'
import { FaAngleUp } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="drawer">
            <DrawerButton />
            <div className="drawer-content">
              <div className="min-h-screen flex flex-col">
                <Header />
                {children}
                <footer className="footer footer-center p-4 bg-base-300 text-base-content flex justify-between">
                  <p className=" align-center ">
                    Copyright © 2024 - All right reserved by{' '}
                    {process.env.NEXT_PUBLIC_APP_NAME}
                  </p>
                  <a
                    href="#top"
                    className="btn btn-circle bottom circle active hover:invert"
                    id="top-link"
                    aria-label="Go to top"
                  >
                    <FaAngleUp size={24} />
                  </a>
                </footer>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
