import React from 'react'
import './Sidebar.css';
import sidebar_items from '../../assets/JsonData/sidebar_routes.json';
import adminsidebar_items from '../../assets/JsonData/admin_sidebar_routes.json';
import { farma_logo } from '../../constant/Image';
import { Link, useLocation } from 'react-router-dom';
import SidebarItem from '../SidebarItem/SidebarItem';
function Sidebar(props) {
  const location = useLocation();

  let activeItem = '';

  if(props.user === 'admin') {
    activeItem = adminsidebar_items.findIndex(item => item.route === location.pathname);
  }else{
    activeItem = sidebar_items.findIndex(item => item.route === location.pathname);
  }
  
  
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
        <img src={farma_logo} />
      </div>
      {props.user === 'admin' ? 
        adminsidebar_items.map((item, index) => (
            <Link to={item.route} key={index}>
              <SidebarItem
                title={item.display_name}
                icon={item.icon}
                active={index === activeItem}
              /> 
            </Link> 
          )):
          sidebar_items.map((item, index) => (
            <Link to={item.route} key={index}>
              <SidebarItem
                title={item.display_name}
                icon={item.icon}
                active={index === activeItem}
              /> 
            </Link> 
          ))}
      
    </div>
  )
}

export default Sidebar