import gsap from 'gsap';
import React, { useLayoutEffect } from 'react'
import {FiStar} from 'react-icons/fi'
function DetailComments() {

    
  return (
    <div className='commentsContainer'>
        <div className='commentBadge'>
            WORD ON <br/>THE STREET
        </div>
        <div className='comments'>
            <div className='comment_item'>
                <div className='ratings'><FiStar /><FiStar /><FiStar /><FiStar /></div>
                <div className='comment_statement'>
                    The only [best] way to rise and shine
                </div>
            </div>
            <div className='comment_item'>
                <div className='ratings'><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                <div className='comment_statement'>
                    The only [best] way to rise and shine
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default DetailComments