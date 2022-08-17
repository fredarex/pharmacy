import styled from "styled-components";
import { COLORS, SIZES } from "../../constant/theme";
export const HomeContainer = styled.div`
    position: relative;
    width: 100%;
    max-height: 100%;
    .HomeContent {
        position:relative;
        width: 100%;
        max-height: 100%;
    }
    .background_blue{
        position:relative;
        background: #0A004B;
        width: 100%;
        height: 100%;
    }
    
    .homeLanding {
        background-image: url(${process.env.PUBLIC_URL + `/homeLanding.svg`}) ;
        //background-repeat:no-repeat;
        //background:#0A004B;
        //background: #FF4F4F;
        //background: ${COLORS.lightblue};
        background-size: cover;
        width: 100%;
        height: 140vh;
        padding: 0 ${SIZES.padding};
        padding-top: 30px;
        display:flex;
        flex-direction:column;
        padding-bottom: 70px;
        background-attachment: fixed;

        @media screen and (max-width:610px) {
            height: 90vh;
        }
    }

    .homeSection {
        position:relative;
        top:-10%;
        display: block;
        width: 100%;
        height: 100%;   
    }
    

    .tablet1 {
        position: absolute;
        top:25%;
        left: 15%;
    }

    .tablet2{
        position:absolute;
        top: 40%;
        left: -5%;
        z-index: 200;

    }

    .tablet2 img {
        @media screen and (max-width:1308px) {
            width: 250px;
            }
        @media screen and (max-width:726px) {
            width: 150px;
        }
    }

    .home_doctor {
        display:flex;
       margin-left: 150px;
        z-index:888;
    }

    .home_right_section {
        width: 100%;
        height: 100%;
        position:relative;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        color: #fff;
        @media screen and (max-width:610px) {
            justify-content:flex-start;
            padding-top: 10rem;
        }
        @media screen and (max-width:580px) {
            padding-top: 3.7rem;
        }

        
    }

    .home_right_section h1 {
        font-size:85px;
        z-index:888;
        @media screen and (max-width:717px) {
            font-size: 70px;
        }
        @media screen and (max-width:610px) {
            font-size: 50px;
        }
    }

    .img_hex {
        position: absolute;
        top:20%;
        left:60%;
        @media screen and (max-width:1308px) {
        width: 250px;
        }
        @media screen and (max-width:830px) {
            width: 200px;
        }
        @media screen and (max-width:726px) {
            display:none;
        }
    }

    .img_pent {
        position: absolute;
        bottom: 40%;
        right:55%;
    }
    
    .landing_page {
        position: relative;
    }
    .home_doc_img {
        right: 0;
        top: 80%;
        position:absolute;
        z-index: 200;
        @media screen and (max-width: 1469px){
            max-width: 90%;
        }
        @media screen and (max-width:610px) {
            top: 90%;
        }
    }

    .curve_rec {
        width: 100%;
        height: 400px;
        transform: skewY(5deg);
        //background: #0A004B;
        //background:#FF4F4F;
        background: ${COLORS.lightblue};
        border-bottom-left-radius: 50%;
    }
    .landing_text {
        z-index: 200;
        overflow:hidden;
       
    }

    .landing_text .header-text{
        font-family: "Founders Grotesque Regular";
    }
    
    .nemorph_button {
        font-weight: bold;
        font-size: 24px;
        color: #fff;
        cursor:pointer;
        margin-top: 80px;
        display:flex;
        align-items:center;
       
    }
    
    .orange_text {
        color: #F9D145;
    }

    .cyan_hex_img {
        position: absolute;
        z-index: 200;
        left: 50%;
        top: 60%;
        @media screen and (max-width:726px) {
            top: 75%;
        }

        @media screen and (max-width:610px) {
            left: 55%;
        }
        @media screen and (max-width:605px) {
            left: 60%;
        }
    }

    .cyan_hex_img img {
        @media screen and (max-width:726px) {
            max-width: 150px;
        }
    }

    .HomeBody {
        width: 100%;
        padding-top: 7rem;
        
        
    }


    .parallax_group {
        width: 100%;
        height: 120vh;
        
    }
    

    .myService {
        position:relative;
        width:100%;
        height: 100%;
        padding: 180px 0;
        //background:#00635D;
        background: ${COLORS.darkblue};
        //background: #D9F6EF;
        @media screen and (max-width:650px) {
            padding: 50px 0;
        }
    }

    .service_top_header {
        display:flex;
        flex-direction: column;
        justify-content: start;
        align-items:  start;
        margin-bottom: 150px;
        margin-left:100px;
        position: relative;
        top: 0;
        z-index: 300;
        @media screen and (max-width: 1469px){
            margin-top: 10rem;
        }
        @media screen and (max-width: 1420px){
            margin-top: 15rem;
        }

        @media screen and (max-width:715px) {
            margin-left: 40px;
        }
        @media screen and (max-width:510px) {
            margin-left: 30px;
        }
        
    }

    .service_top_header h3 {
        font-size: 85px;
        color: #fff;
        
        @media screen and (max-width:715px) {
            font-size: 60px;
        }
       
    }
    .service_top_header h2 {
        color: #fff;
        
    }

    .myService .book_button {
        border-bottom:2px solid orange;
        color: orange;
        outline: none !important;
        font-weight: bold;
        margin-top: 40px;
    }

    .service_rendered {
        position:relative;
    }

    .myService_content {
        display:flex;
        flex-direction:row; 
        justify-content:flex-end; 
        @media screen and (max-width: 778px) {
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
    }


    .service_card {
        display:flex;
        flex-direction: column;
        width: 300px;
        height: 400px;
        background:#4A5BCF;
        margin-left: 30px;
        align-items:center;
        padding: 30px;
        border-radius:20px;
        @media screen and (max-width: 820px) {
           
            width: 60%;
            height: 450px;
        }
        @media screen and (max-width: 778px) {
            margin-bottom: 20px;
            width: 60%;
            height: 100%;
            margin-left:0;
        }
    }

    .service_card img {
        width: 100px;
        margin-bottom: 30px;
        @media screen and (max-width: 778px) {
            width: 150px;
        }
    }
    .service_card_text h2 {
        margin-bottom: 10px;
        @media screen and (max-width: 778px) {
            font-size: 38px;
        }
    }

    .service_card_text p {
        color: #EBEBEB;
        @media screen and (max-width: 778px) {
            font-size: 20px;
        }
        
    }

    .service_hex_img {
        position:absolute;

        @media screen and (max-width:1326px) {
            top: 19%;
        }
        @media screen and (max-width:726px) {
            top:10%;
        }
    }

    .myService .my_treatment {
        margin-top: 250px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-left: 30px;
        margin-right: 30px;
        @media screen and (max-width:700px) {
            margin-top: 150px;
        }

    }

    .my_treatment h1 {
        font-size: 50px;
        font-weight: 300;
        text-align:center;
        margin-bottom: 150px;
        @media screen and (max-width:700px) {
            font-size: 45px;
        }
    }

    .myService .illness{
        display:flex;
        flex-direction: column;
        text-align:center;
    }

    .illness span {
        font-size: 80px;
        margin-bottom: 30px;
        opacity:0;
        @media screen and (max-width:700px) {
            font-size: 70px;
        }
        
    }
    .striked {
        text-decoration: line-through;
        text-decoration-color:${COLORS.lightred} ;
    }
    /* Homejoin styled */
    .join_group {
       
        //background:#BF1A2F; 
       
        min-height: 120vh;
        @media screen and (max-width:817px) {
            min-height: 150vh;
            }
    }
    .HomeMemberShip {
        padding: 60px ${SIZES.padding};
        width: 100%;
        height: 100%;
        background: ${COLORS.darkblue};
    }
    .MemberContent {
        display:flex;
        justify-content:space-between;
        width: 100%;
        min-height: 100%;
    }

    .mem_left_section {
        display:flex;
        flex-direction:column;
        max-width: 80%;
        @media screen and (max-width: 1211px) {
            max-width: 100%;
            justify-content:center;
            align-items:center;
        }
    }

    .mem_left_section h1{
        color: #fff;
        font-size: 68px;
        max-width: 700px;
        @media screen and (max-width: 660px) {
            font-size: 50px;
        }

    }

    .bonus_item {
        display:flex;
        color: #fff;
        font-size:24px;
        margin:25px 15px;
        @media screen and (max-width: 780px) {
            margin: 25px 10px;
        }

        @media screen and (max-width: 660px) {
            max-width: 100%;
        }

    }
    .bonus_item h5{
        margin-left:15px;
        max-width: 300px;
        height: 80px;
        font-weight: 300;
        @media screen and (max-width: 780px) {
            width: 100%;
            height: 100%;
        }
        @media screen and (max-width: 660px) {
            max-width: 100%;
        }
    }

    .mem_bonus {
        display:flex;
        flex-direction: row;
        margin-top: 30px;
        @media screen and (max-width: 780px) {
            width: 100%;
        }

        @media screen and (max-width: 660px) {
            flex-direction: column;
        }
    }

    .mem_right_section {
        @media screen and (max-width: 1211px) {
            display:none;
        }
    }

    .mem_right_section img{
        height:600px;
        
    }
    .mem_pay{
        margin-top: 100px;
        text-align:center;
      
        
    }

    .mem_pay h1 {
        font-size: 36px;
        font-weight: 300px;
    }
    .mem_pay button {
        margin-top: 40px;
        cursor:pointer;
        padding: 20px 50px;
        background: #fff;
        color: #088567;
        border-radius: 25px;
        border:none;
        outline: none;
    }

    /* end of home join */


    /* HOME SHOP */

    .shop_tag {
        border-radius: 100%;
        width: 150px;
        height: 150px;
        background: #FF4F4F;
        transform:rotateZ(40deg);
        color: black;
        font-weight: bold;
        font-size: 36px;
        display:flex;
        text-align:center;
        justify-content:center;
        align-items:center;
        position:absolute;
        z-index: 10;
        bottom: -2%;

        @media screen and (max-width: 1152px) {
            display:none;
        }
    }
    
    .HomeShopContainer {
        position:relative;
        width: 100%;
        min-height: 600px;
        padding-bottom: 40px;
    }
    
    .HomeShopContainer .shop_header {
        position:relative;
        display:flex;
        padding-left:30px;
        flex-direction:row;
        width: 100%;
        height: 100%;
        z-index:-1;

        @media screen and (max-width: 1152px) {
            display:flex;
            flex-direction:column-reverse;
            padding-left: 0;
        }
    }

    .shop_header .spanText{
        z-index:500;
        font-weight:500;
        color:#000;
        align-self:flex-end;  
        @media screen and (max-width: 1152px) {
            position:absolute;
            align-self:center;
            width:50%;
            top:0%;
            color:#fff;
            
        }
        @media screen and (max-width:860px) {
            font-size: 75px;
            left: 10%;
           }

        @media screen and (max-width: 780px) {
            left:0%;
            width: 40%;
        }

        @media screen and (max-width: 600px) {
            left:10%;
        }      
    } 

    .shop_header .spanText p {
        @media screen and (max-width:1308px) {
             font-size: 80px;
            }
            @media screen and (max-width:860px) {
                font-size: 75px;
               }
            @media screen and (max-width:626px) {
                font-size: 70px;
               }
            @media screen and (max-width: 600px) {
                font-size: 50px;
            }
    }

    .good_doc_image {
        position:relative;
        background-image:url(${process.env.PUBLIC_URL + `/drug.jpg`}) !important;
        background-repeat:no-repeat;
        width:100%;
        height: 600px;
        background-size:cover;
        @media screen and (max-width: 1152px) {
            width: 100%;
            //background-image:linear-gradient(rgba(0,0,0,.32), rgba(0,0,0,.49)) , url(${process.env.PUBLIC_URL + `/drug.jpg`}) !important;
            height: 700px;
        }

        @media screen and (max-width: 600px) {
            height: 450px;
        }

    }


    .shop_header {
        position:relative;
        display:flex;
        flex-direction:row;
        justify-content:flex-end;
        color: #000;
        font-size: 90px;
    }

    .shop_cat {
        margin: 0 80px;
        margin-top: 20rem;
        @media screen and (max-width:1150px) {
            margin-top: 5rem;
        }

    }


    .shop_top_header {
        display:flex;
        flex-direction:row;

    }
    .shop_top_header h3{
        font-size: 26px;
        color:#000;
    }

    .shop_top_header span {
        width: 80%;
        height: 2px;
        background: ${COLORS.lightblue};
        display:flex;
        align-self:center;
        margin-left: 15px;
    }

    .shop_list {
        display:flex;
        flex-direction: row;
        padding-top: 30px;
        @media screen and (max-width:820px) {
            flex-direction:column;
        }
    }

   

    .shop_list .items_background img{
        
        border-radius: 20px;
        
        @media screen and (max-width: 1410px){
            max-width: 100%;
        }
        @media screen and (max-width:820px) {
            display:none;
        }
        
    }
    .shop_list .products {
        margin-left: 30px;
        display:flex;
        justify-content:space-between;
        @media screen and (max-width:609px) {
            flex-direction:column;
        }

    }

    .product_item {
        margin-right: 25px;
        @media screen and (max-width: 1410px){
            max-width: 100%;
        }
        @media screen and (max-width:609px) {
            margin-right:0px;
            margin-bottom: 50px;
            //background:red;
        }
    }

    .product_item img {
        max-width: 100%;
    }
    .product_description {
        display:flex;
        flex-direction: column;
        align-items: space-between;
        min-height: 100%;
    }

    .product_info {
        display:flex;
        justify-content:space-between;
        align-items:center;
        @media screen and (max-width:1337px) {
            font-size: 20px;
            min-height: 50px;
        }
        @media screen and (max-width:609px) {
            margin:0 30px;
            margin-left:0;
            justify-content: flex-start;
        }
    }

    .product_info h1 {
        @media screen and (max-width:1337px) {
            font-size: 16px;
        }
    }

    .product_price {
        font-size: 18px;
        font-weight: bold;
        color: ${COLORS.lightblue};
        @media screen and (max-width:609px) {
            margin-left:20px;
        }
    }

    .product_link {
        margin-top: 20px;
        display:flex;
        align-items:center;

        @media screen and (max-width: 974px) {
            flex-direction:column-reverse;
            align-items:flex-start;
            width:100%;
        }

        @media screen and (max-width:609px) {
            margin-top:5px;
        }
    }


    .add_to_cart {
        max-width: 150px;
        border:none;
        background: ${COLORS.darkblue};
        color: #fff;
        outline: none;
        padding: 20px;
        border-radius: 25px;
        margin-right: 20px;

        @media screen and (max-width: 974px) {
            margin-right: 0px;
            width: 100%;
            margin-top: 5px;
        }
    }


    /* Home blog */
    .BlogContainer {
        width: 100%;
        background:#fff;
        min-height:20vh;
    }
    / end  of Home blog */


    .footerSection{
        min-height: 50vh;
        position:relative;
        background:transparent;
    }

   
    
    .footerContent {
        color: #000;
        margin-top: 120px;
        min-height: 100%;

    }

    .f_top_header {
        font-size: 250px;
        width: 200px;
        line-height: 0.9;
    }


`;
















// export const HomeContainer = styled.div`
//     position: relative;
//     width: 100%;
//     height: 100%;
//     .homeContent {
//         width: 100%;
//         display: flex;
//         flex-direction: column;
       
//     }
//     .homeLanding {
//         background-image: url(${process.env.PUBLIC_URL + `/homeLanding.svg`}) ;
//         background-repeat:no-repeat;
//         background-size: cover;
//         width: 100%;
//         height: 100vh;
//         padding: 0 ${SIZES.padding};
//         padding-top: 30px;
//         display:flex;
//         flex-direction:column;
//         padding-bottom: 70px;
//     }

//     .homeSection {
//         display: flex;
//         flex-direction: row-reverse;
//         justify-self:flex-end;
//         width: 100%;
//         flex:2;
        
//     }
//     .home_left_section {
//         display: flex;
//         align-items:flex-end;
//         width:50%;
     
    
//     }

//     .tablet1 {
//         position: absolute;
//         top:25%;
//         left: 15%;
//     }

//     .tablet2{
//         position:absolute;
//     }

//     .home_doctor {
//         display:flex;
//        margin-left: 150px;
//         z-index:888;
//     }

//     .home_right_section {
//         position:relative;
//         display:flex;
//         flex-direction: column;
//         justify-content: center;
//         max-width: 600px;
//         color: #005450;
        
//     }

//     .home_right_section h1 {
//         font-size:56px;
//         z-index:888;

//     }

//     .home_right_section h5 {
//         font-size: 23px;
//         font-weight:400;
//         z-index:888;
//         line-height: 1.5;
       
//     }

//     .img_hex {
//         position: absolute;
//         top:20%;
//         left:50%;
//     }

//     .img_pent {
//         position: absolute;
//         bottom: 40%;
//         right:55%;
//     }

//     .nemorph_button {
//         width: 250px;
//         font-weight: bold;
//         font-size: 24px;
//         text-align:center;
//         margin-top: 30px;
//         padding: 15px;
//         border-radius: 25px;
//         box-shadow: 3px 3px 10px 0 rgba(0,0,0,0.35),
//                     -3px -3px 10px 0 rgba(255,255,255,0.3);
//         z-index:999;
//         background: #005450;
//         color: #fff;
//         cursor:pointer;
//     }
    
//     .orange_text {
//         color: #F9D145;
//     }

//     .HomeBody {
//         width: 100%;
//         padding-top: 7rem;
//         margin-bottom: 280px;
        
//     }

    

//     .farmaBody h2 {
//         text-align: center;
//         font-size: 48px;
//         color: #088567;

//     }

//     .service_icon {
//         display: flex;
//         flex-direction: row;
//         justify-content: center;
//         margin-top: 40px;
//     }
//     .sIcon {
//         width:20%;
//         margin-right: 15px;
//     }

//     .sHeader {
//         font-size: 24px;
//         font-weight: bold;
//     }
//     .sText {
//         color:#005450;
//     }

    
    
    

//     .rules {
//         margin-top: 160px;
//         margin-left: 50px;
//         margin-right: 50px;
//         display: grid;
//         position:relative;
//         grid-template-columns: repeat(2,1fr);
//         grid-column-gap:1em;
//         padding-bottom: 200px;
        
//     }
//     .ruleImg {
//         max-width: 80%;
//     }

//     .ruleItem h5 {
//         font-size: 36px;
//     }
//     .ruleHeader {
//         font-size: 65px;
//         font-weight: bold;
//     }

//     .ruleSubHeader {
//         font-size:20px;
//         width: 60%;
//         margin-bottom: 20px;
//     }

//     #rule-1-img {
//         grid-row: 1/3;
//     }

//     #rule-1 {
//         grid-row: 1/2;
//         align-self:start;
        
//     }
//     #rule-2-img {
//         grid-row:2/4;
//         align-self:end;
//         justify-self:center;
//     }


//     #rule-3 {
//         justify-content:flex-end;
//         align-self: flex-end;
//     }

//     #rule-3-img {
//         justify-self:start;
//     }


//     #rule-4-img {
//         justify-self:end;
    
//     }

//     #rule-4{
//         align-self:center;
//     }

//     .HomeMemberShip{
//         background:#005450; 
//     }

//     .MemberContent {
//         padding: 90px ${SIZES.padding};
//         display:flex;
//         justify-content:space-between;
//         width: 100%;
//     }

//     .mem_left_section {
//         display:flex;
//         flex-direction:column;
//         width: 50%;
//     }

//     .mem_left_section h1{
//         color: #fff;
//         font-size: 68px;

//     }

//     .bonus_item {
//         display:flex;
//         color: #fff;
//         font-size:24px;
//         margin:25px 15px;

//     }
//     .bonus_item h5{
//         margin-left:15px;
//         width: 300px;
//         heiht: 100px;
//         font-weight: 300;
//     }

//     .mem_bonus {
//         display:flex;
//         flex-direction: row;
//         margin-top: 30px;
//     }

//     .mem_right_section {
//         display:flex;
//         justify-content:center;
//         width:100%;
//     }

//     .mem_right_section img{
//         max-width: 700px;
//         height:700px;
        
//     }
//     .mem_pay{
//         margin-top: 150px;
//         text-align:center;
      
        
//     }

//     .mem_pay h1 {
//         font-size: 36px;
//         font-weight: 300px;
//     }
//     .mem_pay button {
//         margin-top: 40px;
//         cursor:pointer;
//         padding: 20px 50px;
//         background: #fff;
//         color: #088567;
//         border-radius: 25px;
//         border:none;
//         outline: none;
//     }



// `;