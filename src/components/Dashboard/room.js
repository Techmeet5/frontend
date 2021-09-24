import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

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

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        
        <Grid item xs={1}></Grid>
        
        
        
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Grid container direction="column" spacing={3}>

                <Grid item>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h6" style={{textAlign:'left'}}>
                        CREATE ROOM
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <TextField label="Room Name"  />
                    </Grid>

                    <Grid item xs={4}></Grid>
                    <Grid item xs={2}>
                      <TextField
                        id="time"
                        label="Start"
                        type="time"
                        defaultValue="07:30"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                      />
                    </Grid>

                    <Grid item xs={2}>
                      <TextField
                        id="time"
                        label="End"
                        type="time"
                        defaultValue="07:30"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                      />
                    </Grid>

                  </Grid>
                </Grid>

                <vr />
                <Grid item>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h6" style={{textAlign:'left'}}>
                        CREATE ROOM
                      </Typography>
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