import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Providers from "@/components/Providers";
import Sidebar from "@/components/Sidebar";
import DrawerButton from "@/components/DrawerButton";
import { FaAngleUp } from "react-icons/fa";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
                <main className="flex-grow">{children}</main>
                <footer className="mt-14 w-full rounded-lg shadow flex flex-col items-center sm:flex-row sm:justify-between p-4 sm:p-6">
                  <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
                    &copy; 2024 All rights reserved.
                  </p>
                  <div className="flex justify-center items-center space-x-4">
                    <a
                      href="#top"
                      className="btn btn-circle hover:invert"
                      id="top-link"
                      aria-label="Go to top"
                    >
                      <FaAngleUp size={24} />
                    </a>
                  </div>
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
  );
}
