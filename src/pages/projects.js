import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import FeaturedProject from '@/components/FeaturedProject'
import projectImage1 from '/public/images/projects/crypto-screener-cover-image.jpg'
import Projects from '@/components/Projects'

const projects = () => {
  return (
    <>
      <Head>
        <title>Saad Farooq | Projects Page</title>
        <meta name='description' content='Software Developer' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text={'Imagination Trumps Knowledge!'} className='mb-16 ' />
          <div className='grid grid-cols-12 gap-24 gap-y-32'>
            <div className='col-span-12'>
              <FeaturedProject
                title={'Crypto Screener Application'}
                summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'}
                link={'/'}
                type={'Featured Project'}
                github={'www.github.com'}
                image={projectImage1}
              />

            </div>
            <div className='col-span-6'>
              <Projects
                title={'Crypto Screener Application'}
                link={'/'}
                type={'Project'}
                github={'www.github.com'}
                image={projectImage1}
              />
            </div>
            <div className='col-span-6'>
              <Projects
                title={'Crypto Screener Application'}
                link={'/'}
                type={'Project'}
                github={'www.github.com'}
                image={projectImage1}
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title={'Crypto Screener Application'}
                summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'}
                link={'/'}
                type={'Featured Project'}
                github={'www.github.com'}
                image={projectImage1}
              />
            </div>
            <div className='col-span-6'>
              <Projects
                title={'Crypto Screener Application'}
                link={'/'}
                type={'Project'}
                github={'www.github.com'}
                image={projectImage1}
              />
            </div>
            <div className='col-span-6'>
              <Projects
                title={'Crypto Screener Application'}
                link={'/'}
                type={'Project'}
                github={'www.github.com'}
                image={projectImage1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
