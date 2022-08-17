import React,{useRef,useEffect} from 'react'
import {HomeContainer} from './HomeStyled';
import { doc_medical_exam} from '../../constant/Image';
import HomeJoin from './HomeJoin';
import HomeLanding from './HomeLanding';
import HomeService from './HomeService';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HomeBlog from './HomeBlog';
import HomeShop from './HomeShop';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { Link, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Transition from '../../components/Transition/Transition';
import Footer from '../../components/Footer/Footer';
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
gsap.registerPlugin(ScrollTrigger);

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

function Home() {

  
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // const scrollEl = document.querySelector('#main-container');
    // let locoScoll = new LocomotiveScroll({
    //   el: scrollEl,
    //   smooth: true,
    //   multiplier: 1,
    // });
    // //each time locomotive scroll updates , tell scrolltrigger to uupdate too ( sync positioning)
    // locoScoll.on("scroll",ScrollTrigger.update);

    // // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll"
    // // element sice locomotive scroll is hijacking things
    // ScrollTrigger.scrollerProxy("#main-container", {
    //   scrollTop(value) {
    //     if(locoScoll) {
    //       return arguments.length ? locoScoll.scrollTo(value, 0, 0) :  locoScoll.scroll.instance.scroll.y;
    //     }
    //     return null;
    //   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    //   getBoundingClientRect() {
    //     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    //   },
    //   //locomotiveScroll handles things completely differently on mobile devices - it doesn't even 
    //   // transform the container at all! So to get the correct behavior and avoid 
    //   // jitters, we should pin things with position: fixed on mobile. We sense it by checking to see
    //   // if there's a transform applied to the container ( the locomotive scroll-controlled element).
    //   pinType: scrollEl.style.transform ? "transform" : "fixed"

    // });

    gsap.to(".illness span",{
      duration:1,
      stagger:0.1,
      opacity:1,
      scrollTrigger:{
        trigger:".illness",
        markers:false,
        start:'top 70%',
        end: "bottom top",
        scrub: 4,
        // scroller: "#main-container",
        toggleClass:"striked"

      }
    });

    gsap.to(".shop_tag",{
      duration:1,
      x:450,
      rotateZ:'360deg',
      scrollTrigger:{
        trigger:".shop_tag",
        start:'top 70%',
        end: "bottom top",
        scrub: 1,
        // scroller: "#main-container",
      }
    });
    ScrollTrigger.refresh(); 
       return () => {
      ScrollTrigger.removeEventListener("refresh");
    }
    
  //   const LocoUpdate = () => {
  //     if(locoScoll) {
  //       locoScoll.update();
  //     }
  // }
  //   // each time the window updates, we should refresh ScrollTrigger and then update 
  //   /// LocomotiveScroll.
  //   ScrollTrigger.addEventListener("refresh",LocoUpdate);
    
  //   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll 
  //   // Because padding may have been added for pinning, etc.
  //   ScrollTrigger.refresh();
  //   return () => {
  //     ScrollTrigger.removeEventListener("refresh",LocoUpdate);
  //     locoScoll.destroy();
  //     locoScoll = null;
  //   }
  },[]);

  return (
    <HomeContainer id='main-container'>
      <div className='HomeContent'>
        <div className='background_blue'>
          <div className='landing_page'>
            <img src={doc_medical_exam} className="home_doc_img" />
            <HomeLanding  />
          </div>
          <HomeService />
          <div className='shop_tag'>Shop Now</div>
        </div>
        <HomeShop />
        <HomeJoin />
        <HomeBlog />
        <Footer />
        
      </div>
    </HomeContainer>
  )
}

export default Home;







{/* <section className='farmRules' style={{height:'400vh'}}>
              <div className='rules'>
                  <img src={cool_nurse} style={{height:'90%'}} className='ruleImg' id="rule-1-img" />
                  <div className='ruleItem' id='rule-1'>
                    <h5>01</h5>
                    <div className='ruleHeader'>KEEP IT SIMPLE</div>
                    <div className='ruleSubHeader'>
                      We believe looking after your health should be as 
                      simple and straightforward as possible, so this means 
                      making products that fit easily into your life.
                    </div>
                  </div>
                  <div className='ruleItem' id='rule-2'>
                    <h5>02</h5>
                    <div className='ruleHeader'>THE WHOLE <br/>PICTURE</div>
                    <div className='ruleSubHeader'>
                    When you attend to all aspects of yourself — your body, 
                    mind, spirit and soul  — you create the foundation for your best possible health.
                    </div>
                  </div>
                  <img src={blue_doctor} style={{height: '70%'}}  className='ruleImg' id='rule-2-img'/>

                  <img src={doctor_white} className='ruleImg' id='rule-3-img' />
                  <div className='ruleItem' id='rule-3'>
                    <h5>03</h5>
                    <div className='ruleHeader'>WELLNESS <br/>FOR ALL</div>
                    <div className='ruleSubHeader'>
                    For too long, ‘wellness’ (and the myriad of products that go along with it) has been largely overcomplicated, expensive and inaccessible. We think feeling good is for everyone, and so we take an approach that’s 
                    as inclusive as possible–by making products that are affordable and widely available.
                    </div>
                  </div>  
                  <img src={indian_doctor} style={{height:'100%'}} className='ruleImg' id='rule-4-img'/>
                  <div className='ruleItem' id='rule-4'>
                    <h5>04</h5>
                    <div className='ruleHeader'>HERE FOR <br/>GOOD</div>
                    <div className='ruleSubHeader'>
                    We live by the mantra that big change is born of little things done every day. We’re committed to ongoing improvements not just to your health, but our brand, our products and our processes. 
                    Call it progress on the path to perfection.
                    </div>
                  </div>
              </div>
          </section> */}