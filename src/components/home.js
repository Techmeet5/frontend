import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "typeface-rubik";
import "typeface-pacifico";
import { createMuiTheme } from '@material-ui/core/styles'; 
import { ThemeProvider, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


const theme_1 = createMuiTheme({
  typography: {
    fontFamily: [
      'rubik',
      'pacifico',
      'serif',
    ].join(','),
},});

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#151348",
    paddingTop: '20px'
  },
  stretch: {
    height: 'calc(100% - 20px)',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  text: {
    marginTop: '50px',
    marginLeft: '80px'
  },
  buttons:{
    marginTop: '60px'
  },
  button:{
    backgroundColor: '#26BEFF',
    paddingLeft: '45px',
    paddingRight: '45px',
    fontWeight: '900'
  }
}));

export default function Main() {
  const classes = styles()

  return (
    <div className={classes.root}>
      <Grid container  spacing={0} alignItems="stretch"  >
        
        <Grid item xs={6}>
          <Paper  style={{ backgroundColor: "#151348", 
                          color: "#fff", 
                          textAlign: "center",
                          height: '100%'
                        }}
                  square
                  
                > 
          <ThemeProvider theme={theme_1}>
            <Typography variant="h2" gutterBottom>
              Welcome to React
            </Typography> 
          </ThemeProvider> 

          <Container maxWidth="sm" className={classes.text}>
            <ThemeProvider theme={theme_1}>
              <Typography  align="left" gutterBottom>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
                Nulla vitae nulla magna.
              Phasellus non sem ac ligula rhoncus vehicula.
              Donec non tempus eros, et cursus leo.
                Quisque neque turpis, facilisis ut tristique vel,
                rutrum eget sem.
              Aliquam erat volutpat.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Vestibulum tristique, ipsum vitae elementum facilisis,
              odio lorem mattis justo, at sollicitudin mi sapien eget purus.
              Ut et rhoncus neque. Nam nec aliquet elit.
              </Typography> 
            </ThemeProvider> 
          </Container>

          <Container maxWidth="sm" className={classes.buttons}>
            <Button variant="contained" color="#26BEFF" className={classes.button}>
                CLICK ME            
            </Button>
            <Button style={{marginLeft:'30px'}} variant="contained" className={classes.button}>
              CLICK ME
            </Button>
          </Container>
  
        
        
        </Paper>
        </Grid>

        <Grid item xs={6} className={classes.container}>
          <Paper  style={{ backgroundColor: "#151348", 
                          color: "#fff", 
                          textAlign: "center" }}
                  square
                >
            
            <svg width="720" height="540" viewBox="0 0 1108 1190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M626.264 11.8635L958.52 133.751L963.05 208.142L630.647 86.3701L626.264 11.8635Z" fill="url(#paint0_linear)"/>
            <path opacity="0.15" d="M684.084 275.246L866.448 343.309L867.503 360.644L685.14 292.58L684.084 275.246Z" fill="white"/>
            <path opacity="0.15" d="M681.779 237.402L899.969 319.927L901.054 337.742L682.864 255.217L681.779 237.402Z" fill="white"/>
            <path opacity="0.15" d="M679.64 202.261L930.039 297.257L931.117 314.968L680.718 219.972L679.64 202.261Z" fill="white"/>
            <path opacity="0.2" d="M690.534 323.775L937.361 417.497L946.921 574.47L700.094 480.747L690.534 323.775Z" fill="url(#paint1_linear)"/>
            <path d="M571.281 87.0236L832.263 183.65L835.359 234.489L574.377 137.863L571.281 87.0236Z" fill="#F2C94C"/>
            <path opacity="0.15" d="M626.264 11.8635L958.651 135.898L992.858 700.12L660.478 576.197L626.264 11.8635Z" fill="url(#paint2_linear)"/>
            <path opacity="0.4" d="M264.327 153.604C277.882 158.586 287.377 158.35 292.82 153.008C298.419 147.66 300.689 138.856 299.949 126.696L295.94 60.8768C295.179 48.3823 296.103 37.9504 298.867 29.5755C301.61 20.866 306.532 14.6483 313.619 10.6992C321.024 6.85036 330.925 5.59349 343.309 6.7055C356.011 7.91767 371.852 12.0337 390.676 19.0594L399.612 22.4219L402.771 74.2965L391.448 70.1269C377.893 65.1445 368.979 64.6881 364.55 68.7635C360.439 72.939 358.75 81.0509 359.497 93.3223L363.03 151.333C363.947 166.393 362.659 178.515 358.989 187.37C355.481 196.332 347.576 202.211 335.437 205.115C348.493 217.272 357.499 229.464 362.284 241.476C367.069 253.488 369.92 267.024 370.844 282.196L374.377 340.206C375.117 352.366 377.9 362.215 382.724 369.753C387.859 377.28 397.134 383.649 410.682 388.52L422.005 392.689L425.164 444.564L416.229 441.201C397.411 434.287 381.353 426.601 368.23 418.472C355.418 410.332 344.905 401.549 336.678 391.899C328.776 382.461 322.849 372.168 319.058 361.126C315.126 350.313 312.857 338.657 312.096 326.162L308.088 260.343C307.347 248.183 303.712 237.135 297.352 227.417C290.836 217.705 280.872 210.243 267.479 205.367L264.327 153.604Z" fill="url(#paint3_linear)"/>
            <path opacity="0.4" d="M600.152 334.002C587.241 328.993 578.209 329.211 573.047 334.547C567.737 339.887 565.603 348.691 566.344 360.858L570.355 426.717C571.116 439.219 570.269 449.654 567.665 458.028C565.081 466.737 560.269 472.954 553.384 476.786C546.654 480.724 537.239 481.964 525.151 480.728C513.367 479.593 498.432 475.441 480.51 468.49L472 465.11L468.839 413.204L479.623 417.396C492.533 422.406 500.86 422.772 504.765 418.714C508.966 414.644 510.696 406.526 509.955 394.359L506.421 336.314C505.496 321.133 506.692 309.119 510.157 300.266C513.467 291.307 520.97 285.438 532.509 282.555C520.052 270.369 511.448 258.154 506.86 246.128C502.272 234.102 499.519 220.554 498.595 205.373L495.06 147.328C494.319 135.161 491.488 125.196 486.579 117.657C481.974 110.218 473.139 103.941 460.377 98.9259L449.592 94.7339L446.431 42.8284L454.942 46.2088C472.864 53.1601 488.009 60.7725 500.222 68.9398C512.737 77.2078 522.765 86.0144 530.317 95.5828C538.166 105.14 543.984 115.444 547.63 126.609C551.403 137.435 553.597 149.101 554.358 161.603L558.369 227.462C559.11 239.629 562.601 250.688 568.681 260.422C574.909 270.151 584.41 277.635 597.166 282.538L600.152 334.002Z" fill="url(#paint4_linear)"/>
            <path opacity="0.15" d="M141.22 484.758L724.27 705.603L725.357 723.457L142.307 502.612L141.22 484.758Z" fill="white"/>
            <path opacity="0.2" d="M710.548 78.6026C711.264 90.362 703.011 96.1565 692.122 91.6348C681.233 87.1132 671.832 74.0696 671.116 62.3101C670.4 50.5507 678.653 44.7562 689.542 49.2779C700.432 53.7995 709.839 66.9573 710.548 78.6026Z" fill="white"/>
            <path opacity="0.15" d="M57.8399 203.347L1073.48 586.886L1107.85 1153.76L92.2094 770.222L57.8399 203.347Z" fill="url(#paint5_linear)"/>
            <path d="M0 346.341L261.093 444.794L264.243 496.51L3.15624 398.168L0 346.341Z" fill="#F2994A"/>
            <path opacity="0.15" d="M143.36 519.899L647.724 711.051L648.815 728.968L144.451 537.816L143.36 519.899Z" fill="white"/>
            <path opacity="0.15" d="M145.5 555.04L574.674 716.556L575.758 734.351L146.584 572.835L145.5 555.04Z" fill="white"/>
            <path opacity="0.2" d="M546.354 767.937L1057.79 960.524L1067.34 1117.31L555.902 924.728L546.354 767.937Z" fill="url(#paint6_linear)"/>
            <path opacity="0.15" d="M583.854 809.911L662.564 839.974L665.83 893.604L587.121 863.542L583.854 809.911Z" fill="white"/>
            <path opacity="0.15" d="M677.143 849.843L755.852 879.906L759.118 933.536L680.409 903.474L677.143 849.843Z" fill="white"/>
            <path opacity="0.15" d="M773.754 886.945L848.914 916.107L852.078 968.062L776.918 938.899L773.754 886.945Z" fill="white"/>
            <path opacity="0.15" d="M870.363 924.046L945.586 954.236L948.852 1007.87L873.629 977.676L870.363 924.046Z" fill="white"/>
            <path opacity="0.2" d="M52.5107 577.408L481.611 737.702L491.164 894.579L62.0577 734.173L52.5107 577.408Z" fill="url(#paint7_linear)"/>
            <path opacity="0.15" d="M101.296 632.514L437.518 759.62L438.595 777.3L102.373 650.194L101.296 632.514Z" fill="white"/>
            <path opacity="0.15" d="M103.601 670.358L371.782 770.435L372.841 787.834L104.654 687.648L103.601 670.358Z" fill="white"/>
            <path opacity="0.2" d="M57.6875 203.353L1069.89 585.343L1074.55 661.91L62.3572 280.032L57.6875 203.353Z" fill="url(#paint8_linear)"/>
            <path opacity="0.2" d="M171.006 285.284C171.722 297.044 163.469 302.838 152.58 298.316C141.691 293.795 132.29 280.751 131.574 268.992C130.858 257.232 139.111 251.438 150 255.959C160.89 260.481 170.297 273.639 171.006 285.284Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear" x1="737.46" y1="8.94963" x2="799.322" y2="219.696" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="861.205" y1="388.495" x2="814.342" y2="511.924" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="964.902" y1="138.238" x2="798.579" y2="584.159" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint3_linear" x1="531.307" y1="1.07319" x2="397.577" y2="364.553" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.903" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint4_linear" x1="666.336" y1="19.0785" x2="527.188" y2="377.456" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.903" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint5_linear" x1="736.938" y1="459.788" x2="647.669" y2="696.195" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint6_linear" x1="849.65" y1="882.123" x2="803.119" y2="1005.69" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint7_linear" x1="314.933" y1="675.397" x2="268.645" y2="799.293" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint8_linear" x1="298.763" y1="132.698" x2="551.905" y2="657.185" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>


          </Paper> 
        </Grid>
        
      </Grid>
    </div>
  );
}
