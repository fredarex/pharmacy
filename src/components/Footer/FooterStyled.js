import styled from 'styled-components'

export const FooterContainer = styled.div`
    position:relative;
    background:transparent;
    //background:green;
    color: ${({changeColor}) => (changeColor ? '#fff': '#000')};
    .footerContent {
        padding: 0 50px;
        margin-top: 120px;
        min-height: 100%;
        padding-bottom: 60px;
        @media screen and (max-width:764px){
            padding-left: 20px;
            padding-right: 20px;
        }

    }

    .f_top_header {
        width: 100%;
        display:flex;
        margin-bottom: 120px;
        align-items:end;
        font-size: 200px;
        @media screen and (max-width: 1000px) {
            font-size: 150px;
        }
        @media screen and (max-width:764px){
            font-size: 120px;
        }

        @media screen and (max-width: 630px) {
            font-size: 55px;
        }
    }

    .f_top_header span {
        
        font-weight: bold;
        line-height: 0.7;
        
    }

    .f_top_header .arrow {
        margin-left: 20px;
       
        transform: rotateZ(30deg);
    }

    .f-social-links {
        width: 10vw;
        display:flex;
        justify-content: space-between;
    }

    .f_bottom {
        display:flex;
        justify-content: space-between;
        align-items:end;
        font-size: 24px;
    }

    .navlinks {
        display:flex;
        justify-content:space-between;
        @media screen and (max-width:764px){
            flex-direction:column;
        }
        
    }

    .navlinks ul {
        text-decoration:none;
        margin-right: 30px;
        @media screen and (max-width:764px){
            margin-bottom: 20px;
        }
    }

    .navlinks ul li a {
        text-decoration:none;
        color: ${({changeColor}) => (changeColor ? '#fff': '#000')};
    }
`;