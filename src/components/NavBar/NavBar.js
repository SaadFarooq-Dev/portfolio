import React from 'react'
import { motion } from 'framer-motion'

import CustomLink from '../CustomLink'
import Logo from '../Logo'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from '../Icons'
import useThemeSwitcher from '../hooks'

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher()

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light' >
      <nav>
        <CustomLink href={'/'} title={'Home'} className='mr-4' />
        <CustomLink href={'/about'} title={'About'} className='mx-4' />
        <CustomLink href={'/projects'} title={'Projects'} className='mx-4' />
        <CustomLink href={'/articles'} title={'Articles'} className='mx-4' />
      </nav>
      <nav className='flex items-center justify-center flex-wrap [&>a]:w-6'>
        <motion.a href={'/'} target={'_blank'} className='mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} > <TwitterIcon /></motion.a>
        <motion.a href={'/'} target={'_blank'} className='mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><GithubIcon /></motion.a>
        <motion.a href={'/'} target={'_blank'} className='mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><LinkedInIcon /></motion.a>
        <motion.a href={'/'} target={'_blank'} className='mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><PinterestIcon /></motion.a>
        <motion.a href={'/'} target={'_blank'} className='ml-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><DribbbleIcon /></motion.a>
        <button className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`} onClick={() => setMode(mode === 'light' ? "dark" : "light")}>
          {
            mode === 'dark' ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
          }
        </button>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
