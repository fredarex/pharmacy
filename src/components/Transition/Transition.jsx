import React, {useRef,useEffect} from 'react'
import { TransitionContainer } from './TransitionStyled'
import {Power4} from 'gsap'
function Transition({timeline}) {
    const trans = useRef(null);
    useEffect(() => {
      timeline.to(trans.current, {
        duration: 10,
        y: -2600,
        ease: Power4.easeOut
      })
    })
  return (
    <TransitionContainer>
        <div className='transition-effect' ref={trans}>
            
        </div>
    </TransitionContainer>
  )
}

export default Transition