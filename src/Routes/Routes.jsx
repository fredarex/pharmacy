import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminDashboard from '../components/Admin/AdminDashboard/AdminDashboard'
import AdminProducts from '../components/Admin/AdminProducts/AdminProducts'
import AdminProfile from '../components/Admin/AdminProfile/AdminProfile';
import Chat from '../components/Chat/Chat';
import CustomerMeeting from '../components/Customer/CustomerMeeting/CustomerMeeting';
import Dashboard from '../pages/Dashboard/Dashboard'
import Orders from '../pages/Orders/Orders'

function Routes(props) {
  if (props.user === 'customer'){
    return (
      <Switch>
        <Route path='/customer/dashboard' exact component={Dashboard} />
        <Route path='/customer/notification' />
        <Route path='/customer/orders' component={Orders} />
        <Route path='/customer/meeting' component={CustomerMeeting} />
        <Route path='/customer/chat' component={Chat} />
      </Switch>
    )
  }else {
    return (
      <Switch>
        <Route path='/admin/dashboard' exact component={AdminDashboard} />
        <Route path='/admin/products' component={AdminProducts} />
        <Route path='/admin/profile' component={AdminProfile} />
      </Switch>
    )
  }
  
}

export default Routes