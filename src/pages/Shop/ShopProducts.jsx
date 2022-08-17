import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import ShopProCard from '../../components/ShopProCard/ShopProCard';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { CircleLoaderComponent } from '../../components/CircleLoader/CircleLoader';
gsap.registerPlugin(ScrollTrigger);
const mapState = ({products}) => {
  return {
    products: products.products
  }
}

function ShopProducts() {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchProductsStart({
      filter: ['Astha Aid','Vitamin C','Bite Mouth wash']
    }));
  },[]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".prosHeader",{
      color: '#000',
      ease:"back",
      duration:0.01,
      stagger:0,
      scrollTrigger: {
        trigger:".AboutProduct",
        start: 'bottom top',
        scrub:true,
        //scroller: "#shop-container"
      }
    });

    gsap.to(".prosHeader span",{
      color: '#000',
      borderBottom: '2px solid #000',
      borderTop: '2px solid #000',
      ease:"back",
      duration:0.01,
      stagger:0,
      scrollTrigger: {
        trigger:".AboutProduct",
        start: 'bottom top',
        scrub:true,
        //scroller: "#shop-container"
      }
    });

    gsap.to(".stay_safe",{
      borderColor:'#000',
      color: '#000',
      ease:"back",
      duration:0.01,
      stagger:0,
      scrollTrigger: {
        trigger:".AboutProduct",
        start: 'bottom top',
        scrub:true,
       // scroller: "#shop-container"
      }
    });

    gsap.to(".ShopProContainer p",{
      color: '#000',
      ease:"back",
      duration:0.01,
      stagger:0,
      scrollTrigger: {
        trigger:".AboutProduct",
        start: 'bottom top',
        scrub:true,
        //scroller: "#shop-container"
      }
    });    
  
  },[]);

 
  return (
    <div className='ShopProContainer' data-scroll>
      <div className='prosHeader'>
        <span>SHOP FOR PRODUCTS.</span>
      </div>
      <p>Products</p>
      {(!Array.isArray(products)) || products.length < 1 ? 
      <div className="loading_product">
        <CircleLoaderComponent/>
        <p>LOADING PRODUCT.....</p>
      </div>
      :
      <div className='my_products'>
        <div className='products_list'>
          {products.map((product, index) => {
            const { productThumbnail, productName, productPrice } = product;
            if (!productThumbnail || !productName ||
              typeof productPrice === 'undefined') return null;
              const configProduct = {
                ...product
              };
            return (
              <ShopProCard key={index} product={product} />
            );
          })}
        </div>
      </div>
      }    
    </div>
  )
}

export default ShopProducts