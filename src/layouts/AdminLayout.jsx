import React, { useEffect } from 'react'
import { AdminContainer } from './AdminLayoutStyled';
import {HeaderColor} from '../redux/feature/feature.actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VerticalNav from '../components/VerticalNav';
import { Link } from 'react-router-dom';
import { signOutUserStart } from '../redux/User/user.actions';
import { useDispatch } from 'react-redux';
import Header from '../components/Header/Header';
function AdminLayout(props) {
    useEffect(() => {
        props.HeaderColor();
      },[]);

      const dispatch = useDispatch();

      const signOut = () => {
        dispatch(signOutUserStart());
      };
  return (
    <AdminContainer id='admin-container'>
        <div className='admin_content'>
            <div className='controlPanel'>
                <div className='sidebar'>
                    <VerticalNav>
                        <ul>
                            <li>
                                <Link to='/admin'>Home</Link>
                            </li>
                            <li>
                                <span className='signOut' onClick={() => signOut()}>Sign Out</span>
                            </li>
                        </ul>
                    </VerticalNav>
                </div>
                <div className='content'>
                    {props.children}
                </div>
            </div>   
        </div>
        
    </AdminContainer>
  )
}

const mapStateToProps = (state) => {
    return {
      setColor: state.features.headersColor.setColor,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({HeaderColor},dispatch)
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(AdminLayout)