import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { TbCandy } from 'react-icons/tb'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <div className="text-pink-700 p-1 my-2 ml-2">
              <TbCandy size={30} className="cursor-pointer hover:text-white" />
            </div>
            <a href="/" className="text-xl font-bold hover:text-2xl">
              Palace
              <span className="text-pink-700 text-sm lowercase">sugar</span>
            </a>
          </div>
          <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header
