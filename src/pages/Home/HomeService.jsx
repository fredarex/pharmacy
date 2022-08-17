import React, { useEffect } from 'react'
import { doctor,tablet1,surgery,i_care,tablet2,cyan_hex,urgent_medicine,medical_care,fatherhood,hexagon,drug_background,book_app,pentagon,nurse,black_nurse,doctor_white,african_doctor,cool_nurse,blue_doctor,asian_doctor,myservice_1} from '../../constant/Image';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion/dist/framer-motion';
import { cylinderItem, cylinderWrapper,hexagonWrapper,hexagonItem } from '../../components/Variants/Variants';
import { FaArrowDown, FaBus, FaBusAlt, FaCalendar } from 'react-icons/fa'
import { COLORS } from '../../constant/theme';
import {IoIosArrowDroprightCircle} from 'react-icons/io';
import AppointBtn from '../../components/AppointBtn/AppointBtn';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
const fadingIn = {
  hidden: {
    opacity:1
  },
  show : {
    opacity: 1,
    transition: {
        staggerChildren:0.35
    }
  }
}
function HomeService(props) {
    
  return (
    <motion.div data-scroll variants={fadingIn} initial="hidden" animate="show" className='myService' style={{color:'#fff'}}>
        <div className='service_top_header'>
          <h3 data-scroll data-scroll-speed="2">What we bring <br/>to the table</h3>
          <h2 data-scroll data-scroll-speed="2">We work with your insurance just like a typical doctor’s office,</h2>
          <div className='nemorph_button'>
            <AppointBtn/>
          </div>
        </div>
        <motion.div variants={cylinderWrapper} className='service_hex_img'>
          <motion.img custom={1.4} variants={cylinderItem} src={cyan_hex} />
        </motion.div>
        <div className='service_rendered'>
          <div className='myService_content'>
            <div className='service_card' data-scroll data-scroll-speed="2">
              <img src={medical_care} />
              <div className='service_card_text'>
                <h2>Get care today for</h2>
                <p> We diagnose and treat a wide spectrum of illnesses, so you get the care you need 
                  without having to visit the  ER or see specialists.
                </p>
              </div>
            </div>
            <div className='service_card'>
              <img src={urgent_medicine} />
              <div className='service_card_text'>
                <h2>Urgent care</h2>
                <p> Health concerns can pop up anytime, so we’re here 
                to help 24/7 with anything from headaches to back pain 
                to COVID-19. Get care in minutes over Video Chat — at no
                extra cost. Or book a same/next-day appointment in person.
                </p>
              </div>
            </div>
            <div className='service_card'>
              <img src={fatherhood} />
              <div className='service_card_text'>
                <h2>Children and family</h2>
                <p> 
                We’ve created a welcoming, nurturing environment for the whole
                family and strive to help foster healthy habits in our youngest
                patients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='my_treatment'>
            <h1>Farma products help address <br/>health issues including:</h1>
            <div className='illness'>
              <span>Diabetes</span>  
              <span>Asthma</span>
              <span>Obesity</span>
              <span>Tooth Ache</span>
            </div>
        </div>
  </motion.div>
  )
}

export default HomeService;