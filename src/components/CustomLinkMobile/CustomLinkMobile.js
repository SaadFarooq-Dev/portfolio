import React from 'react'
import { useRouter } from 'next/router'

const CustomLinkMobile = ({ href, title, className = '', toggle }) => {
  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button onClick={handleClick} href={href} className={`${className} relative group text-light dark:text-dark my-2`}>
      {title}
      <span className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} `} >
        &nbsp;
      </span>
    </button>
  )
}

export default CustomLinkMobile
