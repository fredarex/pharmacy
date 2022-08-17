import React from 'react'
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Routes from '../../Routes/Routes';
import '../../assets/css/grid.css';
import '../../assets/css/index.css';
import '../../assets/boxicons-2.0.7/css/boxicons.min.css';
import './AdminPanel.css';
import TopNav from '../../components/TopNav/TopNav';
import { AddDoctorStart, getDoctorStart } from '../../redux/Doctors/doctors.action';
import { useDispatch, useSelector } from 'react-redux';
import adminsidebar_items from '../../assets/JsonData/admin_sidebar_routes.json';
const mapState = (state) => {
  return {
    currentUser: state.user.currentUser
}
}

function AdminPanel() {
    const routePath = useLocation();
    const history = useHistory();
    const {currentUser} = useSelector(mapState);
    const dispatch = useDispatch();
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop();
    }, [routePath]);
    useEffect(() => {
      
      const link = adminsidebar_items.find(item => item.route === routePath.pathname);
      if(link){
        history.push(routePath.pathname);
      }else{
        history.push('/admin/dashboard')
      }
  }, []);

  useEffect(() => {
    dispatch(AddDoctorStart(
      { 
        doctorName: currentUser.displayName,
        doctorEmail: currentUser.email,
        specialization:'',
        doctorImage:'',
        isLive:true,
        timeSlot:[],
        dateOnLeave:[]
      }
    ));
  },[]);
  useEffect(() => {
    dispatch(getDoctorStart(currentUser.id));
  },[]);
  return (
    <div className='layout'>
      <Sidebar user="admin" />
      <div className='layout__content'>
        <TopNav/>
        <div className="layout__content-main">
          <Routes user="admin" />
        </div>
      </div>
    </div>
  )
}

export default AdminPanel