import React from 'react'
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Routes from '../../Routes/Routes';
import '../../assets/css/grid.css';
import '../../assets/css/index.css';
import '../../assets/boxicons-2.0.7/css/boxicons.min.css';
import './Customer.css';
import sidebar_items from '../../assets/JsonData/sidebar_routes.json';
import TopNav from '../../components/TopNav/TopNav';

function Customer() {
    const routePath = useLocation();
    const history = useHistory();
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop();
    }, [routePath]);
    useEffect(() => {
      const link = sidebar_items.find(item => item.route === routePath.pathname);
      if(link){
        history.push(routePath.pathname);
      }else{
        history.push('/customer/dashboard')
      }
  }, []);
  return (
    <div className='layout'>
      <Sidebar />
      <div className='layout__content'>
        <TopNav/>
        <div className="layout__content-main">
          <Routes user="customer" />
        </div>
      </div>
    </div>
  )
}

export default Customer