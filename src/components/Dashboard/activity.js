import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
        <Grid item xs={11}>
          <Paper className={classes.paper}>
            <Grid container direction="column" spacing={3}>
                <Grid item>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h6" style={{textAlign:'left',color:"#ff9191"}}>
                        ACTIVITY LOG
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}