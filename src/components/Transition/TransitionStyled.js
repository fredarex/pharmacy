import styled from 'styled-components';
import { COLORS } from '../../constant/theme';

export const TransitionContainer = styled.div`
    position:relative;

    .transition-effect {
        position: absolute;
        z-index: 1000000000;
        background-color: #fff;
        top:0;
        width: 100%;
        height: 100vh;
    }

`;
