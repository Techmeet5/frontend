import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';
import Grid   from '@material-ui/core/Grid';

import Card1 from './meeting_card1';
import Card2 from './meeting_card2';


import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    card: {
        borderRadius: '20px',
        background:"#F9F3DF",
        marginTop: "5vh"
    }
}));



export default function Bar(props) {
    const { push } = useHistory();
    const classes = useStyles();

    const [details, setDetails]   = useState([])
    console.log("details -", details)
    console.log(props)


    useEffect( () => {

        let url = ""
        if(props.box.checkedHosted === true & props.box.checkedInvited === true){
            url = 'https://codeeditor-backend.herokuapp.com/api/meetings/total/'
        }
        else if(props.box.checkedHosted === true){
            url = 'https://codeeditor-backend.herokuapp.com/api/meetings/hosted/'
        }
        else if(props.box.checkedInvited === true){
            url = 'https://codeeditor-backend.herokuapp.com/api/meetings/invited/'            
        }
        else if(props.box.checkedHosted === false & props.box.checkedInvited === false){
            url = ''
        }

        axios.post(url,{"username":props.location.state.user})
            .then((response) => {
                console.log(response)
                console.log("Api Called")
                setDetails(response['data'].reverse())
            })
            .catch((error) => {
                console.log("Meeting Details Error - \n", error)
                setDetails([])
            })
        
       
    }, [props] )
    







    return (
        <div className={classes.root}>
            <Grid container direction="column">

                {details.map((value, key) => (
                    console.log(value['board_url'],value['meet_url'],key),
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
                                            onClick={() => push( { 
                                                pathname: "/room", 
                                                state: {
                                                  user: props.location.state.user,
                                                  meet: value['meet_url'],
                                                  board: value['board_url']
                                                }
                                              })}
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
