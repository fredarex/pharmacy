import React from 'react'
import {immunity} from '../../constant/Image';
import {FiPlus,FiMinus,FiShield,FiSettings} from 'react-icons/fi'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductStart, setProduct } from '../../redux/Products/products.actions';
import { addProduct } from '../../redux/Cart/cart.actions';
import { toast } from 'react-toastify';

const mapState = state => ({
  product: state.products.product
});

function DetailLanding() {
  const history = useHistory();
  const dispatch = useDispatch();
  const {product} = useSelector(mapState);
  const {id} = useParams();
  const {
    productName,
    productDesc,
    productUsage,
    productThumbnail,
    productPrice,
    productSize
  } = product;
  useEffect(() => {
    dispatch(fetchProductStart(id));

    return () => {
      dispatch(
        setProduct({})
      )
      }

  },[])
  

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
    toast.success("Added to cart", {position: "top-right"});
  };

  return (
    <div className='detailLand'>
        <div className='LandingContainer'>
          <div className='pro_image'>
            <div className='detail_img'>
              <img src={productThumbnail} />
            </div>
          </div>
          <div className='product_details'>
              <div className='pro_title'>{productName}</div>
              <div className='pro_desc'>
                {productDesc}
              </div>
              <div className='usability'>
                  <h3>How to use it</h3>
                  <p>{productUsage}</p>
              </div>
              <div className='note'>PREVENT SICKNESS</div>
              <div className='pro_price'>
                <div className='price_tag'>
                  <h5>PURCHASE</h5>
                  <span>${productPrice}</span>
                </div>
                <p className='info_1'>Same day delivery available</p>
                <div className='p_size'>
                  <h6>Package Size</h6>
                  <span>{productSize}ml</span>
                </div>
                {/* <div className='pro_quantity'>
                  <div>QUANTITY</div>
                  <div className='qty'>
                    <button className='inc_qty'><FiMinus /></button>
                    <div className='qty_no'>1</div>
                    <button className='desc_qty'><FiPlus /></button>
                  </div>
                </div> */}
                <div className='guarantee'>
                  <div className='gre_item'>
                    <FiShield color='' />
                    <div className='gre_text'>
                      <p>90 - Day Buyer Protection</p>
                      <p>Money back guarantee</p>
                    </div>
                  </div>
                  <div className='gre_item'>
                    <FiSettings color='' />
                    <div className='gre_text'>
                      <p>Sanitized & Packaged Safely</p>
                      <p>Choose for contactless delivery</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              <button className='cart_item' onClick={() => handleAddToCart(product)}>ADD TO CART</button>
          </div>
        </div>
       
    </div>
  )
}

export default DetailLanding