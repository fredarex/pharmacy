import React from 'react';
import { useHistory } from 'react-router-dom';
import {book_app} from '../../constant/Image';
import {BtnContainer} from './AppointBtnStyled';
function AppointBtn() {
  const history = useHistory();
  const redirect = () => {  
    history.push('/doctors');
  }
  return (
    <BtnContainer onClick={redirect}>
        <span >Book an appointment </span> 
        <img src={book_app}/>
    </BtnContainer>
  )
}

export default AppointBtn