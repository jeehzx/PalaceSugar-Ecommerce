import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { SearchBox } from './SearchBox'
import { LuLollipop } from 'react-icons/lu'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <div className="text-pink-400 p-4">
              <LuLollipop size={26} />
            </div>
            <a href="/" className="text-xl font-bold hover:text-2xl">
              Palace
              <span className="text-pink-400 text-sm lowercase">sugar</span>
            </a>
          </div>
          <Menu />
        </div>
        <div className="bg-base-300 block md:hidden text-center pb-3">
          <SearchBox />
        </div>
      </nav>
    </header>
  )
}

export default Header
