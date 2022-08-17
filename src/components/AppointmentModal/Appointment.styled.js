import styled from "styled-components";
import { COLORS } from "../../constant/theme";


export const AppointmentContainer = styled.div`
    position:relative;

    .modal{
        z-index: 50000;
        top: 15%;
        overflow: hidden;
        
    }
    .modal, .overlay {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
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
        z-index: 900;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 1.4;
        background: #fff;
        padding: 0 28px;
        border-radius:1rem;
        width: 900px;
        height:602px;
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
    
    .tab{
        font-size: 30px;
        color: #000;
    }
    
    .active {
        color: #fff;
        border-bottom: 2px solid #fff;
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
    
    .appointment{
        display: flex;
        width:100%;
        height:80%;
    }
    .modal_tab{
        width:70%;
        border-right:1px solid #000;
    }

    .appointment_btns {
        width: 50%;
        display:flex;
        justify-content:space-between;
    }

    .prev_btn {
        min-width:80px;
        padding: 15px;
        color: #000;
        border-radius: 5px;
        background:transparent;
        border:2px solid ${COLORS.darkblue}
    }


    .next_btn {
        min-width:80px;
        padding: 15px;
        background: ${COLORS.darkblue};
        color: #fff;
        border-radius: 5px;
    }

    .appointment_detail {
        width:30%;
        display:flex;
        flex-direction:column;
        padding-left: 40px;
    }
    .app_detail_section {
        margin: 5px 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #000;
    }

    .select_sickness, .select_Time {
        display:flex;
        flex-wrap:wrap;
        margin-top: 30px;
    }

    .select_sickness .select_opt, .select_Time .select_opt {
        flex-basic:20%;
        font-size:15px;
        padding:10px;
        background: transparent;
        border:2px solid ${COLORS.darkblue};

        margin-right:10px;
        margin-bottom: 20px;
        color: #000;
        border-radius:5px;
        &:hover {
            color: #fff;
            background:${COLORS.darkblue};
        }
    }

    .consulation_fee{
        margin-top: 80px;
    }

    .consulation_fee p{
        color:${COLORS.darkblue}
    }

    .styled_toast{
        z-index:800000;
    }

    
    
`;

