import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaArrowAltCircleUp} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FooterContainer } from './FooterStyled'

function Footer(props) {
  return (
    <FooterContainer {...props}>
        <div className='footerContent'>
        <div>
          <div className='f_top_header'>
            <span>Get <br />Healthy</span> 
            <FaArrowAltCircleUp className='arrow'  /> 
          </div>
          <div className='f_bottom'>
            <div className='f-social-links'>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
            <div className='navlinks'>
              <ul>
                <li><Link to={'/'}>HOME</Link></li>
                <li><Link to={'/shop'}>SHOP</Link></li>
                <li><Link to={'/cart'}>CART</Link></li>
                <li><Link to={'/doctors'}>MY DOCTOR</Link></li>
              </ul>
              <ul>
                <li><Link to={'/'}>CONTACT</Link></li>
                <li><Link to={'/shop'}>PRIVACY</Link></li>
                <li><Link to={'/cart'}>TERM</Link></li>
              </ul>
            </div>
            <div>
              Developed by fred obi
            </div>
          </div>
          
        </div>
        </div>
    </FooterContainer>
  )
}

export default Footer