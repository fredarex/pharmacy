import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import {checking_patient,face_masked} from '../../constant/Image';

function HomeJoin() {
  return (
    <div className='HomeMemberShip' data-scroll>
        <div className='MemberContent'>
            <div className='mem_left_section'>
                <h1>Membership benefits you’ll enjoy</h1>
                <div className='mem_bonus'>
                    <div className='mem_left_bonus'>
                        <div className='bonus_item'>
                            <FaCheckCircle />
                            <h5>24/7 on-demand care  with Video Chat at no extra cost</h5>
                        </div>
                        <div className='bonus_item'>
                            <FaCheckCircle />
                            <h5>Easy booking of same/next-day appointments in the app</h5>
                        </div>
                        <div className='bonus_item'>
                            <FaCheckCircle />
                            <h5>Experts to help navigate the healthcare maze</h5>
                        </div>
                    </div>
                    <div className='mem_right_bonus'>
                        <div className='bonus_item'>
                            <FaCheckCircle />
                            <h5>Messaging with your provider in the app</h5>
                        </div>
                        <div className='bonus_item'>
                            <FaCheckCircle />
                            <h5>In-app prescription requests and renewals</h5>
                        </div>
                        <div className='bonus_item'>
                            <FaCheckCircle />
                            <h5>Online access to your health summaries and care plans</h5>
                        </div>
                    </div>
                </div>
                <div className='mem_pay'>
                    <h1>Membership costs only $199/year.</h1>
                    <button>Join Now</button>
                </div>
            </div>
            <div className='mem_right_section'>
                <img src={face_masked} />
            </div>
        </div>
    </div>
  )
}

export default HomeJoin