import React from 'react'
import Editor1 from './editor_1'


function Editor(){

    console.log("render App2")
    const websocket = new WebSocket('ws://codeeditor-backend.herokuapp.com/ws/code/')
    
    websocket.onclose = function(e) {
        console.error('Chat socket closed unexpectedly');
      };
      
    return(
        <Editor1 websocket={websocket} />
    )

}


export default Editor
