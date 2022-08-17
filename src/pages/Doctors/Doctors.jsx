import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import AppointmentModal from '../../components/AppointmentModal/AppointmentModal'
import CustomCursor from '../../components/CustomCursor/CustomCursor'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header';
import { fetchDoctorsStart } from '../../redux/Doctors/doctors.action'
import {HeaderColor,setCursorType} from '../../redux/feature/feature.actions';
import DoctorsBooking from './DoctorsBooking'
import DoctorsLanding from './DoctorsLanding'
import { DoctorsContainer } from './DoctorsStyled'

const mapState = (state) => {
  return{
      doctors:state.doctors.doctors
  }
}
function Doctors(props) {
  const {doctors} = useSelector(mapState);
  const dispatch = useDispatch();
  
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    dispatch(fetchDoctorsStart());
},[])
  useEffect(() => {
    onTop()
  }, [routePath]);
      useEffect(() => {
        props.HeaderColor();
      },[]);

  const onCursor = cursorType => {
    cursorType = (props.cursorStyles.includes(cursorType) && cursorType) || false;
    props.setCursorType(cursorType);
  }
  
  return (
    <>
      
      <CustomCursor/>
      <DoctorsContainer id='doctors-container' data-scroll-container>
        <div className='DoctorsContent'>
          <div className='background_one' data-scroll-section>
            <div className="top_section" data-scroll>
              <Header setCursor={true} onCursor={onCursor}/>
              <div className='doc_hero_section'>
                <DoctorsLanding/>
              </div>
              
            </div>
              
              <DoctorsBooking />
            <Footer />
          </div>
        </div>
      </DoctorsContainer>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    setColor: state.features.headersColor.setColor,
    cursorStyles: state.features.cursorStyles
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({HeaderColor,setCursorType},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Doctors);