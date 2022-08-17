import moment from 'moment';
import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Table from '../../components/Table/Table';
import { getUserOrderHistory } from '../../redux/Orders/orders.action';

const orderTableHead = [
    'Order Date',
    'Order ID',
    'Amount'
];

const orderList = [
    {
        orderDate: '12, sep 1202',
        orderID: '124443E4',
        amount:'$12'
    }
]
const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        {/* <td>12,33</td>
        <td>12</td>
        <td>$12</td> */}
        <td>{item.orderCreatedDate}</td>
        <td>{item.orderUserID}</td>
        <td>${item.orderTotal}</td>
    </tr>
)

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    orderHistory: state.orders.orderHistory.data
});


function Orders(props) {
    const dispatch = useDispatch();
    const {currentUser,orderHistory} = useSelector(mapState);
    useEffect(() => {
        dispatch(
            getUserOrderHistory(currentUser.id)
        )
    },[]);
   
  return (
    <div>
        <h2 className='page-header'>Orders History</h2>
        <div className='row'>
            <div className='col-12'>
                <div className='card'>
                    <div className='card__body'>
                        {orderHistory && 
                        <Table
                            limit='10'
                            headData={orderTableHead}
                            renderHead={(item,index) => renderHead(item,index)}
                            bodyData={orderHistory}
                            renderBody={(item,index) => renderBody(item, index)}
                        /> }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Orders