import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  left:{
    padding: '100px',
    background: 'linear-gradient(to right top, #FFFFFF 50%, #151348 10%)',
    color: '#ffffff',
  },
  right: {
    padding: '100px',
    background: 'linear-gradient(to right bottom, #151348 50%, #FFFFFF 10%)',
    color: '#ffffff',
  },
 
  
  
}));



export default function BottomBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <div className={classes.left}>
            <div className={classes.d_left}></div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.right}>
            <div className={classes.d_right}></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
