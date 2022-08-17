import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { doctor_white,black_nurse,african_doctor,cool_nurse,female_pharmacist } from './constant/Image';
import './style.css';
import { Tween } from 'react-gsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./Components.css";
gsap.registerPlugin(ScrollTrigger);







const Components = () => {
    useEffect(() => {  
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
    },[]);    
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.utils.toArray('.section').forEach(section => {
//       ScrollTrigger.create({
//           trigger: section,
//           start:'top top',
//           pin: true,
//           pinSpacing:false
//       });
//     });
//   });
  return (
    <div className='container' data-scroll-container>
      <div className='grid'>
        <img src={doctor_white} width="50vw" data-scroll data-scroll-speed="6" />
        <img src={black_nurse} width="50vw" data-scroll data-scroll-speed="-10" />
      </div>
      <div className='text' data-scroll data-scroll-speed="3" >
        <h1>The Scrolling Animation</h1>
      </div>
      <div className='section'>
        <div className='span'>
          <span data-scroll data-scroll-speed="2">S</span>
          <span data-scroll data-scroll-speed="-1">c</span>
          <span data-scroll data-scroll-speed="3" >r</span>
          <span data-scroll data-scroll-speed="-1" >o</span>
          <span data-scroll data-scroll-speed="3" >l</span>
          <span data-scroll data-scroll-speed="-1.3" >l</span>
          <span data-scroll data-scroll-speed="3" >i</span>
          <span data-scroll data-scroll-speed="-1" >n</span>
          <span data-scroll data-scroll-speed="3" >g</span>
        </div>
      </div>
      <div className='paragraph' data-scroll data-scroll-speed="2">
        <p data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">Do you love to scroll</p>
        <p data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">Scroll more to see</p>
      </div>
      <div className='sticky'>
        <div id='pinSection'>
          <div data-scroll data-scroll-sticky data-scroll-target="#pinSection" >
            <h1>S<br />M</h1>
            <p data-scroll data-scroll-speed="2" data-scroll-position="bottom" >TO SEE</p>
          </div>
        </div>
      </div>
      <div className='img-container'>
        <p>Locomotive animation</p>
        <div className='img'>
          <img src={doctor_white} width="300px"  />
          <img src={black_nurse} width="300px"  />
          <img src={african_doctor} width="300px"  />
          <img src={cool_nurse} width="300px"  />
          <img src={black_nurse} width="300px"  />
          <img src={african_doctor} width="300px"  />
        </div>
      </div>
      <div className='footer'>
        <div className='img-wrapper'>
          <img src={female_pharmacist} width="300px" />
        </div>
        <div className='ftext'>
          <h1 data-scroll data-scroll-speed="6" >Please subscribe to Naymur Web</h1>
          <p data-scroll data-scroll-speed="10" data-scroll-position="bottom" >Leave comment about it</p>
        </div>
      </div>
    </div>
  )
  
  };

export default Components;



// <div id="no01" class="wrapper">
//   <div class="boxes">
//     <div class="box">GreenSock</div>
//     <div class="box">Nice Tool</div>
//     <div class="box">GreenSock</div>
//     <div class="box">Animate</div>
//     <div class="box">Fast & easy</div>
//     <div class="box">GreenSock</div>
//     <div class="box">The best</div>
//   </div>
// </div>


// body {
//   background:grey;
//   font-family:Asap, sans-serif;
// }
// .wrapper{
//   position:fixed;
//   width:150%;
//   height:50px;
//   left:50%;
//   top:40%;
//   background:grey;
//   overflow:hidden;
// }
// .wrapper .box{
//   position:absolute;
//   width: 250px;
//   height:50px;
//   background-color:grey;
//   color:black;
//   font-size:40px;
//   font-weight:600;
//   line-height:50px;
//   text-align:center;
// }
// .wrapper .boxes {
//   position:relative;
//   left:-250px;
// }


// console.clear();

// gsap.set('.wrapper',{xPercent:-50,yPercent:-50})
// gsap.set('#no02',{y:50})
// gsap.set('#no03',{y:120})

// var boxWidth = 250,
//     totalWidth = boxWidth * 7,  //  * n of boxes
//     no01 = document.querySelectorAll("#no01 .box"),
//     no02 = document.querySelectorAll("#no02 .box"),
//     no03 = document.querySelectorAll("#no03 .box"),
//     dirFromLeft = "+=" + totalWidth,
//     dirFromRight = "-=" + totalWidth;

// var mod = gsap.utils.wrap(0, totalWidth);

// function marquee(which, time, direction){
//   gsap.set(which, {
//     x:function(i) {
//       return i * boxWidth;
//     }
//   });
//   var action = gsap.timeline()
//   .to(which,  {
//   x: direction,
//   modifiers: {
//     x: x => mod(parseFloat(x)) + "px"
//   },
//     duration:time, ease:'none',
//     repeat:-1,
//   });
//   return action
// }

// var master = gsap.timeline()
// .add(marquee(no01, 15, dirFromLeft), 1)
// .add(marquee(no02, 20, dirFromLeft), 2)
// .add(marquee(no03, 20, dirFromRight), 3)