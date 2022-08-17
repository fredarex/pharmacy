import React,{useEffect} from 'react'
import { farma_logo,white_farma_logo } from '../../constant/Image';
import {LoaderContainer} from './loaderStyled';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion/dist/framer-motion';

const container = {
    show : {
        transition: {
            staggerChildren: 0.35,
        }
    }
};

const item = {
    hidden: { opacity: 1},
    show : {
        opacity: 1,
        x: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            delay:.7,
            duration:1.3,
            repeat:2,
            repeatType: "loop"  
        },
        rotate:360,
        
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: "easeInOut",
            duration: 0.5
        },
    }
};

const top_section = {
    hidden: {
        opacity: 1,
        y:0
    },
    show: {
        y: -500,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            delay:4.7,
            duration:1.3,
            
        }
    }
}

const bottom_section = {
    hidden: {
        opacity: 1,
        y:0
    },
    show: {
        y: 500,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            delay:4.7,
            duration:1.3,
            
        }
    }
}

function Loader({ setLoading }) {
   
  return (
    <LoaderContainer>
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            onAnimationComplete={() => setLoading(false)}
            className='loaderContent'
        >
            <motion.div 
            className='top_section'
            variants={top_section}
            >

            </motion.div>
            <motion.img 
            variants={item}
            src={white_farma_logo}
            className="farma_logo"
            />
            <motion.div 
            className='bottom_section'
            variants={bottom_section}
            >

            </motion.div>
        </motion.div>
    </LoaderContainer>
  )
}

export default Loader