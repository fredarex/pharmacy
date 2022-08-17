import moment from 'moment';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointmentsStarting, setAppointmentStart, showVideoModalStart } from '../../../redux/Appointment/appointment.action';
import Table from '../../Table/Table';
import VideoCall from '../../VideoCall/VideoCall';


const MeetingTableHead = [
    'Appointment Date',
    'Doctor Name',
    'Appointment Time',
    'issue',
    'Join video call'
];

const renderHead = (item, index) => <th key={index}>{item}</th>



const mapState = (state) => ({
    currentUser: state.user.currentUser,
    appointments:state.appointments.appointments,
    showVideoModal:state.appointments.showVideoModal
});

function CustomerMeeting() {
    const dispatch = useDispatch();
    const {currentUser,appointments,showVideoModal} = useSelector(mapState);
    useEffect(() => {
        dispatch(
            fetchAppointmentsStarting({
                key:'patientID',
                value:currentUser.id
            })
        )
    },[]);

    const handleToggleModal = () => {
        dispatch(showVideoModalStart(!showVideoModal));
    }

    const setVideoCall = (item) => {
        dispatch(showVideoModalStart(!showVideoModal));
        dispatch(setAppointmentStart(item));
    }

    const renderBody = (item, index) => (
        <tr key={index}>
            <td>{new Date(item.date).toDateString()}</td>
            <td>{item.doctorName}</td>
            <td>{item.time}</td>
            <td>{item.issue}</td>
            <td><button className='videoCallBtn' onClick={() => setVideoCall(item)}>Join</button></td>
        </tr>
    )
  return (
    <div>
        {showVideoModal && <VideoCall handleToggleModal={handleToggleModal} />}
        <h2 className='page-header'>View your current appointments</h2>
        <div className='row'>
            <div className='col-12'>
                <div className='card'>
                    <div className='card__body'>
                        {appointments.length > 0 ?
                        <Table
                            headData={MeetingTableHead}
                            renderHead={(item,index) => renderHead(item,index)}
                            bodyData={appointments}
                            renderBody={(item,index) => renderBody(item, index)}
                        />: 
                        <div>No appointment found or wait .....</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerMeeting