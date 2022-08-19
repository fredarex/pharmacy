import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import { ShopContainer } from './ShopStyled'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ShopLanding from './ShopLanding'
import ShopAbout from './ShopAbout';
import ShopProducts from './ShopProducts';
import Footer from '../../components/Footer/Footer';
import { useHistory } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);


function Shop() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  useEffect(() => {

    // const scrollelement = document.querySelector('#shop-container');
    // let ShoplocoScoll = new LocomotiveScroll({
    //   el: scrollelement,
    //   smooth: true,
    //   multiplier: 1,
    // });
    // //each time locomotive scroll updates , tell scrolltrigger to uupdate too ( sync positioning)
    // ShoplocoScoll.on("scroll",ScrollTrigger.update);

    // // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll"
    // // element sice locomotive scroll is hijacking things
    // ScrollTrigger.scrollerProxy("#shop-container", {
    //   scrollTop(value) {
    //     if(ShoplocoScoll) {
    //       return arguments.length ? ShoplocoScoll.scrollTo(value, 0, 0) :  ShoplocoScoll.scroll.instance.scroll.y;
    //     }
    //     return null;
        
    //   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    //   getBoundingClientRect() {
    //       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    //   },
    //   //locomotiveScroll handles things completely differently on mobile devices - it doesn't even 
    //   // transform the container at all! So to get the correct behavior and avoid 
    //   // jitters, we should pin things with position: fixed on mobile. We sense it by checking to see
    //   // if there's a transform applied to the container ( the locomotive scroll-controlled element).
    //   pinType: scrollelement.style.transform ? "transform" : "fixed"

    // });


    gsap.to(".buy_drug",{
      duration:5,
      rotateZ:'360deg',
      repeat:-1,
    });

  
    gsap.to(".stay_safe p",{
      rotateZ:'5deg',
      duration: 4,
      scrollTrigger:{
        trigger:".stay_safe",
        start:'start 60%',
        end: "bottom 30%",
        markers: false,
        scrub: 4,
        //scroller: "#shop-container",
      }
    });


    gsap.to(".background_one",{
      backgroundColor: '#fff',
      textEmphasisColor:'#000',
      color: '#000',
      ease:"elastic",
      duration:0.01,
      stagger:0,
      scrollTrigger: {
        trigger:".AboutProduct",
        start: 'bottom top',
        scrub:true,
        //scroller: "#shop-container"
      }
    });

   

    gsap.to(".stay_safe",{
      borderColor:'#000',
      color: '#000',
      ease:"back",
      duration:0.01,
      stagger:0,
      scrollTrigger: {
        trigger:".AboutProduct",
        start: 'bottom top',
        scrub:true,
       // scroller: "#shop-container"
      }
    });

    gsap.
    to(".stay_safe span, .stay_safe p, .product span, .product .maintitle, .maintitle p, .maintitle button ",{
      borderColor:'#000',
      color: '#000',
      ease:"back",
      duration:0.01,
      stagger:0,
      scrollTrigger: {
        trigger:".AboutProduct",
        start: 'bottom top',
        scrub:true,
       // scroller: "#shop-container"
      }
    });

   

    


    gsap.to(".stay_safe span",{
      rotateZ:'-10deg',
      duration: 2,
      scrollTrigger:{
        trigger:".stay_safe",
        start:'start 60%',
        end: "bottom 30%",
        markers: false,
        scrub: 4,
        //scroller: "#shop-container",
      }
    });
    

    // const shopLocoUpdate = () => {
    //     if(ShoplocoScoll) {
    //       ShoplocoScoll.update();
    //     }
    // }

    // each time the window updates, we should refresh ScrollTrigger and then update 
    /// LocomotiveScroll.
    // ScrollTrigger.addEventListener("refresh",shopLocoUpdate);
    
    // // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll 
    // // Because padding may have been added for pinning, etc.
   ScrollTrigger.refresh();
    
    // return () => {
    //   ScrollTrigger.removeEventListener("refresh",shopLocoUpdate);
    //   ShoplocoScoll.destroy();
    //   ShoplocoScoll = null;
    // }

    return () => {
      gsap.timeline().kill();
      gsap.timeline().clear(true);
    }
  },[]);

  
  
  return (
    <ShopContainer id='shop-container' data-scroll-container>
      <div className='ShopContent'>
        <div className='background_one' data-scroll-section>
          <div className="top_section" data-scroll>
            <Header />
            <ShopLanding />
          </div>
          <ShopAbout />
          <ShopProducts />
          <Footer />
        </div>
      </div>
    </ShopContainer>
  )
}

export default Shop