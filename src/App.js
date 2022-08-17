import React, { useEffect, useState } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion/dist/framer-motion';
import Loader from './components/loader/Loader';
import { Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';
import Dashboard from './pages/Dashboard/Dashboard';
//hoc
import WithAuth from './hoc/withAuth';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './redux/User/user.actions';
import Admin from './pages/Admin';
import AdminLayout from './layouts/AdminLayout';
import Doctors from './pages/Doctors/Doctors';
import WithAdminAuth from './hoc/withAdminAuth';
import MenuNav from './components/MenuNav/MenuNav';
import Customer from './pages/Customer/Customer';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import AdminPanel from './pages/AdminPanel/AdminPanel';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(checkUserSession());
  }, []);

  
  return (
    <AnimateSharedLayout type='crossfade'>
    <AnimatePresence key='loader'>
      {loading ? (
        <motion.div>
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <ToastContainer/>
          <MenuNav/>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/shop' exact>
            <Shop/>
          </Route>
          <Route path='/detail/:id' exact>
            <Detail />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/customer'>
            <Customer/>
            {/* <WithAuth>
              <Dashboard />
            </WithAuth> */}
          </Route>
          <Route path='/admin'>
            <AdminPanel/>
            {/* <WithAdminAuth>
              <AdminPanel/>
            </WithAdminAuth> */}
          </Route>
          <Route path='/doctors'>
            <Doctors />
          </Route>
        </>
      )}
    </AnimatePresence>
  </AnimateSharedLayout>
  )
}

export default App