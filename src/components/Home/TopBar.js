import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"#151348"
  },
  title: {
    flexGrow: 1,
  },
  appbar:{
    backgroundColor: "#151348",
    paddingBottom: '20px'
  },
  button:{
      marginLeft: '30px',
  }
}));

export default function TopBar(props) {
  const classes = useStyles();

    function showLogin(event) {
        props.onChange(2);  
    }
    function showSignUp(event) {
        props.onChange(3);  
    }
  
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <svg width="80" height="80" viewBox="0 0 191 102" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7C0 3.13401 3.13401 0 7 0H184C187.866 0 191 3.13401 191 7V95C191 98.866 187.866 102 184 102H7C3.13401 102 0 98.866 0 95V7Z" fill="white"/>
              <path d="M70.5098 36.9092H56.1367V76H46.4688V36.9092H32.2891V29.0781H70.5098V36.9092Z" fill="black"/>
              <path d="M87 31C87 29.3431 88.3431 28 90 28H137C138.657 28 140 29.3431 140 31V74C140 75.6569 138.657 77 137 77H90C88.3431 77 87 75.6569 87 74V31Z" fill="#26BEFF"/>
              <path d="M138.103 53.7656L168.818 34.9648L169.082 72.2376L138.103 53.7656Z" fill="#26BEFF"/>
              </svg>
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="menu">

              <svg width="150" height="80" viewBox="0 0 430 129" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M65.8496 36.8486H41.8945V102H25.7812V36.8486H2.14844V23.7969H65.8496V36.8486Z" fill="#26BEFF"/>
              <path d="M80.5996 97.7422C74.7116 97.7422 69.9121 95.9362 66.2012 92.3242C62.515 88.7122 60.6719 83.9004 60.6719 77.8887V76.8496C60.6719 72.8171 61.4512 69.2174 63.0098 66.0508C64.5684 62.8594 66.7702 60.4102 69.6152 58.7031C72.485 56.9714 75.7507 56.1055 79.4121 56.1055C84.9043 56.1055 89.2214 57.8372 92.3633 61.3008C95.5299 64.7643 97.1133 69.6751 97.1133 76.0332V80.4121H71.5449C71.8913 83.0345 72.9303 85.1374 74.6621 86.7207C76.4186 88.304 78.6328 89.0957 81.3047 89.0957C85.4362 89.0957 88.6647 87.599 90.9902 84.6055L96.2598 90.5059C94.6517 92.7819 92.4746 94.5632 89.7285 95.8496C86.9824 97.1113 83.9395 97.7422 80.5996 97.7422ZM79.375 64.7891C77.2474 64.7891 75.5156 65.5065 74.1797 66.9414C72.8685 68.3763 72.0273 70.4297 71.6562 73.1016H86.5742V72.248C86.5247 69.873 85.8815 68.0423 84.6445 66.7559C83.4076 65.4447 81.651 64.7891 79.375 64.7891ZM121.456 89.0957C123.435 89.0957 125.043 88.5514 126.28 87.4629C127.517 86.3743 128.16 84.9271 128.209 83.1211H138.266C138.241 85.8424 137.499 88.3411 136.04 90.6172C134.58 92.8685 132.576 94.625 130.028 95.8867C127.504 97.1237 124.709 97.7422 121.641 97.7422C115.902 97.7422 111.374 95.9238 108.059 92.2871C104.744 88.6257 103.086 83.5788 103.086 77.1465V76.4414C103.086 70.2565 104.732 65.321 108.022 61.6348C111.312 57.9486 115.827 56.1055 121.567 56.1055C126.589 56.1055 130.609 57.5404 133.627 60.4102C136.67 63.2552 138.217 67.0527 138.266 71.8027H128.209C128.16 69.7246 127.517 68.0423 126.28 66.7559C125.043 65.4447 123.41 64.7891 121.381 64.7891C118.883 64.7891 116.99 65.7044 115.704 67.5352C114.442 69.3411 113.811 72.2852 113.811 76.3672V77.4805C113.811 81.612 114.442 84.5807 115.704 86.3867C116.965 88.1927 118.883 89.0957 121.456 89.0957ZM156.374 61.2266C159.219 57.8125 162.794 56.1055 167.099 56.1055C175.807 56.1055 180.223 61.1647 180.347 71.2832V97H169.622V71.5801C169.622 69.2793 169.127 67.5846 168.138 66.4961C167.148 65.3828 165.503 64.8262 163.202 64.8262C160.06 64.8262 157.784 66.0384 156.374 68.4629V97H145.649V40H156.374V61.2266Z" fill="white"/>
              <path d="M223.037 23.7969L243.125 80.5156L263.105 23.7969H284.268V102H268.101V80.623L269.712 43.7236L248.604 102H237.539L216.484 43.7773L218.096 80.623V102H201.982V23.7969H223.037Z" fill="#26BEFF"/>
              <path d="M324.763 102.879C317.79 102.879 312.106 100.74 307.712 96.4629C303.347 92.1855 301.164 86.4873 301.164 79.3682V78.1377C301.164 73.3623 302.087 69.0996 303.933 65.3496C305.778 61.5703 308.386 58.6699 311.755 56.6484C315.153 54.5977 319.021 53.5723 323.356 53.5723C329.86 53.5723 334.973 55.623 338.693 59.7246C342.443 63.8262 344.318 69.6416 344.318 77.1709V82.3564H314.04C314.45 85.4619 315.681 87.9521 317.731 89.8271C319.812 91.7021 322.434 92.6396 325.598 92.6396C330.49 92.6396 334.313 90.8672 337.067 87.3223L343.308 94.3096C341.403 97.0049 338.825 99.1143 335.573 100.638C332.321 102.132 328.718 102.879 324.763 102.879ZM323.312 63.8555C320.793 63.8555 318.742 64.7051 317.16 66.4043C315.607 68.1035 314.611 70.5352 314.172 73.6992H331.838V72.6885C331.779 69.876 331.018 67.708 329.553 66.1846C328.088 64.6318 326.008 63.8555 323.312 63.8555ZM375.254 102.879C368.281 102.879 362.598 100.74 358.203 96.4629C353.838 92.1855 351.655 86.4873 351.655 79.3682V78.1377C351.655 73.3623 352.578 69.0996 354.424 65.3496C356.27 61.5703 358.877 58.6699 362.246 56.6484C365.645 54.5977 369.512 53.5723 373.848 53.5723C380.352 53.5723 385.464 55.623 389.185 59.7246C392.935 63.8262 394.81 69.6416 394.81 77.1709V82.3564H364.531C364.942 85.4619 366.172 87.9521 368.223 89.8271C370.303 91.7021 372.925 92.6396 376.089 92.6396C380.982 92.6396 384.805 90.8672 387.559 87.3223L393.799 94.3096C391.895 97.0049 389.317 99.1143 386.065 100.638C382.813 102.132 379.209 102.879 375.254 102.879ZM373.804 63.8555C371.284 63.8555 369.234 64.7051 367.652 66.4043C366.099 68.1035 365.103 70.5352 364.663 73.6992H382.329V72.6885C382.271 69.876 381.509 67.708 380.044 66.1846C378.579 64.6318 376.499 63.8555 373.804 63.8555ZM419.066 42.7617V54.4512H427.196V63.7676H419.066V87.498C419.066 89.2559 419.403 90.5156 420.077 91.2773C420.75 92.0391 422.039 92.4199 423.944 92.4199C425.35 92.4199 426.595 92.3174 427.679 92.1123V101.736C425.189 102.498 422.625 102.879 419.989 102.879C411.082 102.879 406.541 98.3818 406.366 89.3877V63.7676H399.422V54.4512H406.366V42.7617H419.066Z" fill="white"/>
              </svg>
            </IconButton>
            
            <Typography className={classes.title}>

            </Typography>
            
            <Button color="inherit" className={classes.button}>
              <Typography variant="h6">
                Home
              </Typography>
            </Button>

            <Button onClick={showLogin} color="inherit" className={classes.button}>
              <Typography variant="h6">
                Login
              </Typography>
            </Button>

            <Button onClick={showSignUp}  color="inherit" className={classes.button}>
              <Typography variant="h6">
                Create Account
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
        
      </div>
    );
  
}