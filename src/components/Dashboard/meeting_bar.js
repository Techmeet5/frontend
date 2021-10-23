import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";

import Card1 from './meeting_card1';
import Card2 from './meeting_card2';


import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    card: {
        borderRadius: '20px',
        //background: "#fce0de",
        background:"#F9F3DF",
        marginTop: "10vh"
    }
}));



export default function Bar() {
    const { push } = useHistory();
    const classes = useStyles();

    const [details, setDetails] = useState([])
    console.log("details -", details)



    function get_data() {
        axios.get('https://codeeditor-backend.herokuapp.com/api/meetings/')
            .then((response) => {
                console.log(response)
                console.log("Api Called")
                setDetails(response['data'])
            })
            .catch((error) => {
                console.log("Meeting Error - \n", error)
            })
    }



    useEffect(() => get_data(), [])





    return (
        <div className={classes.root}>
            <Grid container direction="column">

                {details.map((value, key) => (

                    <Grid item className={classes.card}>
                        <Grid container direction="column" spacing={3}>

                            <Grid item>
                                <Card1 {...value} />
                            </Grid>


                            <Grid item>
                                <Card2 {...value}/>
                            </Grid>


                            <Grid item>
                                <Grid container>
                                    <Grid item xs={8}></Grid>
                                    <Grid item xs={3}>
                                        <Button
                                            style={{ width: '100%' }}
                                            variant="contained"
                                            onClick={() => push('/room')}
                                        >
                                            START
                                        </Button>
                                    </Grid>
                                    <Grid item xs={1}></Grid>
                                </Grid>
                            </Grid>


                            <Grid item />




                        </Grid>
                    </Grid>
                ))}



            </Grid>
        </div>
    );
}
