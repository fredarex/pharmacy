import gsap from 'gsap';
import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
function ShopProCard({product}) {
    const history = useHistory();
    const {
        documentID,
        productThumbnail,
        productName,
        productPrice
      } = product;
    const handleDetail = (e) => {
      e.preventDefault();
      history.push(`/detail/${documentID}`);
    }

   
  return (
    <div className='med_pro'>
        <div className='med_img' onClick={handleDetail}>
            <img src={productThumbnail} />
        </div>
        <div className='pro_detail'>
            <Link to={`detail/${documentID}`}>{productName}</Link>
            <span>${productPrice}</span>
        </div>
    </div>
  )
}

export default ShopProCard