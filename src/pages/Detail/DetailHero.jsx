import React, { useEffect, useState } from 'react'
import {FiMinus,FiPlus} from 'react-icons/fi'
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { COLORS } from '../../constant/theme';
gsap.registerPlugin(ScrollTrigger);

function DetailHero() {
    const [clicked , setClicked] = useState(false);
    const detailRef = useRef(null);
    const toggleQuestion = (index) => {
        if(clicked === index) {
           return setClicked(null);
        }
        setClicked(index);
        
    }


    useEffect(() => {
        function intro() {
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: detailRef.current,
                    start:"top top",
                    scrub:true
                }
            });
            t1.to(
                ".detail_background",
                {
                    backgroundColor:`${COLORS.darkblue}`,
                    color:'#fff',
                    duration:0.1,
                }
            )

            t1.to(".my_ingredient",{
                  borderBottom:'1px solid #fff'
                  });

            t1.to(".my_ingredient:nth-child(1) ",{
                  borderTop:'1px solid #fff',
                  }
                )
            return t1;
         
        }
    
    
        const master = gsap.timeline();
        master.add(intro());
          //master.add(stopTrigger());
       
        
      },[])
  return (
    <div className='ingredientContainer'>
        <div className='new_back' ref={detailRef}></div>
        <div className='igt_header'>
            What's inside?
        </div>
        <div className='ingredients_items'>
            <div className="my_ingredient">
                <div className="wrap" onClick={()=> toggleQuestion(1)} key={1}>
                    <div className="ingredient_name">ElderBerry</div>
                    {clicked === 1 ? <FiMinus className='toggleicon'/> : <FiPlus className='toggleicon' />}
                </div>
                {clicked === 1 ? <div className="answer">multivitamin-syrup-plus-omega-6-9</div> : null}                                    
            </div>
            <div className="my_ingredient">
                <div className="wrap" onClick={()=> toggleQuestion(2)} key={2}>
                    <div className="ingredient_name">ElderBerry</div>
                    {clicked === 2 ? <FiMinus className='toggleicon'/> : <FiPlus className='toggleicon' />}
                </div>
                {clicked === 2 ? <div className="answer">multivitamin-syrup-plus-omega-6-9</div> : null}                                    
            </div>
        </div>
        
        
    </div>
  )
}

export default DetailHero