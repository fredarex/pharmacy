import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import AppointmentModal from '../../components/AppointmentModal/AppointmentModal';
const mapState = (state) => {
    return{
        currentUser: state.user.currentUser,
        doctors:state.doctors.doctors
    }
}
function DoctorsBooking(props) {
    const {doctors,currentUser} = useSelector(mapState);
    const [doctor, setDoctor] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleBookDoctor = (doctorData) => {
        setShowModal(!showModal);
        setDoctor(doctorData);
    }

    const handleSuccessPayment = () => {
        setShowModal(!showModal);
        toast.success("Appointment Booked successfully", {position: "top-right"});
    }

   

    



  return (
    <>
        
        <div className='doctor_booking'>
            <div className='book_doc'>
                <div className='header'>
                    <h1>Consult Top Doctors Online for Any Health Concerns</h1>
                    <p>Good health is a state of mental physical and social 
                        well being and it does not just mean the absence of disease.
                    </p>
                </div>
                <div className='doctors_section'>
                    <div className='doctors_f_section'>
                        {doctors.map((doc, index) =>(
                            <div className='doctor_profile'>
                                <div className='doc_profile_pic' id={`doc_profile_pic-${index+1}`}>
                                    <img className='pic' src={doc.doctorImage} id={`pic-${index+1}`} />
                                </div>
                                <h4>Dr {doc.doctorName}</h4>
                                <div>
                                    {doc.specialization}
                                </div>
                                <div className='doc_appointment_btn'>
                                    <button onClick={() => handleBookDoctor(doc)}>Book an appointment</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {showModal && <AppointmentModal 
                        handleSuccessPayment={handleSuccessPayment} 
                        doctor={doctor} 
                        handleBookDoctor={handleBookDoctor} 
                    />}
                </div>
            </div>
            
        </div>
    </>
    
  )
}

export default DoctorsBooking