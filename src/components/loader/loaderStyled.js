import styled from "styled-components";


export const LoaderContainer = styled.div`
    position: relative;
    background: #F9DF4E;
    overflow:hidden;

    .loaderContent {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction:column;
        align-items: center;
    }
    .top_section,.bottom_section {
        width: 100%;
        height: 50%;
        background: #000;
    }
    .farma_logo{
        position: absolute;
        left:45%;
        top: 40%;
        z-index:999;
        width:100px;
    }
`;