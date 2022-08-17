import React, { useEffect, useRef } from 'react'
import Header from '../../components/Header/Header'
import { doctor,tablet1,tablet2,hexagon,polygon_hex,cyan_hex,blue_hexagon,pill,pentagon,nurse,black_nurse,doctor_white,african_doctor,cool_nurse,blue_doctor,asian_doctor} from '../../constant/Image';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion/dist/framer-motion';
import { cylinderItem, cylinderWrapper,hexagonWrapper,hexagonItem } from '../../components/Variants/Variants';
import { FaArrowDown,FaArrowAltCircleRight, FaBus, FaBusAlt, FaCalendar } from 'react-icons/fa'
import { COLORS } from '../../constant/theme';
import {IoIosArrowDroprightCircle} from 'react-icons/io';
import AppointBtn from '../../components/AppointBtn/AppointBtn';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import Transition from '../../components/Transition/Transition';


const fadingIn = {
    hidden: {
      opacity: 0
    },
    show : {
      opacity: 1,
      transition: {
          staggerChildren:0.35
      }
    }
  }
  const fadingItem = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        duration:1.6,
        ease: "easeInOut",
      }
    }
  }

  

function HomeLanding(props) {
  const home = gsap.timeline();
  const myHeader = useRef(null);
  const homeText = useRef(null);
  useEffect(() => {
    gsap.to('.header-text',{
      y: 0,
      opacity: 1, 
      ease: "power2"
    });
  },[]);
  return (
    <>
      {/* <Transition timeline={home} /> */}
      <div className="homeLanding">
        <Header myHeader={myHeader} />
        <motion.div  variants={fadingIn} initial="hidden" animate="show" className='homeSection'>
          <div className='home_right_section'>
            <motion.div variants={hexagonWrapper} className='hexagon_image'>
              <motion.img custom={1.9} variants={hexagonItem} src={polygon_hex} className="img_hex" />
            </motion.div>
            <motion.div variants={cylinderWrapper} className='tablet2'>
              <motion.img custom={1.4} variants={cylinderItem} src={blue_hexagon} />
            </motion.div>
            <div className='landing_text'>
              <h1 className="header-text" ref={homeText}>
                Farma 
                <span className='orange_text'> Help</span><br/>In Boosting Your Health.
              </h1>
              <div className='nemorph_button'>
                <AppointBtn/>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={cylinderWrapper} className='cyan_hex_img'>
          <motion.img custom={1.4} variants={cylinderItem} src={cyan_hex} />
        </motion.div>
      </div>
    </>
      
  )
}

export default HomeLanding