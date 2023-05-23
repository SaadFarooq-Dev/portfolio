import React from 'react'
import CustomLink from '../CustomLink'
import { motion } from 'framer-motion'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from '../Icons'

const NavBarWeb = ({ mode, setMode }) => {
  return (
    <div className='w-full flex justify-between items-center lg:hidden'>
      <nav>
        <CustomLink href={'/'} title={'Home'} className='mr-4' />
        <CustomLink href={'/about'} title={'About'} className='mx-4' />
        <CustomLink href={'/projects'} title={'Projects'} className='mx-4' />
      </nav>
      <nav className='flex items-center justify-center flex-wrap [&>a]:w-6'>
        <motion.a href={'/'} target={'_blank'} className='mr-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} > <TwitterIcon /></motion.a>
        <motion.a href={'/'} target={'_blank'} className='mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><GithubIcon /></motion.a>
        <motion.a href={'/'} target={'_blank'} className='mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><LinkedInIcon /></motion.a>
        <motion.a href={'/'} target={'_blank'} className='mx-3 bg-light rounded-full' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><PinterestIcon /></motion.a>
        <motion.a href={'/'} target={'_blank'} className='ml-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><DribbbleIcon /></motion.a>
        <button className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`} onClick={() => setMode(mode === 'light' ? "dark" : "light")}>
          {
            mode === 'dark' ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
          }
        </button>
      </nav>
    </div>
  )
}

export default NavBarWeb
