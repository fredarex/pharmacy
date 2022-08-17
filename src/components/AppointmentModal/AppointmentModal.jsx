import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { DayPicker } from 'react-day-picker';
import {AppointmentContainer} from './Appointment.styled.js';
import { format,getTime } from 'date-fns';
import { toast } from 'react-toastify';
import { convertDate, generateVideoCallToken } from '../../Utils/index.js';
import { useSelector } from 'react-redux';
import PaystackPop  from '@paystack/inline-js';
import { useDispatch } from 'react-redux';
import { addAppointmentStart } from '../../redux/Appointment/appointment.action.js';
import axios from 'axios';
const mapState = (state) => {
    return {
        currentUser: state.user.currentUser
    }
}
function AppointmentModal(props) {
    const [step,setStep] = useState(1);
    const [appointDay, setApppointDay] = useState('');
    const [appointTime, setAppointTime] = useState('');
    const [sickness, setSickness] = useState('');
    const dispatch = useDispatch();
    const [payment, setPayment] = useState(50);
    const [videoLink, setVideoLink] = useState({});
    const {currentUser} = useSelector(mapState);
    const [startMonth,setStartMonth] = useState(new Date());
    const [disabledDays,setDisabledDays] = useState([]);
    useEffect(() => {
        setStep(1);
        document.body.classList.add('active-modal');
    },[]);

    useEffect(() => {
        if(props.doctor.dateOnLeave.length > 0) {
        const myDate = props.doctor.dateOnLeave.map((date,index) =>
            { return convertDate(date);}
        );

        setDisabledDays(myDate);

        }
    },[]);
    // useEffect(() => {
    //     let Currentdate = new Date();
    //     let myPastDate = new Date(Currentdate);
    //     let prevDates = [];
    //     for(let i = 1; i<=31; i++){
    //         const newDate = myPastDate.setDate(Currentdate.get() - i);
    //         prevDates.push(
    //             newDate
    //         )
    //     }
    //     const disabledDate =prevDates.map((date) => {
    //         return new Date();
    //     })
    //     console.log(disabledDate);
    // },[])


    
    const cancelAppointment = () => {
        setApppointDay('');
        setAppointTime('');
        setSickness('');
        document.body.classList.remove('active-modal');
        props.handleBookDoctor();
    }
    const generateVideoCallToken = (channelName) => {
        axios.post('https://farma-videocall.herokuapp.com/access_token',
        {
            appId:'0478fd1ef5f540a98f2f90333febf378',
            appCertificate: 'a634e0f82c434059a5f090ae5295d171',
            channel: channelName,
            isPublisher: true
        },
        {
            headers: {'content-type': 'application/json'}
        }
        )
        .then((response) =>{
           setVideoLink(response.data);
        }).catch((err) => console.log(err));
    }

    useEffect(()=> {
        generateVideoCallToken(currentUser.displayName);
    },[])
    const handlePayment = () => {
        if(sickness==''){
            toast.warn("select the reason of consultation", {position: "top-center"});
        }else if(!currentUser) {
            alert('login as a demo user');
            toast.warn("login as a demo user", {position: "top-center"});
        }else {
            const paystack = new PaystackPop();
            paystack.newTransaction({
                key: "pk_test_0f4c88657df9780572e4550cb9306176d81d0c04",
                amount: payment * 500 * 100,
                email: currentUser.email,
                firstname: currentUser.displayName,
                onSuccess(transaction) {
                    let pickedDate = format(appointDay, 'yyyy-MM-dd');
                    pickedDate = new Date(pickedDate).getTime();

                    const addAppointment = {
                        doctorName:props.doctor.doctorName,
                        patientID:currentUser.id,
                        issue:sickness,
                        date:pickedDate,
                        time:appointTime,
                        videoURL: videoLink
                    }
                    dispatch(addAppointmentStart(addAppointment));
                    document.body.classList.remove('active-modal');
                    props.handleSuccessPayment();
                }
            })
        }
    }
  return (
    <AppointmentContainer>
        <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
            <div className='t_section'>
                <button className="close-modal" onClick={cancelAppointment} ><FaTimes color='#fff' /></button>
            </div>
            <div className='appointment'>
                {step === 1 && 
                <div className='modal_tab'>
                    <div className='tab'>Select date</div>
                    <div>
                        <DayPicker
                            fromMonth={startMonth}
                            toDate={new Date(2028, 10, 20)}
                            selected={appointDay}
                            onSelect={setApppointDay}
                            disabled={disabledDays.length > 0 && disabledDays}
                            mode="single"
                        /> 
                    </div>
                    
                </div>
                }
                {
                    step === 2 && 
                    <div className='modal_tab'>
                        <div className='tab'>Select time</div>
                        <div>
                            <h2>Select Time for  appointment?</h2>
                            <div className="select_Time">
                                {props.doctor.timeSlot.map((time) => {
                                    return (
                                        <div className='select_opt' onClick={() => setAppointTime(time.time)}>{time.time}</div>
                                    )
                                })}
                                
                            </div>
                        </div>
                    </div>
                }
                {
                    step === 3 && 
                    <div className='modal_tab'>
                        <div className='tab'>Make Payment</div>
                        <div>
                            <h2>What are you consulting for?</h2>
                            <div className="select_sickness">
                                <div className='select_opt' onClick={() => setSickness("Malaria symptom")}>Malaria symptom</div>
                                <div className='select_opt' onClick={()=> setSickness("Covid-19")}>Covid-19</div>
                                <div className='select_opt' onClick={()=> setSickness("Stomach issue")}>Stomach issue</div>
                                <div className='select_opt' onClick={()=> setSickness("Aches & pain")}>Aches & pain</div>
                                <div className='select_opt' onClick={()=> setSickness("Sleep problems")}>Sleep problems</div>
                                <div className='select_opt' onClick={()=> setSickness("Cold & flu")}>Cold & flu</div>
                                <div className='select_opt' onClick={()=> setSickness("Skin issues")}>Skin issues</div>
                                <div className='select_opt' onClick={()=> setSickness("General weakness")}>General weakness</div>
                                <div className='select_opt' onClick={()=> setSickness("Other")}>Other</div>
                            </div>
                        </div>
                        <div className='consulation_fee'>
                            <h5>Consultation/fee</h5>
                            <p>${payment}</p>
                        </div>
                    </div>
                }
                
                <div className='appointment_detail'>
                    <h3>Appointment Detail</h3>
                    <div className='app_detail_section'>
                        <h4>Doctor</h4>
                        <p>{props.doctor.doctorName}</p>
                    </div>
                    <div className='app_detail_section'>
                        <h4>Date</h4>
                        <p>{appointDay && format(appointDay, 'PPP')}</p>
                    </div>
                    <div className='app_detail_section'>
                        <h4>Time</h4>
                        <p>{appointTime}</p>
                    </div>
                    {step == 3 &&
                        <div className='app_detail_section'>
                            <h4>Issue</h4>
                            <p>{sickness}</p>
                        </div>
                    }
                    
                    
                </div>
            </div>
            {step == 1 && 
                <div className='appointment_btns'>
                    <button onClick={() => {!appointDay ? toast.warn('select date of appointment',{position: "top-center",style:{zIndex:1000000}}):setStep(step + 1);}} className='next_btn'>Next</button>
                </div>
            }
            {step == 2 && 
                <div className='appointment_btns'>
                    <button onClick={() => {setStep(step - 1); setApppointDay(''); setAppointTime('');}} className='prev_btn'>Previous</button>
                    <button onClick={() => {!appointTime ? toast.warn('select Time of appointment',{position: "top-center",style:{zIndex:1000000}}):setStep(step + 1)}} className='next_btn'>Next</button>
                </div>
            }
            {step == 3 && 
                <div className='appointment_btns'>
                    <button onClick={() => {setStep(step - 1); setAppointTime(''); setSickness('')}} className='prev_btn'>Previous</button>
                    <button onClick={handlePayment} className='next_btn'>Make demo payment</button>
                </div>
            }
        </div>
      </div>
    </AppointmentContainer>
    
  )
}

export default AppointmentModal