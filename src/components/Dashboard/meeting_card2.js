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


    return (
        <div className={classes.root}>
            <Grid container direction="column" spacing={3}>

                <Grid item>
                    <Grid container spacing={3}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                            <Card name={props.participant_1} />
                        </Grid>
                        <Grid item xs={5}>
                            <Card name={props.participant_2}  />
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Grid>



                <Grid item>
                    <Grid container spacing={3}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                            <Card name={props.participant_3}  />
                        </Grid>
                        <Grid item xs={5}>
                            <Card name={props.participant_4}  />
                        </Grid>
                        <Grid item xs={1}></Grid>

                    </Grid>
                </Grid>



            </Grid>
        </div>
    );
}
