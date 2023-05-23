import { motion } from 'framer-motion'
import React from 'react'
import CustomLinkMobile from '../CustomLinkMobile'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from '../Icons'

const NavBarMobile = ({ handleClick, mode, setMode }) => {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
        x: '-50%',
        y: '-50%',
      }}
      animate={{
        scale: 1,
        opacity: 1
      }}
      transition={{ duration: 0.2 }}

      className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32' >
      <nav className='flex items-center flex-col justify-center'>
        <CustomLinkMobile href={'/'} title={'Home'} className='' toggle={handleClick} />
        <CustomLinkMobile href={'/about'} title={'About'} className='' toggle={handleClick} />
        <CustomLinkMobile href={'/projects'} title={'Projects'} className='' toggle={handleClick} />
      </nav>
      <nav className='flex items-center justify-center flex-wrap mt-2  [&>a]:w-6'>
        <motion.a href={'/'} target={'_blank'} className='mr-3 sm:mx-1' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} > <TwitterIcon /></motion.a>
        <motion.a href={'/'} target={'_blank'} className='mx-3 bg-light dark:bg-dark rounded-full sm:mx-1' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><GithubIcon /></motion.a>
        <motion.a href={'/'} target={'_blank'} className='mx-3 sm:mx-1' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><LinkedInIcon /></motion.a>
        <motion.a href={'/'} target={'_blank'} className='mx-3 sm:mx-1 bg-light rounded-full' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><PinterestIcon /></motion.a>
        <motion.a href={'/'} target={'_blank'} className='ml-3 sm:mx-1' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><DribbbleIcon /></motion.a>
        <button className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`} onClick={() => setMode(mode === 'light' ? "dark" : "light")}>
          {
            mode === 'dark' ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
          }
        </button>
      </nav>
    </motion.div>
  )
}

export default NavBarMobile
