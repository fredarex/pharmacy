import React, { useEffect } from 'react'
import {IoIosMale,IoIosMedkit} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addProduct } from '../../redux/Cart/cart.actions';
import { fetchProductStart, setProduct } from '../../redux/Products/products.actions';

const mapState = state => ({
  product: state.products.product
});
function ShopAbout() {
     
  const dispatch = useDispatch();
  const {product} = useSelector(mapState);
  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    )
    toast.success("Added to cart", {position: "top-right"});
  };

  useEffect(() => {
    dispatch(fetchProductStart('1657136888422'));
    return () => {
      dispatch(
        setProduct({})
      )
      }
  },[]);
  return (
    <div className='AboutProduct' data-scroll>
      <div className='safety'>
        <div className='stay_safe'>
            <span>STAY <br /> HEALTHY <IoIosMale color='yellow' /></span>
            <br />
            <p><IoIosMedkit color='#FF4F4F' />NOT <br />SICK</p>
        </div>
      </div>
        
        <div className='product'>
            <div className='pro_text'>
              <span className='subtitle'>Astha aid help to prevent chest disease</span>
              <div className='maintitle'>
                <h4>BE PROACTIVE <br /> ABOUT YOUR HEALTH</h4>
                <p>
                  Astha kills every chest infection,<br />
                  prevention is better boost your health <br /> with Astha
                </p>
                <button onClick={() => handleAddToCart(product)}>ADD TO CART </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ShopAbout