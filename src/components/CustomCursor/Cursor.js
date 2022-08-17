import styled from "styled-components";
import { COLORS } from "../../constant/theme";


export const Cursor = styled.div`
    position:absolute;
    top:0;
    left:0;
    width: 32px;
    height: 32px;
    background: #000;
    border-radius: 100%;
    transform: translate(-50%,-50%);
    transition: all .1s ease-in-out;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
    pointer-events:none;
    z-index:99999;

    &.hovered {
        background: transparent !important;
        width: 56px;
        height: 56px;
        border: 4px solid ${COLORS.red}; 

    }
`;