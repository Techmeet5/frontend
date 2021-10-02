import SideBar from './SideBar';
import React, { useEffect } from 'react';

function Room(){
    function startConference() {
        const domain = 'meet.jit.si';
        const options = {
          roomName: 'roomName',
          height: 800,
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
          }
        };
    
        const api = new window.JitsiMeetExternalAPI(domain, options);
        api.resizeLargeVideo("1000px", "400px");
        api.executeCommand('toggleTileView');
        api.executeCommand('setTileView' ,  true);
      }
      useEffect(() => {
        startConference();
      });
        return (
            <div>
                <SideBar />
            </div>
        );
    }
export default Room;