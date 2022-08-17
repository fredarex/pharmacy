import styled from "styled-components";


export const ChatContainer = styled.div`
    position:relative;

    .chatContent {
        display:flex;
    }
    .chatting{
        width: 70%;
        border:1px solid #000;
        height: 100vh;
        overflow-y:scroll;
    }
    .group{
        width: 30%;
        height:100vh;
    }

`;