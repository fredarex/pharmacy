import styled from 'styled-components';
import { COLORS, SIZES } from '../../constant/theme';

export const DetailContainer = styled.div`
    position: relative;
    height: 100%; 
    overflow:hidden;
    .detail_background {
        background: #FFFCF4;
    }
    .top_section {
        padding: 0 ${SIZES.padding};
        padding-top: 30px;
    }
    .LandingContainer {
        margin-top: 60px;
        position:relative;
        display:flex;

        @media screen and (max-width: 1347px) {
           // background: green;
            width: 100vw;
            
            justify-content:space-between;
        }

        @media screen and (max-width: 880px) {
            flex-direction:column-reverse;
            justify-content:center;
            margin-top: 0px;
        }
    
    }

    .pro_image {
        width: 50%;

        @media screen and (max-width: 1347px) {
            transform: scale(0.8);
        }

        @media screen and (max-width: 1035px) {
            transform: scale(0.6);
            
        }
        @media screen and (max-width: 880px) {
            transform: scale(0.8);
        }

        @media screen and (max-width: 560px) {
            transform: scale(0.7);
        }
        
    }

    .detail_img{
        position:relative;
        width: 600px;
        height: 600px;
        border: 1px solid #000;
        //background: #fff;
        //box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.3);
        border-radius: 50%;
       
    }
    .detail_img img {
        position: absolute;
        width:600px;
        left: 2%;
        top:-10%;
        //transform: rotateZ(40deg);

    }

    .product_details {
        display:flex;
        flex-direction:column;
        justify-self:flex-end;
        @media screen and (max-width: 1347px) {
            transform: scale(0.8);
        }

       
    }

    .product_details .pro_title{
        font-size: 72px;
        font-weight: 700;
    }

    .product_details .pro_desc{
        max-width: 700px;
        font-size:25px;
    }

    .usability h3{
        font-size: 30px;
    }
    usability p {
        font-size:25px;
    }
    .note {
        margin-top: 30px;
        font-size: 25px;
        border-bottom: 2px solid #000;
    }

    .pro_price {
        margin-top: 30px;
        width: 400px;
        height: 400px;
        background: lightgray;
        border-radius: 20px;
    }

    .price_tag {
        display:flex;
        justify-content: space-between;
        padding: 20px;
        width: 100%;
        border-bottom: 1px solid #000;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;

    }

    .price_tag h5{
        font-size: 24px;
    }

    .price_tag span{
        font-size: 24px;
    }

    .ingredientContainer {
        padding-top: 12rem;

    }

    .igt_header {
        font-size: 290px;
        max-width: 900px;
        margin-left: 100px;
        line-height: 0.8;
        margin-bottom: 40px;
        @media screen and (max-width: 1087px) {
            font-size: 260px;
        }
        @media screen and (max-width: 960px) {
            font-size: 240px;
        }
        @media screen and (max-width:900px) {
            font-size: 200px;
        }
        @media screen and (max-width: 800px) {
            font-size: 160px;
        }
        @media screen and (max-width: 650px) {
            margin-left: 50px;
            font-size: 120px;
        }
    }
    


    .ingredients_items {
        display:flex;
        flex-direction:column;
        min-height: 40vh;
        width:100%;

       
    }

    .my_ingredient {
        border-bottom: 1px solid #000;
        width: 80%;
        display:flex;
        flex-direction: column;
        align-self:center;
        justify-content: center;


    }
    .my_ingredient:nth-child(1) {
        border-top: 1px solid #000;
    }

    .my_ingredient .wrap {
        display:flex;
        justify-content: space-between;
    }

    .ingredient_name {
        font-size: 50px;
        text-transform: uppercase;
        padding-bottom: 20px;

    }

    .toggleicon {
        margin-top: 30px;
    }

    .my_ingredient .answer {
        padding-top: 4px;
        font-size: 24px;
        padding-bottom: 10px;
    }
    .info_1, .p_size, .pro_quantity,.guarantee {
        margin: 3px 20px;

        font-size: font-size: 24px;
    }



    .p_size {
        display:flex;
        justify-content: space-between;
        font-size: 24px;
    }

    .pro_quantity {
        margin-top: 20px;
    }


    .qty {
        display:flex;
        align-items: center;

    }

    .qty_no {
        margin:0 5px;
    }

    .qty button {
        border:none !important;
        outline: none !important;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .guarantee {
        margin-top: 20px;
    }

    .gre_item{
        font-weight: bold;
        margin-bottom: 10px;
    }

    .gre_item {
        display:flex;
        color: #2A2A2A;
    }

    .gre_text {
        font-size: 18px;
        margin-left: 15px;
    }


    .cart_item {
        width: 100%;
        height: 50px;
        background: #000;
        color: #fff;
        margin-top: 30px;
        border-radius:20px;
        font-size:24px;
        cursor:pointer;

        &:hover {
            border:2px solid #000;
            background: transparent;
            color: #000;
        }
    }

    .commentsContainer{
        position:relative;
        display:flex;
        align-items: center;
        color: #fff;
        min-height: 100%;
        padding-bottom: 10rem;
        @media screen and (max-width: 960px) {
            justify-content:center;
        }
    }


    .commentBadge {
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center;
        width:500px;
        height: 500px;
        font-size: 40px;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 50%;
        @media screen and (max-width: 1115px) {
            transform: scale(0.8);
        }
        @media screen and (max-width: 960px) {
            transform: scale(1);
        }

        @media screen and (max-width: 600px) {
            transform: scale(0.7);
        }

    }

    .comments {
        display:flex;
        position:absolute;
        left:25%;

        @media screen and (max-width: 1469px) {
            top: 50%;

        }
        @media screen and (max-width: 1115px) {
            transform: scale(0.8);
        }

        @media screen and (max-width: 960px) {
            transform: scale(1);
            flex-direction:column;
        }
        @media screen and (max-width: 600px) {
            transform: scale(0.7);
        }

    }

    .comment_item{
        width: 350px;
        border-radius: 10px;
        margin-right: 50px;
        padding: 20px;
        height: 250px;
        background: #fff;
        color: #000;
    }

    .comment_item:nth-child(1) {
        transform: rotateZ(5deg);
    }

    .comment_item:nth-child(2) {
        transform: rotateZ(-5deg);
    }

    .comment_statement{
        font-size: 30px;
    }


    
.marquee {
    color: #fff;
    width: 100%;
    min-height: 5vh;
    //background:red;
    //height: 20vh;

    position: relative;
    
  }

  .marquee_text {
    @media screen and (max-width: 960px) {
        margin-top: 20rem;
       }
  }


  #text-container h1 {
    width:100%;
    height: 100%;
    text-transform: uppercase;
    white-space: nowrap;
    font-size: min(24px, 10vmin);
  }
  
  #text-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  #text {
     
      position: absolute;
      left: 0px;
  }

  #text1 {
     
    position: absolute;
    right:0px;
}
`;