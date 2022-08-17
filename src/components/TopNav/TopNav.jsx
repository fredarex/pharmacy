import React from 'react'
import './TopNav.css';
import Dropdown from '../Dropdown/Dropdown';
import notifcations from '../../assets/JsonData/notification.json';
import userIMG from './../../assets/user.png';

const curr_user = {
    display_name: 'demo_user',
    image: userIMG
}

const renderUserToggle = (user) => (
    <div className='topnav__right-user'>
        <div className='topnav__right-user__image'>
            <img src={user.image} />
        </div>
        <div className='topnav__right-user__name'>
            {user.display_name}
        </div>
    </div>
)

const renderNotificationItem = (item, index) => ((
    <div className='notification-item' key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
))

function TopNav() {
  return (
    <div className='topnav'>
        <div className='topnav__right'>
            <div className='topnav__right-item'>
                <Dropdown
                    customToggle={() => renderUserToggle(curr_user)}
                />
                {/* dropdown here */}
            </div>
            <div className='topnav__right-item'>
                <Dropdown
                    icon='bx bx-bell'
                    badge='12'
                    contentData={notifcations}
                    renderItems={(item, index) => renderNotificationItem(item, index)}
                />
                {/*  */}
            </div>
            <div className='topnav__right-item'>
                <Dropdown />
                {/* theme setting */}
            </div>
        </div>
    </div>
  )
}

export default TopNav