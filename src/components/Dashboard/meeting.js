import { makeStyles } from '@material-ui/core/styles';
import Paper          from '@material-ui/core/Paper';
import Grid           from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import Bar from './meeting_bar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  
}));
 
export default function Meetings() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        
        <Grid item xs={1}></Grid>
        
        
        
        <Grid item xs={10}>

          <Paper className={classes.paper}>

            <Grid container direction="column" spacing={0}>

                <Grid item>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h5" style={{textAlign:'left',fontWeight:'bold',marginTop:'20px'}}>
                        SCHEDULED MEETINGS
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>


                <Grid item>
                  <Grid container>
                    <Grid item xs={12}>
                      <Bar />
                    </Grid>
                  </Grid>
                </Grid>


            </Grid>

          </Paper>

        </Grid>
        




        <Grid item xs={1}></Grid>

      </Grid>
    </div>
  );
}