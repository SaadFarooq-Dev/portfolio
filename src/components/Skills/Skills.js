import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light'
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name={'HTML'} x={'-25vw'} y={'2vw'} />
        <Skill name={'CSS'} x={'-5vw'} y={'-10vw'} />
        <Skill name={'JavaScript'} x={'20vw'} y={'6vw'} />
        <Skill name={'ReactJS'} x={'0vw'} y={'12vw'} />
        <Skill name={'NextJS'} x={'-20vw'} y={'-15vw'} />
        <Skill name={'NodeJS'} x={'15vw'} y={'-12vw'} />
        <Skill name={'Figma'} x={'32vw'} y={'-5vw'} />
        <Skill name={'ExpressJS'} x={'0vw'} y={'-20vw'} />
        <Skill name={'MongoDB'} x={'-25vw'} y={'18vw'} />
        <Skill name={'FeathersJS'} x={'18vw'} y={'18vw'} />

      </div>
    </>
  )
}

export default Skills
