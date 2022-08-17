import styled from 'styled-components'
import { COLORS, SIZES } from '../../constant/theme';

export const ShopContainer = styled.div`
    overflow-x:hidden;
    position: relative;
    width: 100%;
    min-height: 100%;
    background:linear-gradient(315.01deg,blue 8.31%,#0A004B 88.22%);
    .ShopContent {
        min-height: 100vh;
        width: 100%;
    }
    .background_one {

        min-height: 100vh;
        
    }

    /* shop landing style */

    .top_section {
        padding: 0 ${SIZES.padding};
        padding-top: 30px;
    }

    .shopperContent{
        display:flex;
        position:relative;

        @media screen and (max-width: 873px) {
            flex-direction:column;
            align-items:center;
            justify-content:center;
        }

    }

    .shopperContent .drug_text {
        width: 60%;
        font-size: 110px;
        font-weight: bold;
        color: #fff;
        
        transform:scale(0.9);
        @media screen and (max-width:1548px) {
            font-size: 90px;
        }
        @media screen and (max-width:1465px) {
            font-size: 100px;
        }
        @media screen and (max-width:1264px) {
            font-size: 95px;
        }
        @media screen and (max-width:1232px) {
            font-size: 80px;
        }
        @media screen and (max-width:1049px) {
            font-size: 70px;
        }
        @media screen and (max-width:916px) {
            font-size: 65px;
        }
        @media screen and (max-width:900px) {
            font-size: 60px;
        }
        @media screen and (max-width: 873px) {
            font-size: 90px;
            width: 100%;
            
        }
        @media screen and (max-width: 800px) {
            font-size: 75px;
        }
        @media screen and (max-width: 686px) {
            font-size: 55px;
        }
        

    }
    .shopperContent span {
        text-decoration: line-through;
        text-decoration-color:${COLORS.lightred} ;
    }

    .landing_drug {
        position:absolute;
        z-index: 200;
        top: 0;
        left:60%;
        @media screen and (max-width: 875px) {
            position:relative;
            left:0;
        }

        
    }

    .landing_drug img {
        @media screen and (max-width: 1223px) {
            width: 400px;
        }
        @media screen and (max-width: 1210px) {
            width: 400px;
        }
        @media screen and (max-width: 981px) {
            width: 350px;
        }
        @media screen and (max-width: 873px) {
           width: 450px;
        }
    }

    .landing_drug .buy_drug {
        position:absolute;
        top: 4%;
        left:12%;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        color: #000;
        background: #fff;
        padding: 10px;
        border:2px solid #000;
        font-weight: bold;
        cursor:pointer;
        font-size: 16px;

        &:hover {
            background:${COLORS.lightblue};
            color:#fff;
        }


    }

    .scroll_me {
        display:flex;
        justify-content:center;
        font-size: 20px;
        position:absolute;
        top:17%;
        left:50%;
    }

    .scroll_me p{
        color: #fff;
        margin-left: 10px;
    }

    /* ending shop landing style */


    /* shop about style */
    .AboutProduct {
        padding-top: 150px;
        display:flex;
        justify-content: space-between;

        @media screen and (max-width: 650px) {
            flex-direction: column-reverse;
            justify-content:center;
            align-items:center;
            padding-top: 30px;
        }

    }

    .safety{
        position:relative;
        width: 60%;
        height: 60%;
        //background:red;
        
        @media screen and (max-width: 650px) {
            width: 90%;
            height: 90%;
        }
        
    }
    .stay_safe {
        width:60%;
        height: 60%;
        padding: 70px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border: 2px solid #fff;
        border-radius: 50%;
        @media screen and (max-width: 1290px){
            position:relative;
            left:-5%;
        }
        @media screen and (max-width:1176px) {
            width: 50%;
            height: 50%;
            padding:20px 0;
            margin-top: 10rem;
        }

        @media screen and (max-width:1310px) {
            transform:scale(0.9);
        }
        
        @media screen and (max-width:1296px) {
            transform:scale(0.8);
        }
        @media screen and (max-width:1250px) {
            transform:scale(0.7);
        }
        @media screen and (max-width:959px) {
            width: 80%;
            height:80%;
            padding: 70px;
        }

        // @media screen and (max-width:1290px) {
        //     width: 20%;
        //     height: 300px;
        //     margin-top: 90px;
        // }

        @media screen and (max-width: 650px) {
            width: 70%;
            height: 70%;
        }
        
    }

    .stay_safe p {
        font-size: 80px;
        color: #fff;
        //transform: rotateZ(5deg);
        // @media screen and (max-width:1497px) {
        //     font-size: 60px;
        // }
        // @media screen and (max-width:1290px) {
        //     font-size: 30px;
        // }
        
        @media screen and (max-width:1176px) {
            font-size: 40px;
        }
    }

    .stay_safe span {
        font-size: 80px;
        color: #fff;
        @media screen and (max-width:1176px) {
            font-size: 40px;
        }
        //transform: rotateZ(-5deg);
        // @media screen and (max-width:1497px) {
        //     font-size: 60px;
        // }
        // @media screen and (max-width:1290px) {
        //     font-size: 30px;
        // }
    }

    // .product{
    //     width:50%;
    //     background: white;
    // }
    
    .pro_text {
        margin-right: 100px;
        margin-top: 180px;
        @media screen and (max-width:1359px) {
            margin-right: 50px;
            

        }
    }

    .pro_text .subtitle {
        color: #E9E8EE;
        font-size: 18px;
    }

    .maintitle h4 {
        margin-top: 20px;
    }

    .pro_text .maintitle {
        color: #fff;
        font-size: 30px;
        @media screen and (max-width:1359px) {
            font-size: 30px;
            
        }
    }

    .maintitle p {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 18px;
        @media screen and (max-width:1359px) {
            font-size: 18px;
            
        }
    }

    .maintitle button {
        width: 160px;
        padding: 15px;
        color: #fff;
        cursor: pointer;
        border-radius: 20px;
        background: transparent;
        border: 2px solid #fff;

        &:hover {
            color: #000;
            font-weight: bold;
        }
    }



    /* ending shop about style */

    .loading_product {
        margin-top: 10rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
        
    }

    .loading_product p{
        font-size: 30px;
    }

    /* shopping products style*/
        .ShopProContainer {
            width: 100%;
            padding-top: 350px;
            //background: orange;
            
        }

        .ShopProContainer .prosHeader{
            display:flex;
            flex-direction:column;
            justify-content:center;
            width:100%;
            color: #fff;
            text-transform:uppercase;
            margin-bottom: 90px;
            border-top: 2px solid #fff;
            color: #fff;
           border-bottom: 2px solid #fff;
            text-align:center;
            font-family: "MoglanDemo";
        }

        .ShopProContainer .prosHeader span{
            font-size: 100px;
            font-weight: bold;
        }


        .ShopProContainer .my_products {
            padding: 0 20px;
            width: 100%;    
        }
        
        .ShopProContainer .products_list {
            display:flex;
            width:100%;
            flex-wrap: wrap;
            justify-content: center;
            align-items:center;
            
        }

        .ShopProContainer .med_pro {
            display:flex;
            flex-direction:column;
            flex-basis: 16.6%;
            width: 100%;
            margin:0 10px;
            margin-bottom: 40px;
        }

        .ShopProContainer .med_pro .med_img {
            width: 100%;
            background: #E9EDF0;
            padding: 0 10px;
            border-radius: 20px;
        }

        .ShopProContainer .med_pro img {
            width: 450px;
            height: 450px;
            @media screen and (max-width: 1539px) {
                width: 312px;
                height: 312px;
            }
            @media screen and (max-width: 1333px) {
                width: 290px;
                height: 290px;
            }
            @media screen and (max-width: 1267px) {
                width: 250px;
                height: 250px;
            }
            @media screen and (max-width: 1149px) {
                width: 308px;
                height: 308px;
            }
            @media screen and (max-width: 953px) {
                width: 208px;
                height: 208px;
            }
            @media screen and (max-width: 754px) {
                width: 408px;
                height: 408px;
            }
            @media screen and (max-width: 714px) {
                width: 308px;
                height: 308px;
            }
            @media screen and (max-width: 600px) {
                width: 258px;
                height: 258px;
            }
        }

        // .ShopProContainer .med_pro:nth-child(2),.ShopProContainer .med_pro:nth-child(5) {
            
        //     margin-bottom: 40px;
        // }


        



        .ShopProContainer p {
            color: #fff;
            font-size: 20px;
            display:flex;
            justify-content:center;
            margin-top: 40px;
            margin-bottom: 30px;
        }

        .pro_detail {
            display:flex;
            justify-content: space-between;
        }

        .pro_detail a {
            font-size: 20px;
            color: ${COLORS.darkblue};
            font-weight: bold;
        }
        .pro_detail span{
            font-siz: 20px;
            font-weight: bold;
        }

        .background_black {
            background: #000;
            color: #fff;
        }


    /* shopping products style */
`;