import React from 'react';

function VidConf(props) {
  const containerStyle = {
    width: '1500px',
    height: '800px',
  };
  if(props.data===false){
    containerStyle.height=0;
    containerStyle.width=0;
  }else{
    containerStyle.height='';
    containerStyle.width='1500px';
  }
  return (
    <div>
      <div style={containerStyle} id="jitsi-container" />
    </div>
  );
}

export default VidConf;