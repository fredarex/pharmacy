import React, { useEffect, useRef, useState } from 'react'
import { farma_logo } from '../../constant/Image';
import {FaTimes,FaTimesCircle} from 'react-icons/fa';
import { emailSignInStart, loader } from '../../redux/User/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import {AddDoctorStart} from '../../redux/Doctors/doctors.action'
import gsap from 'gsap';

const mapState = (state) => {
  return {
      authModal: state.features.authModal
  }
}

function CustomModal(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {authModal} = useSelector(mapState);
  const authRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    function intro() {
      const t1 = gsap.timeline();
      t1.fromTo('.modal-content', {y: -1000}, {y:0, display:'block',duration: 1})
      return t1;
    }
    const master = gsap.timeline();
    master.add(intro());

    return () => {
      master.clear(true);
      master.kill();
    }
    
  },[authModal]);
  if(authModal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  useEffect(() => {
    setName('');
    setEmail('');
    setPassword('');
  },[]);

  const handleUserTab = () => {
    props.setStep(0);
    props.setActive('user');
}

  const handleDocTab = () => {
    props.setStep(1);
    props.setActive('doctor');
}

const handleUserLogin = () => {
  dispatch(emailSignInStart({displayName:'demo User',email:'testUser@gmail.com',password:'1234567'}));
  props.toggleModal();
  dispatch(loader(true));
}

const handleDoctorLogin = () => {
  dispatch(emailSignInStart({displayName:name,email,password}));
  props.toggleModal();
  dispatch(loader(true));
  setName('');
  setEmail('');
  setPassword('');
}

  return (
    <>
      {authModal && (
      <div className="modal" >
        <div onClick={props.toggleModal} className="overlay"></div>
        <div className="modal-content" ref={authRef}>
            <div className='t_section'>
                <img src={farma_logo} />
                <button className="close-modal" onClick={props.toggleModal}><FaTimes color='#fff' /></button>
            </div>
            
            <div className='modal_tab'>
                <div onClick={handleUserTab} className={`tab ${props.active == 'user' && 'active'}`}>USER</div>
                <div onClick={handleDocTab} className={`tab ${props.active == 'doctor' && 'active'}`}>DOCTOR</div>
            </div>
            {props.step == 0 &&
                <div>
                    <h2>Welcome back</h2>
                    <p>Please click on the Demo login button to sign in as a user</p>
                    <button className='user_login' onClick={handleUserLogin}>Demo Login</button>
                </div> 
            }
            {props.step == 1 &&
                <div>
                    <h2>Welcome back</h2>
                    <p>Please sign in as a doctor</p>
                    <form onSubmit={handleDoctorLogin}>
                        <div className='input_group'>
                            <label>Name</label>
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                        </div>
                        <div className='input_group'>
                            <label>Email</label>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email address' />
                        </div>
                        <div className='input_group'>
                            <label>Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Enter your password' />
                        </div>
                        <button type='submit' className='doctor_login'>Login</button>
                    </form>
                </div> 
            }
             
        </div>
      </div>
      )}
      </>
  )
}

export default CustomModal
