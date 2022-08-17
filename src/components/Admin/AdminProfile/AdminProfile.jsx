import React from 'react'
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import TimePicker from 'react-time-picker';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { deleteDateOnLeave, deleteTimeSlots, setDateOnLeave, setTimeSlotsStart } from '../../../redux/doctorCalendar/doctorCalendar.action';
import './AdminProfile.css';
import { getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import { auth, firebaseApp } from '../../../firebase/utils';
import { updateDoctorStart } from '../../../redux/Doctors/doctors.action';


const mapState = (state) => {
  return {
    currentUser: state.user.currentUser,
    currentDoctor: state.doctors.currentDoctor,
    timeSlots: state.doctorCalendar.timeSlots,
    DateOnLeave: state.doctorCalendar.DateOnLeave
  }
  
}
function AdminProfile() {
  const [specialize, setSpecialize] = useState('Neurosurgeon');
  const {timeSlots,DateOnLeave,currentDoctor,currentUser} = useSelector(mapState);
  const [selectLive, setSelectLive] = useState(true);
  const [profileImage, setProfileImage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');
  const [freeDay, setFreeDay] = useState('');
  const storage = getStorage(firebaseApp);
  const dispatch = useDispatch();
  const uploadImage = (e) => {
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Profile/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on('state_changed', (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
    },(err) => console.log(err), () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setProfileImage(downloadURL);
      })
    })
  }

  const handleTimeSlot = () => {
    const checkExistingTime = timeSlots.find((timeSlot) => timeSlot.time === time);
    let mytime = `${time}`; 
    if(time == '') {
      toast.warn('Pick a time slot',{position: "top-right"});
    }else if(checkExistingTime) {
      toast.warn('Time already added.. pick again',{position: "top-right"});
    }
    else {
      //setTimeSlots([...timeSlots,{time:mytime}]);
      dispatch(setTimeSlotsStart({time:mytime}))
    } 
  }

  const handleFreeDay = () => {
    const checkExistingFreeDay = DateOnLeave.find((day) => day === format(freeDay, 'PP'));
    if(freeDay == '') {
      toast.warn('Pick a free day',{position: "top-right"});
    }else if(checkExistingFreeDay) {
      toast.warn('Day already added... pick again',{position: "top-right"});
    }else {
      dispatch(setDateOnLeave(format(freeDay, 'PP')));
    }
  }

  const handleDeleteTimeSlots = (time) => {
    dispatch(deleteTimeSlots(time))
  }

  const handleDeleteFreeDay = (day) => {
    dispatch(deleteDateOnLeave(day));
  }

  const handleDocForm = (e) => {
    e.preventDefault();
    
    if(profileImage == '') {
      setProfileImage(currentDoctor.doctorImage);
    }else{
      dispatch(updateDoctorStart({
        doctorName: currentUser.displayName,
        doctorEmail: currentUser.email,
        specialization: specialize,
        doctorImage:profileImage,
        isLive:selectLive,
        timeSlot:timeSlots,
        dateOnLeave:DateOnLeave
      }));
    }
  }


  return (
    <div className='row'>
        <div className='col-8'>
          <div className='card'>
            <div className='card__header'>
              <h3>Doctor profile</h3>
            </div>
            {currentDoctor && (
              <form onSubmit={handleDocForm}>
                <div className='card__body'>
                  View, modify and save your personal information on farma Full name
                  <div className='update_account'>
                    <div className='form_group'>
                      <label>Name</label>
                      <input type='text' placeholder='Enter Name' value={currentUser.displayName} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='form_group'>
                      <label>Email</label>
                      <input type='text' placeholder='Enter Email' value={currentUser.email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    
                  </div>
                </div>
                <div className='card__header'>
                  <h3>Doctor specialization</h3>
                  <div className='doctorForm'>
                    <div className='form_group'>
                      <label>
                        Pick your specialization:
                        <select value={specialize} className="select_spec" onChange={(e) => setSpecialize(e.target.value) } >
                          <option className='select_opt' value="Neurosurgeon">Neurosurgeon</option>
                          <option className='select_opt' value="Dentist">Dentist</option>
                          <option className='select_opt' value="Nurse">Nurse</option>
                          <option className='select_opt' value="Opthamologist">Opthamologist</option>
                        </select>
                      </label>
                    </div>
                    <div className='form_group'>
                        <label>Mode:</label>
                        <div className="toggle-container" onClick={() => {
                          setSelectLive(!selectLive);
                          }}>
                          <div className={`dialog-button ${selectLive ? "" : "disabled"}`}>
                            {selectLive ? "online" : "offline"}
                          </div>
                        </div>
                    </div>
                    <div className='form_group'>
                      <div className='profile_img'><img src={currentDoctor.doctorImage} /></div>
                      <input type="file" name='upload_image' onChange={uploadImage}  />
                    </div>
                    <button type='submit' className='submit_btn'>Submit</button>
                  </div>
                </div>
              </form>
            )}
            
          </div>
        </div>
        <div className='col-4'>
          <div className='card'>
              <div className='card__header'>
                <h3>Time Slot</h3>
              </div>
              <div className='card__body'>
                Add your daily Time Slot
                <div>
                  <TimePicker  value={time} onChange={setTime} />                 
                </div>
              </div>
              <div>
                <button className='time_btn' onClick={handleTimeSlot}>Add Time slot</button>
              </div>
              <div className='time_slots'>
                { timeSlots.length > 0 &&
                  timeSlots.map((timeslot) => {
                    return (
                      <>
                      <div className='time_container'>
                        <div className='time'>{timeslot.time}</div>
                        <FaTimes className='delete_btn' onClick={() => handleDeleteTimeSlots(timeslot.time)} />
                      </div>
                      
                      </>
                    )
                  })
                }
              </div>
              
          </div>
          <div className='card'>
              <div className='card__header'>
                <h3>Free Day</h3>
              </div>
              <div className='card__body'>
                Set the day you will be on leave 
                <div>
                  <DayPicker
                    mode="single"
                    selected={freeDay}
                    onSelect={setFreeDay}
                    style={{transform:'scale(0.7)',position:'relative',left:'-20%'}}
                  />
                </div>
              </div>
              <div>
                <button className='free_day_btn' onClick={handleFreeDay}>Add</button>
              </div>
              <div className='on_leave'>
                { DateOnLeave.length > 0 &&
                  DateOnLeave.map((day) => {
                    return (
                      <>
                      <div className='day_container'>
                        <div className='day'>{day}</div>
                        <FaTimes className='delete_btn' onClick={() => handleDeleteFreeDay(day)} />
                      </div>
                      
                      </>
                    )
                  })
                }
              </div>
          </div>
        </div>
      </div>
  )
}

export default AdminProfile