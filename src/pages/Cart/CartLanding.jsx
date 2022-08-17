import { documentId } from 'firebase/firestore';
import React from 'react'
import {FiShield,FiArrowLeft,FiMinusCircle,FiPlusCircle, FiDelete} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { addProduct, clearCart, reduceCartItem, removeCartItem } from '../../redux/Cart/cart.actions';
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/Cart/cart.selectors';
import PaystackPop  from '@paystack/inline-js';
import { currentUser } from '../../redux/User/user.selector';
import { useEffect } from 'react';
import { saveOrderHistory } from '../../redux/Orders/orders.action';
import { toast } from 'react-toastify';
import { truncate } from '../../Utils';
const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    currentUser: currentUser,
    totalNumCartItems:  selectCartItemsCount
})


function CartLanding() {
    const dispatch = useDispatch();
    const {cartItems, total,currentUser,totalNumCartItems} = useSelector(mapState);
    const history = useHistory();
    // useEffect(() => {
    //     if (totalNumCartItems < 1){
    //         history.push('/customer/orders');
    //     }
    // },[totalNumCartItems]);
    

    const handleRemoveCartItem = (documentID) =>  {
        dispatch(
            removeCartItem(documentID)
        )
        toast.success("Removed from cart", {position: "top-right"});
    }

    const handleAddProduct = (product) => {
        dispatch(
            addProduct(product)
        )
    }
    const handleReduceCartItem = (product) => {
        dispatch(
            reduceCartItem(product)
        )
    }
    const handleCheckout = () => {
        if(!currentUser) {
            toast.warn("login as a demo user", {position: "top-right"});
        }else{
        const paystack = new PaystackPop();
            paystack.newTransaction({
                key: "pk_test_0f4c88657df9780572e4550cb9306176d81d0c04",
                amount: total * 500 * 100,
                email: currentUser.email,
                firstname: currentUser.displayName,
                onSuccess(transaction) {
                   
                    const configOrder = {
                        orderTotal: total,
                        orderItems: cartItems.map(item => {
                            const {documentID, productThumbnail, productName, productPrice, quantity} = item;
                            return {
                                documentID,
                                productThumbnail,
                                productName,
                                productPrice,
                                quantity
                            };
                        })
                    }
                    dispatch(
                        saveOrderHistory(configOrder)
                    );
                }
            })
        }
    }
  return (
    <div className='cart_landing'>
        <div className='top_header'>
            <div className='top-l-header'>
                <span>Cart</span>
                <span>Checkout</span>
            </div>
            <div className='top-r-header'>
                <FiShield/>
                <span>100% secure</span>
            </div>
        </div>
        <div className='cart_section'>
            <div className='cart_l_section'>
                <div className='shopping_link' onClick={() => {history.push('/shop')}}>
                    <FiArrowLeft />
                    <div>Continue Shopping</div>
                </div>
                <div className='cart_t_header'>
                    <h2>Your Cart</h2>
                    <p>You have {cartItems.length <= 0 ? '0' : `${totalNumCartItems}` } item(s) in your cart</p>
                </div>
                <div className='cart_items'>
                    {cartItems.length > 0 && (
                        cartItems.map((cartItem,index) => {
                            return (
                                <div className='cart_card' key={index}>
                                    <div className='item_img'>
                                        <img src={cartItem.productThumbnail}  />
                                    </div>
                                    <div className='item_desc'>
                                        <h6>{cartItem.productName}</h6>
                                        <div className='item_price'>${cartItem.productPrice}</div>
                                        <p>{truncate(cartItem.productDesc,100)}</p>
                                        <div className='item_qty'>
                                            <h4>Quantity</h4>
                                            <div className='qty'>
                                                <FiMinusCircle className='qty_button' size={25} onClick={() => handleReduceCartItem(cartItem)} />
                                                <div>{cartItem.quantity}</div>
                                                <FiPlusCircle className='qty_button' size={25} onClick={() => handleAddProduct(cartItem)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => handleRemoveCartItem(cartItem.documentID)}>
                                        <MdDelete className='delete_cart_item' color='rgb(197, 0, 0)'size={20}  />
                                    </div>
                                </div>
                            )
                        })
                    )}
                    
                </div>
            </div>
            <div className='cart_r_section'>
                <div className='checkout_card'>
                    <div className='chk_sum'>
                        <h3>Order Summary</h3>
                        <div className='sub_tot'>
                            <span>Subtotal</span>
                            <span>${total}</span>
                        </div>
                    </div>
                    <div className='chk_bottom_sec'>
                        <div className='tot'>
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                        <button className='place_ord' onClick={handleCheckout}>Place Order</button>
                    </div>
                    
                </div>
            </div>  
        </div>
    </div>
  )
}

export default CartLanding