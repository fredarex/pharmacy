import React, { useEffect } from 'react'
import { CartContainer } from './CartStyled';
import gsap from 'gsap';
import Header from '../../components/Header/Header';
import {HeaderColor} from '../../redux/feature/feature.actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CartLanding from './CartLanding';
import CartQuestion from './CartQuestion';
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
function Cart(props) {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
      useEffect(() => {
        props.HeaderColor();
      },[])
  return (
    <CartContainer id='cart-container' >
        <div className='cart_content'>
            <div className="top_section">
                <Header setColor={props.setColor} />
            </div>
            <CartLanding />
            <CartQuestion />
            <Footer  />
        </div>
    </CartContainer>
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
  

export default connect(mapStateToProps,mapDispatchToProps)(Cart)