import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Details from '../Details'

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ['start end', 'center start']
    }
  )

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px] ' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details position={'Software Engineer'}
            company={'Devsinc'}
            companyLink={'www.devsinc.com'}
            time={'2022-Present'}
            work={`Developed and maintained 5+ high-performance and scalable applications using various programming languages. Collaborated with cross-functional teams to understand business requirements and translated them into technical solutions. Worked with distributed databases, including MySQL, PostgreSQL and MongoDB. Mentored junior engineers and helped them grow both technically and professionally.`}
          />
          <Details position={'Associate Developer'}
            company={'NUCES'}
            companyLink={'https://cfd.nu.edu.pk/'}
            time={'2021-2022'}
            work={"Worked on both the web application and the admin panel, built using ReactJS, adding various new features to the admin dashboard and web application. Worked on Real Time Embedded systems. Created and deployed an IoT integrated UHF RFID system with with real time tracking in warehouse. Created a full fledged front-end WMS with real time tracking of packages."}
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience


