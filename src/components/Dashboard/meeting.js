import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper          from '@material-ui/core/Paper';
import Grid           from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox         from '@material-ui/core/Checkbox';

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
  checkbox:{
    fontSize: '24px',
    marginLeft: '4px'
  }

}));
 
export default function Meetings(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    checkedHosted: true,
    checkedInvited: false,
  });
  console.log(state.checkedHosted)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        
        <Grid item xs={0}></Grid>
        
        
        
        <Grid item xs={11}>

          <Paper className={classes.paper}>

            <Grid container direction="column" spacing={0}>

                <Grid item>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Typography variant="h5" style={{textAlign:'left',fontWeight:'bold',marginTop:'20px',color: '#120e0e'}}>
                        SCHEDULED MEETINGS
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>

                      <FormControlLabel
                          control={
                            <Checkbox checked={state.checkedHosted}
                                      onChange={handleChange}
                                      onClick={() => console.log("Hosted clicked")} 
                                      name="checkedHosted"
                                      style={{
                                        transform: "scale(1.2)",
                                      }}
                             />
                            }
                            label={
                              <Typography variant="subtitle2" 
                                          color="#000" 
                                          className={classes.checkbox} >
                                      Hosted
                              </Typography>}
                      />

                      <FormControlLabel
                              control={
                                <Checkbox
                                  checked={state.checkedInvited}
                                  onChange={handleChange}
                                  onClick={() => console.log("Invited clicked")} 
                                  name="checkedInvited"
                                  style={{
                                    transform: "scale(1.2)",
                                  }}
                                />
                              }
                              label={
                                <Typography variant="subtitle2" 
                                            color="#000" 
                                            className={classes.checkbox} >
                                        Invited
                                </Typography>
                              }
                            />
                    </Grid>
                  </Grid>
                </Grid>


                <Grid item>
                  <Grid container>
                    <Grid item xs={12}>
                      <Bar box={state} {...props} />
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