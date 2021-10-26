import React from 'react';
function WhiteBoard(){
    return (
     
      <iframe
        title="notitle" 
        allowtransparency="true"
        style={{backgroundColor: "Snow"}}
        src='https://whiteboard-techmeet.herokuapp.com/boards/techmeet'
        //src="http://whiteboard-techmeet.herokuapp.com/boards/QfOCmUeE8xPiTviRp9Ue1GVd-YWdvWbA54l2IrZJS5E-"
        frameborder="0"
        height="850px"
        width="100%">
      </iframe>
      
    );
}

export default WhiteBoard;