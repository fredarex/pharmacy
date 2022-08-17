import React from 'react';
import { Link } from 'react-router-dom';
import {shop_back,product_1,product_2} from '../../constant/Image';

function HomeShop(props) {
  return (
    <div className='HomeShopContainer' data-scroll>
        <div className='shop_header'>
          <div className='spanText'>
            <p>YOUR</p> 
            <p style={{position:'relative',left:'5%'}}>PERSONALIZED</p>
            <p>DRUGS TO </p> 
            <p style={{position:'relative',left:'5%'}}>IMPROVE</p>
            <p>YOUR HEALTH.</p>
          </div>
          <div className='good_doc_image'></div>
        </div>
        <div className='shop_cat'>
          <div className='shop_top_header'>
            <h3>Health care</h3> <span className='underlined'></span>
          </div>
          <div className='shop_list'>
            <div className='items_background'>
              <img src={shop_back}/>
            </div>
            <div className='products'>
                <div className='product_item'>
                  <img src={product_1} />
                  <div className='product_description'>
                    <div className='product_info'>
                      <h1>Oral care kit</h1>
                      <span className='product_price'>$60</span>
                    </div>
                    <div className='product_link'>
                      <button className='add_to_cart'>Add To Cart</button>
                      <Link>See More</Link>
                    </div>
                  </div>
                </div>
                <div className='product_item'>
                  <img src={product_2} />
                  <div className='product_description'>
                    <div className='product_info'>
                      <h1>Vitamin-c syrup</h1>
                      <span className='product_price'>$5</span>
                    </div>
                    <div className='product_link'>
                      <button className='add_to_cart'>Add To Cart</button>
                      <Link>See More</Link>
                    </div>
                  </div>
                </div> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeShop