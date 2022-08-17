import styled from "styled-components";
import { COLORS, SIZES } from "../../constant/theme";

export const DoctorsContainer = styled.div`
overflow-x:hidden;
cursor:none;
position:relative;
width: 100%;
background: #fff;
.top_section {
    position:relative;
    padding: 0 ${SIZES.padding};
    padding-top: 30px;
    background:${COLORS.darkblue};
}

.doc_hero_section{
    position:relative;
    height: 100vh;
}



.docLanding{
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    width:100%;
    top: 2%;
    position:relative;
    background: #fff;
    display:flex;
    height: 110vh;
}

.landing_section{
    z-index:900;
    position:absolute;
    top: 15%;
    left:0;
    //color: #fff;
    width: 100%;
    display:flex;
    padding:0 50px;
    pointer-events:none;
}

.l_first_sec {
    width: 50%;
}

.yellow_text{
    background: ${COLORS.darkyellow};
    color: #000;
}

.pink_text {
    padding:10px;
    border-radius:10px;
    font-size: 24px;
    color: #fff;
    background: ${COLORS.darkblue}
   // background: #FEADA9;
}

.l_first_sec h1{
    font-weight: bolder;
    font-size: 150px;
    line-height: 1;
}

.l_second_sec {
    max-width:50%;
    width:500px;
    position:absolute;
    top:-30%;
    font-weight:bold;
    font-family:'Poppins';
    font-size: 25px;
    right:10%;
}

.virtual_appointment_card{
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
    background: #fff;
    width: 250px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius: 20px;
    height: 300px;
    position:absolute;
    bottom:-20%;
    right:8%;
    padding:15px;
}

.v_text {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.v_text p{
    font-size: 20px;
}

.v_text span {
    margin: 5px 0;
    font-size:14px;
}

.v_text button{
    padding:15px;
    border-radius: 30px;
    background: ${COLORS.darkblue};
    color: #fff;
    font-size: 15px;
}

.doctor_booking {
    position:relative;
    width:100%;
    padding-top:120px;
}


.book_doc .header {
    margin-top: 80px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.book_doc .header p{
    width: 650px;
    text-align:center;
    margin-top: 20px;
    margin-bottom: 30px;
}

.book_doc h1 {
    width: 600px;
    font-size: 40px;
    text-align:center;
}

.doctors_f_section {
    width: 100%;
    display:flex;
    justify-content: flex-end;
}

.doctors_f_section .doctor_profile{
    width: 250px;
    //background: red;
    margin-right: 20px;
}


.doctor_profile {
    width: 300px;
    display: flex;
    flex-direction:column;
}


.doctor_profile h4{
    font-size: 20px;
}

.doc_profile_pic {
   border-radius: 20px;
   width: 100%;
    height: 250px;

}

#doc_profile_pic-1{
    background:pink;
}

#doc_profile_pic-2{
    background:#8DB77F;
}

#doc_profile_pic-3{
    background: #D7BA9E;
}

#doc_profile_pic-4{
    background: #9A9DF9;
}

.doc_profile_pic .pic{
    width:100%;
    height:100%;
    background-size:contain;
    background-repeat:no-repeat;
    background-position: 0 70px;
}


.doc_appointment_btn button{
    background:none;
    color: ${COLORS.darkblue};
    font-weight: 400;
    font-size: 17px;
    border-bottom: 1px solid ${COLORS.darkblue}
}




`;

export const Video = styled.div`
    height: 100%;
    width: 100%;
    video {
         object-fit:cover;
    }
`;

export const Canvas = styled.canvas`
    position:relative;
    top:0;
    left:0;
    height: 100%;
    display:block;
`;

