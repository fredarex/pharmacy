import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import useWindowSize from '../../customHooks/useWindowSize';
import { Canvas, Video } from './DoctorsStyled';
import { virtual_doc, virtual_doc_profile } from '../../constant/Image';
function DoctorsLanding() {
  const size = useWindowSize()
  let canvas = useRef(null)
  useEffect(() => {
    // let renderingElement = canvas.current
    // // create an offscreen canvas only for the drawings
    // let drawingElement = renderingElement.cloneNode()
    // let drawingCtx = drawingElement.getContext("2d")
    // let renderingCtx = renderingElement.getContext("2d")
    // let lastX
    // let lastY
    // let moving = false

    // renderingCtx.globalCompositeOperation = "source-over"
    // renderingCtx.fillStyle = "#ffffff";
    // renderingCtx.fillRect(0, 0, size.width, size.height)

    // renderingElement.addEventListener("mouseover", ev => {
    //   moving = true
    //   lastX = ev.pageX - renderingElement.offsetLeft
    //   lastY = ev.pageY - renderingElement.offsetTop
    // })

    // renderingElement.addEventListener("click", ev => {
    //   moving = true
    //   lastX = ev.pageX - renderingElement.offsetLeft
    //   lastY = ev.pageY - renderingElement.offsetTop
    // })

    // renderingElement.addEventListener("mouseup", ev => {
    //   moving = false
    //   lastX = ev.pageX - renderingElement.offsetLeft
    //   lastY = ev.pageY - renderingElement.offsetTop
    // })

    // renderingElement.addEventListener("mousemove", ev => {
    //   if (moving) {
    //     drawingCtx.globalCompositeOperation = "source-over"
    //     renderingCtx.globalCompositeOperation = "destination-out"
    //     let currentX = ev.pageX - renderingElement.offsetLeft
    //     let currentY = ev.pageY - renderingElement.offsetTop
    //     drawingCtx.lineJoin = "round"
    //     drawingCtx.moveTo(lastX, lastY)
    //     drawingCtx.lineTo(currentX, currentY)
    //     drawingCtx.closePath()
    //     drawingCtx.lineWidth = 120
    //     drawingCtx.stroke()
    //     lastX = currentX
    //     lastY = currentY
    //     renderingCtx.drawImage(drawingElement, 0, 0)
    //   }
    // })

  },[])
  return (
    <>
   
    <div className='docLanding'>
       {/* <Video>
        <video
          width="100%"
          height="100%"
          loop
          autoPlay
          muted
          src={require("../../assets/video/health.mp4")}
        />
      </Video> 
       <Canvas height={size.height} width={size.width} ref={canvas}/>  */}
        <div className='landing_section'>
            <div className='l_first_sec'>
              <h1>NEED <span className="yellow_text">MEDICAL</span> CARE ?</h1>
              <button className='pink_text'>Get started <FaArrowAltCircleRight color='#FEADA9'/></button>
            </div>
            <div className='l_second_sec'>
              <div className='virtual_doc'>
                <img src={virtual_doc}/>
              </div>
             <div className='virtual_appointment_card'>
                  <img src={virtual_doc_profile} />
                  <div className='v_text'>
                      <p>Maxwell Daniella</p>
                      <span>Neurosurgeon, Doctor</span>
                  </div>
             </div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default DoctorsLanding