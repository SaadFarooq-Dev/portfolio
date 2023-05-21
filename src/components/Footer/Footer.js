import React from 'react'
import Link from 'next/link'

import Layout from '../Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg '>
      <Layout className='py-8 flex items-center justify-between '>
        <span >{new Date().getFullYear()} &copy; All Rights Reserved. </span>
        <div className='flex items-center'>
          <Link target='_blank' href='https://github.com/SaadFarooq-Dev' className='underline underline-offset-4'>SaadFarooq-Dev</Link>
        </div>
        <Link target='_blank' href='https://github.com/SaadFarooq-Dev'>Say Hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer