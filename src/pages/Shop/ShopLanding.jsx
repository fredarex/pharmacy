import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { asthma_drug } from '../../constant/Image';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const mapState = state => ({
    product: state.products.product
  });
function ShopLanding() {
  const history = useHistory();
  const phoneRef = useRef(null);
  const handleBuy = (id) => {
    history.push(`/detail/${id}`);
  }



  useEffect(() => {
    function intro() {
      const t1 = gsap.timeline();
      t1.fromTo(phoneRef.current, {y: 200}, {y:0, duration: 1})
      return t1;
    }

    function  stopTrigger() {

      ScrollTrigger.matchMedia({
      // desktop
      "(min-width: 960px) and (max-width: 1600px)": function(){
        const t1 = gsap.timeline({
          delay: 1,
          x: 300,
          scrollTrigger: {
            trigger: phoneRef.current,
            start: "top top",
            end: "+=700",
            pin:true,
            scrub: true
          }
        });
        t1.to(phoneRef.current,{x:-350});
        return function() {
          t1.clear(true);
          t1.kill(); 
          // other cleanup code can go here. 
        };
      }, 
           
    });
      
    }

    const master = gsap.timeline();
    master.add(intro());
    setTimeout(() => {
      master.add(stopTrigger());
    }, 1000);

    return () => {
      master.clear(true);
      master.kill();
    }
    
  },[])
      

  return (
    <div className='shoppingLanding'>
        <div className='shopperContent'>
            <div className='drug_text'>
                GET YOUR COUGH SYRUP, <br/>
                <span>SICKNESS SUCKS</span>
            </div>
            <div className='landing_drug' ref={phoneRef}>
                <button onClick={() => handleBuy('1657136888422')} className='buy_drug'>Click to Buy</button>
                <img src={asthma_drug} className="medicine" />
            </div>
        </div>
    </div>
  )
}

export default ShopLanding