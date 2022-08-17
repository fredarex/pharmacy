import styled from 'styled-components';
import { COLORS, SIZES } from '../../constant/theme';


export const CartContainer = styled.div`
    overflow-x:hidden;
    position:relative;
    width: 100%;
    background: #fff;
    .top_section {
        padding: 0 ${SIZES.padding};
        padding-top: 30px;
    }

    .cart_content {
        width: 100%;
    }
   
    .top_header {
        padding: 20px 100px;
        width: 100%;
        background: #000;
        display:flex;
        color: #fff;
        justify-content: space-between;
       
    }
    .top-header span{
        font-size: 24px;
        
    }

    .top-l-header span:nth-child(1){
        margin-right: 40px;
    }
    .cart_section {
        padding-top: 15px;
        width: 100%%;
        display:flex;
        //background: green;
        justify-content:center;
        @media screen and (max-width: 1029px) {
            flex-direction:column;
        }
    }

    .shopping_link{
        display:flex;
        width: 220px;
        border: 1px solid #000;
        border-radius: 40px;
        padding: 10px;
        margin-bottom: 5px;
        font-size: 18px;
        cursor:pointer;
        &:hover{
            background:linear-gradient(315.01deg,#0A004B 31%,#0A004B 88.22%);
            color: #fff;
        }
        @media screen and (max-width: 1029px) {
            margin: 0 40px;
            
        }
    }

    .cart_t_header{
        margin-bottom: 20px;
        @media screen and (max-width: 1029px) {
            margin: 0 40px;
            margin-bottom: 20px;
            
        }
    }
    .cart_l_section{
        width: 40%;
        @media screen and (max-width: 1029px) {
            width: 80%;
        }
    }
    .cart_items{
        //width: 60%;
    }

    .cart_card {
        width:100%;
        min-height: 300px;
        display:flex;
        justify-content: space-between;
        border: 1px solid #000;
        border-radius: 20px;
        padding: 20px;
        margin-bottom: 20px;
        @media screen and (max-width: 1029px) {
            margin: 0 40px;
            margin-bottom: 20px;
        }
    }

    .item_img{
        width: 100px;
        height: 100px;
        padding-top: 10px;
        padding-left: 10px;
        border-radius: 30px;
        border: 1px solid #000;
       
    }

    .item_img img{
        width: 80px;
    }

    .item_desc{
        max-width:700px;
        margin: 0 20px;
    }

    .item_desc h6{
        font-size: 20px;
    }
    .item_qty{
        margin-top: 20px;
    }

    .qty {
        display:flex;
        align-items:center;
        margin-top: 10px;
        
    }
    .qty_button {
        cursor:pointer;
    }

    .qty div {
        margin: 0 20px;
        
    }

    .item_price{
        margin: 10px 0;
        font-weight:bold;

    }

    .delete_cart_item {
        cursor:pointer;
    }

    .cart_r_section{
        min-width: 400px;
        height: 300px;
        margin-left: 20px;
        border: 1px solid #000;
        border-radius: 20px;
        //background: darkgreen;

        @media screen and (max-width: 1029px) {
            max-width: 400px;
            margin: 0 40px;
        }

        
    }

    .checkout_card{
        padding: 30px 0;
    }

    .chk_sum{
        margin: 0 10px;
        padding-bottom: 30px;
        border-bottom: 1px solid #000;
    }

    chk_sum h3{
        font-size: 30px;
    }

    .sub_tot,.tot{
        display:flex;
        justify-content: space-between;
    }

    .chk_bottom_sec{
        margin: 0 10px;
        padding-bottom: 30px;
        display:flex;
        flex-direction:column;
        
    }

    .place_ord{
        background:linear-gradient(315.01deg,#0A004B 31%,#0A004B 88.22%);
        color: #fff;
        width: 300px;
        border-radius: 40px;
        padding: 15px;
        display:flex;
        align-self:center;
        margin-top: 30px;
        justify-content:center;
        align-items:center;
        text-align:center;
        border:none;
        outline:none;
        cursor:pointer;
    }

    /* cart question */
    .cart_question {
        //background: red;
        display:flex;
        justify-content:center;
        margin-top: 10rem;
        @media screen and (max-width: 1020px) {
            flex-direction:column;
        }
    }
    .cart_q_header {
        width: 20%;
        font-size: 30px;
        font-weight: bold;
        @media screen and (max-width: 1136px) {
            transform: scale(0.8);
        }
        @media screen and (max-width: 1020px) {
            width: 100%;
            display:flex;  
        }
        
    }

    .cart_faq{
        min-width: 700px;
        display:flex;
        justify-content: space-around;
        @media screen and (max-width: 1136px) {
            transform: scale(0.8);
        }
        @media screen and (max-width: 679px) {
            flex-direction:column;
            align-items:center;
            width: 100%;
            transform: scale(1); 
            justify-content:center;
            padding-top: 50px;
        }
        
        

    }

    .faq_col_1, .faq_col_2{
        width: 40%;
        @media screen and (max-width: 679px) {
            
            width: 100%;
        }
    }

    .faq{
        max-width:400px;
        margin-bottom: 10px;
        @media screen and (max-width: 679px) {
            width: 80%;
            margin-left: 50px;
        }
        
        
    }

    .faq h4{
        font-size: 20px;
        margin-bottom: 12px;
    }

    .faq p {
        line-height: 1.5;
        
    }

    /* end of cart question */



`;