import React, { useEffect, useState } from 'react'
import { VideoCallContainer } from './VideoCall.styled'
import { farma_logo } from '../../constant/Image';
import {FaTimes} from 'react-icons/fa';
import {AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks} from 'agora-rtc-react';
import { useSelector } from 'react-redux';
  const appId = "0478fd1ef5f540a98f2f90333febf378";
  const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks(); 
const mapState = (state) => ({
    appointment:state.appointments.appointment,
    showVideoModal:state.appointments.showVideoModal
});
function VideoCall(props) {
    const {appointment,showVideoModal} = useSelector(mapState);
    const [start, setStart] = useState(false);
    const [remoteUsers,setRemoteUsers] = useState([]);
    const token = appointment.videoURL.token;
    const config = {mode: "rtc", codec: "vp8", appId: appId, token: token};
    const useClient = createClient(config);
    const client = useClient();  
    const [mytrack, setMyTrack] = useState(false);
    const [vidPublished,setvidPublished] = useState(false);
    const { ready, tracks } = useMicrophoneAndCameraTracks();
    const channelName = appointment.videoURL.channelName;
    console.log(token);
    console.log(channelName);
    console.log(appointment.videoURL.uid);
    const leaveChannel = () => {
      try {
        if(vidPublished) {
          client.leave();
          client.removeAllListeners();
          tracks[0].close();
          tracks[1].close();
          client.remoteUsers.map((user) => {
            if (user.hasVideo || user.hasAudio) {
              client.unsubscribe(user); // Clean up DOM
            }else {
              return null;
            }
           // unsubscribe from the user
          })
        }
        
        setMyTrack(false);
        setStart(false);
        props.handleToggleModal();
    
        
      }catch(err) {
        console.log(err);
      }
        
      }

      useEffect(() => {
        if (ready && tracks) {

          try {
            setMyTrack(true);
            videocall(channelName);
          }catch(err) {
            console.log(err);
          }
              
        }

        async function videocall(name) {
            
            if (mytrack) {
              
              try {
                client.on("user-published", async (user, mediaType) => {
                  console.log("user=published",user);
                  if(user.hasVideo || user.hasAudio) {
                    await client.subscribe(user, mediaType);
                  console.log("subscribe success");
                  if (mediaType === "video") {
                      setRemoteUsers([user]);
                      // setRemoteUsers((prevUsers) => {
                      //   return [...prevUsers, user];
                      // });
                    
                    
                  }
                  if (mediaType === "audio" || mediaType === 'all') {
                    user.audioTrack.play();
                  }  
                  }
                          
                });
      
      
                client.on('user-unpublished',(user, type) => {
                  console.log("unpublished", user, type);
                 if(type === "audio") {
                  setRemoteUsers([]);
                  setMyTrack(false);
                 }
                  setRemoteUsers([]);
                  setMyTrack(false);
                  
               });
      
      
               client.on("user-left", (user,type) => {
                  // setRemoteUsers((prevUsers) => {
                  //   return prevUsers.filter((User) => User.uid !== user.uid);
                  // });
      
                  setRemoteUsers([]);
                  setMyTrack(false);
                });
                
                try {
                  await client.join(config.appId, name, config.token,null);
                if(!vidPublished) {
                  await client.publish([tracks[0],tracks[1]]);
                  setvidPublished(true);
                }else {
                  return null
                }
                
              }catch(err) {
                console.log(err);
              }
              
              setStart(true);
              }catch(err) {
                console.log(err);
              }
          
          


        }
     
          
        }

        console.log(remoteUsers);



        return () => {
          client.off("user-published", async (user, mediaType) => {
            await client.subscribe(user, mediaType);
              setRemoteUsers([user]);
          
          });

          client.off('user-unpublished',(user, type) => {
              setRemoteUsers([]);
            
         });
         client.off("user-left", (user) => {
          setRemoteUsers([]);
         })
        }
      },[client,channelName,ready, tracks])
  
  return (
    
    <VideoCallContainer>
        <div className="modal">
            <div onClick={leaveChannel} className="overlay"></div>
            <div className="modal-content"> 
              <div className='t_section'>
                <img src={farma_logo} />
                <button className="close-modal" onClick={leaveChannel}><FaTimes color='#fff' /></button>
              </div>
              <div className='track'>
                {start && tracks ?
                <>
                <div className='local_track'>
                    <AgoraVideoPlayer className='vid' videoTrack={tracks[1]} style={{height: '100%', width: '100%'}} />
                </div>
                <div className='remote_track'>
                    {

                      remoteUsers.length > 0 ?
                      remoteUsers.map((remoteUser) => {
                        if(remoteUser.videoTrack) {
                            return (
                              <AgoraVideoPlayer
                            videoTrack={remoteUser.videoTrack}
                            key={remoteUser.uid}
                            style={{height: '100%', width: '100%'}} 
                          />
                            )
                        } else return null;
                      })
                          
                    : 
                    <div className='remote_user'>your co-host is yet to join </div>
                    }
                </div>
                </>
                :
                <>
                  <div className='wait_text'>PLEASE WAIT ......</div>
                </>
                
                }
              </div>
              <button className='end_call' onClick={leaveChannel}>End CALL</button>
            </div>
        </div>
    </VideoCallContainer>
  )
}

export default VideoCall