import React from 'react'
import { farma_logo,white_farma_logo,hexagon } from '../../constant/Image';
import { motion } from 'framer-motion/dist/framer-motion';
import {HeaderContainer} from './headerStyled';
import { hexagonWrapper,hexagonItem} from '../Variants/Variants';
import { Link, useLocation } from 'react-router-dom';
import {FiMenu} from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import {getAuth} from 'firebase/auth';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loader, signOutUserStart } from '../../redux/User/user.actions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useState } from 'react';
import { SunspotLoaderComponent } from '../SunSpotLoader/SunSpotLoader';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';
import CustomModal from '../CustomModal/CustomModal';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { setAuthModal } from '../../redux/feature/feature.actions';
const headerContent = {
    hidden: {
        opacity: 1,
        
    },
    show: {
        opacity: 1,
        
    }
}

const headerLogo = {
    hidden: {
        opacity: 0
    },
    show : {
        opacity: 1,
        transition: {
            staggerChildren:0.1
        }
    }
}

const logoItem = {
    hidden: {
        opacity: 0,
        y:-100
    },
    show : {
        opacity: 1,
        y:0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration:1.3
        }
    }
}


const mapState = (state) => {
    return {
        currentUser: state.user.currentUser,
        loading: state.user.AuthLoading,
        totalNumCartItems:  selectCartItemsCount(state),
        authModal: state.features.authModal

    }
}


function Header(props) {
    const [showDropDown, setShowDropDown] = useState(false);
    const [loaderColor,setLoaderColor] = useState('');
    const [step,setStep] = useState(0);
    const [active, setActive] = useState('user');
   
    const location = useLocation();
    const history = useHistory();
    let auth = getAuth();
    const dispatch = useDispatch();
    const {currentUser,loading,totalNumCartItems,authModal} = useSelector(mapState);
    console.log(authModal)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);    
      },[]);

    useEffect(() => {
        menu_open.clear(true);
        menu_open.kill();
    },[]);

    
    useEffect(()=>{
        setShowDropDown(false);
        dispatch(loader(false));
    },[]);
    const handleAccountDropDown = () => {
        setShowDropDown(!showDropDown);
    }
    const toggleModal = () => {
        dispatch(setAuthModal(!authModal));
        setStep(0);
        setActive('user');
    };
    const handleLink = () => {
        history.push('/');
    }
    useEffect(() => {
        if(location.pathname.includes('cart') || location.pathname.includes('detail')){
            setLoaderColor('#000')
        }else{
            setLoaderColor('#fff')
        }
    },[])
    


    const menu_open = gsap.timeline({
        reversed:true,
        paused:true
    });
    menu_open.fromTo('.menuNavContainer',
        {
            display:"none"
        },
        {
            display:"block"
        }
    );
    menu_open.fromTo('.menu',
        {
            display:'none'
        },
        {
        display:"block"
        });
    menu_open.to('.menu-container',{
        display:"flex"
    });
    menu_open.fromTo(
        "#menuBtnDiv",
        {
            duration: 0.2,
            y:0,
            display:'block'
        },
        {
            y:0,
            display:'none'
        }
    );

    
    
    menu_open.fromTo(
        ".menu-container-1",
        {
            duration:0.2,
            y:'100%'
        },
        {
            y: 0,
        }
        
    );
    menu_open.fromTo(
        ".menu-container-2",
        {
            y:"-100%"
        },
        {
            y:0
        }
    );
    menu_open.fromTo(
        "#menuBtnDiv2",
        {
            duration: 0.2,
            y:-100
        },
        {
            y:30
        }
    );

    menu_open.fromTo(
        ".menu-container-1 .menu-container-header li span, .menu-container-1 .menu-container-footer li span",
        {
            y:60,
        },
        {
            stagger: {
               amount: 0.15 
            },
            y: 0,
        }
        
    );
    

    
    menu_open.fromTo(
        "header",
        {
            y:"-100%"
        },
        {
            y:0
        }
    );
   

    const menuOpen = () => {
        menu_open.reversed() ? menu_open.play(2) : menu_open.reverse();
        document.body.classList.add('active-modal');
    }
    const menuClose = () => {
        menu_open.reverse(1);
        document.body.classList.remove('active-modal');
    }



    

  return (
    <HeaderContainer {...props} data-scroll data-scroll-direction="vertical">
        <motion.div ref={props.myHeader} variants={headerContent} initial="hidden" animate="show" exit="exit" className='HeaderContent'>
            <motion.div variants={headerLogo} className='logo'>
                {props.setCursor ? (
                    props.setColor ?  <motion.img onMouseEnter={() => props.onCursor('hovered')} onMouseLeave={props.onCursor}  data-scroll className="farmaLogo" variants={logoItem} src={farma_logo} /> :
                    <motion.img onMouseEnter={() => props.onCursor('hovered')} onMouseLeave={props.onCursor}  data-scroll className="farmaLogo" variants={logoItem} src={white_farma_logo} />
                ): (
                    props.setColor ?  <motion.img data-scroll className="farmaLogo" variants={logoItem} src={farma_logo} /> :
                    <motion.img data-scroll className="farmaLogo" variants={logoItem} src={white_farma_logo} />
                )}
                <motion.div data-scroll  variants={logoItem} className='com_name' onClick={handleLink}>farma</motion.div>
                {!props.setColor && 
                <motion.div variants={hexagonWrapper} className='hexagon_image'>
                    <motion.img variants={hexagonItem} custom={1.4} src={hexagon} />
                </motion.div>} 
            </motion.div>
            <div className='links'>
                <div className='my_links'>
                    <Link className='link' to="/shop">SHOP</Link>
                    <Link className='link' to="/doctors">MY DOCTOR</Link>
                </div> 
            </div>
            {
               loading ? <SunspotLoaderComponent loaderColor={loaderColor}/> : (
                    !currentUser ? (
                        <div className='login' style={{display: (loading && 'none') }}>
                            <button className='signin' onClick={toggleModal}>DEMO LOGIN</button>
                        </div>
                        ) :(
                        <div className='my_account' onClick={handleAccountDropDown}>
                            <div className='account' >
                                <span>MY ACCOUNT</span>
                                <IoMdArrowDropdown fontSize={20} />
                            </div>
                            <div style={{display: (showDropDown ? 'block': 'none')}} className='dropbox'>
                                <Link to='/'>DASHBOARD</Link>
                                <div className='divider'></div>
                                <button className='logout' onClick={() => dispatch(signOutUserStart())}>LOGOUT</button>
                            </div>
                        </div>
                        )
                )
            } 
            <div className='cart'>
                <Link className='cart_link' to="/cart">CART</Link>
                <div className='cart_total'>{totalNumCartItems}</div>
            </div>
            <div className='hamMenu' onClick={menuOpen}>
                <FiMenu id='menuBtnDiv'  size={30} color={props.setColor ? '#000':'#fff'} />
            </div> 
            <div className='menu'  onClick={menuClose}>
                <span id='menuBtn'>
                    <div id='menuBtnDiv2'>CLOSE</div>
                </span>
            </div>
        </motion.div>
        <CustomModal 
            active={active}
            setActive={setActive}
            step={step} 
            setStep={setStep}
            toggleModal={toggleModal}
        />
    </HeaderContainer>
  )
}

const mapStateToProps = ({user}) => {
    return {
        currentUser: user.currentUser
    }
}

export default connect(mapStateToProps)(Header)
