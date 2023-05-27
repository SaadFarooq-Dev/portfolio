import { useRef } from "react"
import ListIcon from "../ListIcon"
import { motion } from "framer-motion"

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <ListIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.5, type: "spring"}}
      >
        <h3 className='capitalize font-bold text-xl sm:text-xl xs:text-lg' >{position} &nbsp; <a target='_blank' className='text-primary dark:text-primaryDark capitalize' href={companyLink}>@{company} </a> </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>{time} </span>
        <p className='font-medium w-full md:text-sm text-justify' >{work}</p>
      </motion.div>
    </li>
  )
}
export default Details
