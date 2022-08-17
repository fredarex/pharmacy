import React, { useState } from 'react'
import './MenuNavStyled.css';
import {FaMailBulk,FaArrowAltCircleUp} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SunspotLoaderComponent } from '../SunSpotLoader/SunSpotLoader';
import { setAuthModal } from '../../redux/feature/feature.actions';
import CustomModal from '../CustomModal/CustomModal';
import { signOutUserStart } from '../../redux/User/user.actions';

const mapState = (state) => {
    return {
        currentUser: state.user.currentUser,
        loading: state.user.AuthLoading,
        authModal: state.features.authModal
    }
}

function MenuNav() {
    const [step,setStep] = useState(0);
    const [active, setActive] = useState('user');
    const {currentUser,loading,authModal} = useSelector(mapState);
    const dispatch = useDispatch();
    const toggleModal = () => {
        dispatch(setAuthModal(!authModal));
        setStep(0);
        setActive('user');
    };
  return (
    <>  
        <div className='menuNavContainer'>
            <header>
                <div className='logo'>
                    <Link to='/'>farma</Link>
                </div>
                <div className='menu-items'>
                    <div className='freelance-work'>
                    <FaMailBulk/> <a href='mailto:fredobi200@gmail.com'>fredobi200@gmail.com</a>
                    </div>
                    
                </div>
                
            </header>
            <div className='menu-container'>
                <div className='menu-container-1'>
                    <div></div>
                    <div className='menu-container-header'>
                        <ul>
                            <li><span><Link to='/shop'>SHOP</Link></span></li>
                            <li><span><Link to='/doctors'>MY DOCTOR</Link></span></li>
                            <li><span><Link to='/cart'>CART</Link></span></li>
                            {
                                (
                                    !currentUser ? (
                                        <li><span style={{cursor:'pointer'}} onClick={toggleModal}>DEMO LOGIN</span></li>
                                    ):
                                    <>
                                        <li><span><Link to='/'>DASHBOARD</Link></span></li>
                                        <li><span style={{cursor:'pointer'}} onClick={() => dispatch(signOutUserStart())}>LOGOUT</span></li>
                                    </>
                                )
                            }
                            
                            
                        </ul>
                    </div>
                    <div className='menu-container-footer'>
                        <ul>
                            <li><span>facebook</span></li>
                            <li><span>instagram</span></li>
                            <li><span>facebook</span></li>
                        </ul>
                    </div>
                </div>
                
                <div className='menu-container-2'>
                    <div className='menu-container-footer'>
                        <ul>
                            <li>
                                <span>
                                    Get <br/>Healthy
                                    <FaArrowAltCircleUp className='arrow' size={80} /> 
                                </span>
                            </li>
                            <li>
                                <span>Developed by fred obi</span>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </div>
        </div>
    </>    
  )
}

export default MenuNav