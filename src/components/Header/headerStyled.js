import styled from "styled-components";
import { COLORS, SIZES } from "../../constant/theme";
export const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 150px;
    .HeaderContent {
        display: flex;
        flex-direction: row;
        align-items: start;
        width: 100%; 
        justify-content: space-between;
        z-index: 1100;
        margin:0 30px;
        @media screen and (max-width:920px) {
            margin:0 20px;
        }
    }
    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-grow: 1;
    }

    .links {
        flex-grow: 2;
        display:flex;
        max-width: 60%;
        padding-left: 200px;
        //border: 2px solid red;
        @media screen and (max-width:1256px) {
            padding-left: 150px;
        }
        @media screen and (max-width:1097px) {
            padding-left: 0px;
        }
        @media screen and (max-width:920px) {
            display:none;
        }
        
    }

    .my_links {
        height: 50px;
        width: 300px;
        
        display:flex;
        justify-self:center;
        align-items:center;
        justify-content: space-evenly;
        border:${({setColor}) => (setColor ? '2px solid #000': '2px solid #FFFEFC')};
        border-radius: 10px;

    }

    .my_links .link {
        font-size: 24px;
        color: ${({setColor}) => (setColor ? '#000': '#FFFEFC')};
        text-decoration: none;
    }
    .login{
        margin-top: 10px;
        margin-right: 30px;
        @media screen and (max-width:920px) {
            display:none;
        }
    }
    .signin {
        font-size:20px;
        font-weight:bold;
        background:none;
        outline:none;
        border:none;
        border-bottom: 1.5px solid ${({setColor}) => (setColor ? '#000': '#FFFEFC')};;
        cursor:pointer;
        color: ${({setColor}) => (setColor ? '#000': '#FFFEFC')};
    }

    .my_account {
        position:relative;
        @media screen and (max-width:920px) {
            display:none;
        }
    }

    .account {
        display:flex;
        justify-content:flex-end;
        align-items:flex-end;
        cursor:pointer;
        margin-top: 5px;
        margin-right: 30px;
        color: ${({setColor}) => (setColor ? '#000': '#FFFEFC')};
    }

    .dropbox {
        position:absolute;
        z-index: 2000;
        margin-top: 15px;
        display:flex;
        flex-direction:column;
        width: 120px;
        min-height: 50px;
        border-radius: 5px;
        background: ${({setColor}) => (setColor ? '#000': '#FFFEFC')};
        
        
    }

    .divider{
        width: 100%;
        height: 2px;
        background:${({setColor}) => (setColor ? '#FFFEFC': '#000')};
    }

    .dropbox a{
        padding: 10px;
        text-decoration:none;
        color: ${({setColor}) => (setColor ? '#FFFEFC': '#000')};
        cursor:pointer;
        
    }

    .dropbox button {
        cursor:pointer;
        padding: 10px;
        color: ${({setColor}) => (setColor ? '#FFFEFC': '#000')};
        margin-top: 5px;
        background: none;
        border:none !important;
        outline: none !important;
    }

    .dropbox .logout {
        cursor:pointer;
    }

    .hamMenu {
        display:none;
        cursor:pointer;
        margin-top: 5px;
        @media screen and (max-width:920px) {
            display:block;
        }
    }

    .cart {
        position:relative;
        margin-right: 30px;
        padding: 10px 20px;
        border: ${({setColor}) => (setColor ? '2px solid #000': '2px solid #FFFEFC')};
        border-radius: 15px;
        @media screen and (max-width:920px) {
            display:none;
        }
    }

    .cart .cart_link {
        color: ${({setColor}) => (setColor ? '#000': '#FFFEFC')};
        text-decoration: none;
    }
    .cart_total {
        display:flex;
        justify-content:center;
        align-items:center;
        position:absolute;
        top:-15%;
        right: -5%;
        width: 25px;
        height: 25px;
        border-radius: 20px;
        background: #FF4F4F;
        font-weight: 500;
        color: #fff;

    }

    
    .menu {
        cursor:pointer;
        position:absolute;
        top:0;
        right:0;
        font-size: 50px;
        padding: 0px 15px;
        font-weight: bold;
        color: #000;
        display:none;
    }

    .menu span{
        display: block;
        position: relative;
        z-index:30000;
    }
    .cylinder_img {
        height: 130px;
        position: absolute;
        top: 30%;
    }

    .logo img{
        width: 80px;
    }

    .com_name {
        font-size: ${SIZES.h4};
        margin-left: 10px;
        color: ${({setColor}) => (setColor ? '#000': '#FFF')};
        z-index: 200;
        cursor:pointer;
    }

    .right_header {
        display:flex;
        flex-direction:row;
    }

    .login_btn {
        border:none;
        outline: none !important;
        color:#005450;
        background:none;
        width:70px;
        font-size: 20px;
        font-weight:bold;
    }

    
    .hexagon_image {
        position: absolute;
        top: 30%;
        left:10%;
    }

    .hexagon_image img {
        width: 60px;
    }

    #rule-3{
        justify-self:end;
        align-self:end;
    }

    .logo .farmaLogo {
        @media screen and (max-width: 1469px){
            width: 60px;
        }
    }

    
    /* LOGIN MODAL */

    .modal{
        z-index: 50000;
        top: 15%;
        
    }
    .modal, .overlay {
        width: 100vw;
        height: 100vh;
        
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
    }
    
    
    .overlay {
        background: rgba(49,49,49,0.5);
        top: 0;
    }
    .modal-content {
        box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
        z-index: 10000;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 1.4;
        background: #fff;
        padding: 0 28px;
        border-radius:1rem;
        width: 382px;
        height:602px;
        display:none;
    }
    .modal-content .t_section {
        align-items:flex-start;
        display:flex;
        justify-content: center;
        margin-bottom: 20px;
        margin-top: 10px;
    }
    .modal-content .t_section img  {
        padding:0;
        margin:0;
        max-width:50px;
    }
    .modal_tab{
        border-bottom: 1px solid #000;
        display:flex;

    }
    .modal_tab div {
        padding: 15px;
        border-radius: 3px;
        cursor: pointer;

    }

    .active {
        color: #fff;
        border-bottom: 2px solid #fff;
        background: #000;
    }

    .user_login {
        margin-top: 20px;
    }

    .user_login,.doctor_login {
        width: 100%;
        height: 40px;
        letter-spacing: -0.025rem;
        text-transform: uppercase;
        background-image:linear-gradient(310deg, #141727 0%, #3A416F 100%);
        color: #fff;
        border:none;
        font-size: 20px;
        border-radius: 10px;
        cursor: pointer;
        background-size: 150%;
        background-position-x: 25%;
    }
    
    .close-modal {
        position: absolute;
        padding:5px;
        top: 10px;
        right: 10px;
        background:#000;
        border:none;
        cursor:pointer;
        border-radius: 5px;
    }

    form {
        margin-top: 40px;
    }


    .input_group {
        display:flex;
        flex-direction:column;
        margin-bottom: 10px;
    }

    .input_group label {
        font-size: 18px;
        
    }

    .input_group input {
        width: 100%;
        padding: 20px;
        border-radius: 10px;
        border:1px solid #d2d6da;
        height: 40px;
        outline:none !important;
    }

    /* END OF LOGIN MODAL */
    
`;