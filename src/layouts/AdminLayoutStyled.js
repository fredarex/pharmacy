import styled from "styled-components";
import { SIZES } from "../constant/theme";

export const AdminContainer = styled.div`
    position:relative;
    overflow-x:hidden;
    width: 100%;
    height: 100%;
    background: #fff;
    .top_section {
        padding: 0 ${SIZES.padding};
        padding-top: 30px;
    }


    .controlPanel {
        height: 100%;
        display:flex;
    }

    .sidebar {
        width: 15%;
    }

    .content {
        min-height: 100%;
    }
`;