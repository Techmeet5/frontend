import SideBar from './SideBar';
import React, { useEffect } from 'react';

function Room(){
    function startConference() {
        const domain = "meet.jit.si";
        const options = {
          roomName: 'techmeet',
          parentNode: document.getElementById('jitsi-container'),
          configOverwrite: {
            disableInviteFunctions: true,
            disablePolls: true,
            toolbarButtons: [
                 'camera',
                 'chat',
                 'closedcaptions',
                 'desktop',
                 'feedback',
                 'fullscreen',
                 'hangup',
                 'help',
                 'microphone',
                 'participants-pane',
                 'profile',
                 'raisehand',
                 'security',
                 'select-background',
                 'settings',
                 'shareaudio',
                 'sharedvideo',
                 'tileview',
                 'toggle-camera',
                 'videoquality',
              ],
          
          },
          interfaceConfigOverwrite:{
            HIDE_INVITE_MORE_HEADER: true,
            SHOW_JITSI_WATERMARK: false,
            DEFAULT_LOGO_URL: null,
            DEFAULT_WELCOME_PAGE_LOGO_URL:null,
          }
        };
    
        const api = new window.JitsiMeetExternalAPI(domain, options);
        api.resizeLargeVideo("800px", "400px");
        api.executeCommand('toggleTileView');
        api.executeCommand('setTileView' ,  true);
      }
      useEffect(() => {
        // verify the JitsiMeetExternalAPI constructor is added to the global..
        startConference();
      });
        return (
            <div>
                <SideBar />
            </div>
        );
    }
export default Room;