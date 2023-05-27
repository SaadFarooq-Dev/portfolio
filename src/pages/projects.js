import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import FeaturedProject from '@/components/FeaturedProject'
import projectImage1 from '/public/images/projects/real-estate.png'
import projectImage2 from '/public/images/projects/chat-app.png'
import Projects from '@/components/Projects'
import Transition from '@/components/Transition'

const projects = () => {
  return (
    <>
      <Head>
        <title>Saad Farooq | Projects Page</title>
        <meta name='description' content='Software Developer' />
      </Head>
      <Transition/>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text={'Innovative coding for a dynamic world!'} className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title={'Real Estate Application'}
                summary={'A real estate web application that provides users with a seamless experience when searching for properties. The application was built using NextJS, a React framework for server-side rendering, and Chakra UI, a beautiful and customizable component library that simplifies the building of user interfaces. The application leverages RapidApi to power its search functionality, allowing users to quickly and easily find properties based on their desired location, price range, and other criteria. '}
                link={'https://search-real-estate-app.vercel.app/'}
                type={'Featured Project'}
                github={'https://github.com/SaadFarooq-Dev/real-estate-app'}
                image={projectImage1}
              />

            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Projects
                title={'Chat Application'}
                link={'https://chat-app-superbase.vercel.app/'}
                type={'Project'}
                github={'https://github.com/SaadFarooq-Dev/chat-app-superbase'}
                image={projectImage2}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
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
