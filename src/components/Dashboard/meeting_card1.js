import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '20px'
    },
    text: {
        display: "flex"
    }
}));



export default function Card1(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={1} />
                <Grid item xs={5}>
                    <div className={classes.text}>
                        <Typography variant="h4" style={{ textAlign: 'left' }} display="inline">Room - </Typography>
                        <Typography variant="h4" style={{ textAlign: 'left', marginLeft: '5px' }}
                                    display="inline">
                                         {props.room_name}
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div className={classes.text}>
                        <Typography variant="h4" style={{ textAlign: 'left' }} display="inline">Time - </Typography>
                        <Typography variant="h4" style={{ textAlign: 'left', marginLeft: '80px' }} 
                                    display="inline">
                                        {props.start_time} -
                        </Typography>

                        <Typography variant="h4" style={{ textAlign: 'left', marginLeft: '20px' }} 
                                    display="inline">
                                        {props.end_time}
                        </Typography>
                    </div>
{/*                     <Typography variant="h4" style={{ textAlign: 'left' }}>Time</Typography>
 */}                </Grid>
            </Grid>
        </div>
    );
}
