import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from './avatar_card';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));


export default function Card2(props){
    const classes = useStyles();

    let p2 = true
    let p3 = true
    let p4 = true


    if(props['participant_2']==="none"){
        p2 = false
    }

    if(props['participant_3']==="none"){
        p3 = false
    }

    if(props['participant_4']==="none"){
        p4 = false
    }

    return (
        <div className={classes.root}>
            <Grid container direction="column" spacing={3}>

                <Grid item>
                    <Grid container spacing={3}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                            <Card username={props.host} name={props.host_name} email={props.host_email} />
                        </Grid>
                        <Grid item xs={5}>
                            { p2 ? (<Card username={props.participant_2} name={props.participant_2_name} email={props.participant_2_email} />) : <div></div> }
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Grid>



                <Grid item>
                    <Grid container spacing={3}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                            { p3 ? (<Card username={props.participant_3} name={props.participant_3_name} email={props.participant_3_email}  />) : <div></div> }
                        </Grid>
                        <Grid item xs={5}>
                            { p4 ? (<Card username={props.participant_4} name={props.participant_4_name} email={props.participant_4_email}  />) : <div></div> }
                        </Grid>
                        <Grid item xs={1}></Grid>

                    </Grid>
                </Grid>



            </Grid>
        </div>
    );
}
