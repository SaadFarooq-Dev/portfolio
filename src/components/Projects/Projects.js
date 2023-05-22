import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../Icons'

const Projects = ({ type, title, image, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg' >
        <Image src={image} alt={title} className='w-full h-auto' />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl'>
          {type}
        </span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold' >{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between' >
          <Link href={link} target='_blank' className='text-lg font-semibold underline underline-offset-1'> Visit</Link>
          <Link href={github} target='_blank' className='w-8'> <GithubIcon /> </Link>
        </div>
      </div>
    </article>
  )
}

export default Projects
