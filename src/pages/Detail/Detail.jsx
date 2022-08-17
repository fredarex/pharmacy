import React, { useEffect, useLayoutEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../../components/Header/Header';
import {DetailContainer} from './DetailStyled';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {HeaderColor} from '../../redux/feature/feature.actions'
import DetailLanding from './DetailLanding';
import DetailHero from './DetailHero';
import { COLORS } from '../../constant/theme';
import DetailComments from './DetailComments';
import Footer from '../../components/Footer/Footer';
gsap.registerPlugin(ScrollTrigger);


function Detail(props) {
    const {id} = useParams();
    const routePath = useLocation();
    const onTop = () => {
      window.scrollTo(0, 0);
    }
    useEffect(() => {
      onTop()
    }, [routePath]);
    useLayoutEffect(() => {
      const timeline = gsap.timeline({ repeat: -1,  }).
      to('#text', { duration: 17, xPercent: -50, ease: 'none' }).set('#text', {xPercent: 0})
     
    }, []);
    useLayoutEffect(() => {
      const timeline = gsap.timeline({ repeat: -1,  }).
      to('#text1', { duration: 7, xPercent: -50, ease: 'none' }).set('#text1', {xPercent: -10})
     
    }, []);
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      // const scrollelement = document.querySelector('#detail-container');
      // let DetailLocoScroll = new LocomotiveScroll({
      //   el: scrollelement,
      //   smooth: true,
      //   multiplier: 1,
      // });
      // //each time locomotive scroll updates , tell scrolltrigger to uupdate too ( sync positioning)
      // DetailLocoScroll.on("scroll",ScrollTrigger.update);
  
      // // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll"
      // // element sice locomotive scroll is hijacking things
      // ScrollTrigger.scrollerProxy("#detail-container", {
      //   scrollTop(value) {
      //     if(DetailLocoScroll) {
      //       return arguments.length ? DetailLocoScroll.scrollTo(value, 0, 0) :  DetailLocoScroll.scroll.instance.scroll.y;
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
  
      // gsap.to(".detail_background",{
      //   backgroundColor: `${COLORS.darkblue}`,
      //   textEmphasisColor:'#000',
      //   color: '#000',
      //   ease:"power4",
      //   duration:0.01,
      //   stagger:0,
      //   scrollTrigger: {
      //     trigger:".igt_header",
      //     start: 'top top',
      //     scrub:true,
      //     //scroller: "#detail-container"
      //   }
      // });
      
      // gsap.to(".ingredientContainer",{
      //   color: '#fff',
      //   ease:"back",
      //   duration:0.01,
      //   stagger:0,
      //   scrollTrigger: {
      //     trigger:".igt_header",
      //     start: 'top top',
      //     scrub:true,
      //    // scroller: "#detail-container"
      //   }
      // });


      // gsap.to(".my_ingredient",{
      //   borderBottom:'1px solid #fff',
      //   ease:"back",
      //   duration:0.01,
      //   stagger:0,
      //   scrollTrigger: {
      //     trigger:".igt_header",
      //     start: 'top top',
      //     scrub:true,
      //     //scroller: "#detail-container"
      //   }
      // });
      // gsap.to(".my_ingredient:nth-child(1) ",{
      //   borderTop:'1px solid #fff',
      //   ease:"back",
      //   duration:0.01,
      //   stagger:0,
      //   scrollTrigger: {
      //     trigger:".igt_header",
      //     start: 'top top',
      //     scrub:true,
      //     //scroller: "#detail-container"
      //   }
      // });

      // gsap.to(".detail_img img",{
      //   duration:20,
      //   rotateZ:'360deg',
       
      //   scrollTrigger: {
      //     trigger:".LandingContainer",
      //     start: 'top top',
      //     scrub:true,
      //     scroller: "#detail-container"
      //   }
      // });
  
      // const detailLocoUpdate = () => {
      //     if(DetailLocoScroll) {
      //       DetailLocoScroll.update();
      //     }
      // }
  
      // // each time the window updates, we should refresh ScrollTrigger and then update 
      // /// LocomotiveScroll.
      // ScrollTrigger.addEventListener("refresh",detailLocoUpdate);
      
      // // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll 
      // // Because padding may have been added for pinning, etc.
      // ScrollTrigger.refresh();
      
      // return () => {
      //   ScrollTrigger.removeEventListener("refresh",detailLocoUpdate);
      //   DetailLocoScroll.destroy();
      //   DetailLocoScroll = null;
      // }
    },[]);
    useEffect(() => {
      props.HeaderColor();
    },[])

    
  return (
    <DetailContainer id='detail-container' data-scroll-container>
      <div className='detailContent'>
        <div className='detail_background' data-scroll-section>
          <div className="top_section" data-scroll>
            <Header setColor={props.setColor} />
          </div>
          <DetailLanding />
          <DetailHero />
          <DetailComments />
          <div className='marquee_text'>
          <div className='marquee'>
            <div id="text-container">
                <h1 id="text">
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'}{" "}
                </h1>
            </div>
          </div>
          <div className='marquee'>
            <div id="text-container">
                <h1 id="text1">
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'} 
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'}
                  {'. Improve your health with farma .'}{" "}
                </h1>
            </div>
          </div>
          </div>
          
          <Footer changeColor={true} />
        </div>
      </div>
    </DetailContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    setColor: state.features.headersColor.setColor,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({HeaderColor},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail)