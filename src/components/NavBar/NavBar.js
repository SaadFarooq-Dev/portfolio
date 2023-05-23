import React, { useState } from 'react'
import { motion } from 'framer-motion'

import CustomLink from '../CustomLink'
import Logo from '../Logo'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from '../Icons'
import useThemeSwitcher from '../hooks'
import CustomLinkMobile from '../CustomLinkMobile'
import NavBarMobile from './NavBarMobile'
import NavBarWeb from './NavBarWeb'

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative' >
      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm scroll-my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
      <NavBarWeb mode={mode} setMode={setMode} />

      {
        isOpen ?
          <NavBarMobile handleClick={handleClick} mode={mode} setMode={setMode} />
          : null
      }

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
