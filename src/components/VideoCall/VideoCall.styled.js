import styled from 'styled-components';

export const VideoCallContainer = styled.div`
    position:relative;  
.modal{
    position:relative;
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
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #fff;
    padding: 0 28px;
    border-radius:1rem;
    width:90%;
    height:90%;
}

.close-modal {
    position: absolute;
    padding:5px;
    top: 10px;
    right: 10px;
    background:#000;
    color:#fff;
    border:none;
    cursor:pointer;
    border-radius: 5px;
}
.modal-content .t_section {
    align-items:flex-start;
    display:flex;
    position:absolute;
    left: -10%;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 10px;
    position:relative;
    z-index:999999;
    top: 5%;
}
.modal-content .t_section img  {
    padding:0;
    margin:0;
    max-width:50px;
}

.videoCall_track{
    width:100%;
    height:50%;
    position:relative;
    display:flex;
    justify-content:center;
}

.local_track {
    width:50%;
    height:100%;
    position:relative;
}

.remote_track {
    position:relative;
    width:50%;
    height:100%;
    
}

.remote_user {
    width:100%;
    height:100%;
    color:#000;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:bold;
}

.end_call {
    position: absolute;
    bottom:10%;
    left:47%;
    padding:10px;
    background:red;
    color:#fff;
    border-radius:5px;
}

.track {
    width:100%;
    display:flex;
    position:absolute;
    top:0;
    left:0;
    height:100%;
}

.wait_text {
    position:relative;
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
}


`;