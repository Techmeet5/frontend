import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from "react-router-dom";

import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    accordion:{
        marginTop: '0vh'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));



export default function Bar() {
    const { push } = useHistory();
    const classes = useStyles();

    const [details, setDetails] = useState([])
    console.log("details -", details)



    function get_data() {
        axios.get('http://localhost:8000/api/meetings/')
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
            {details.map((value, key) => (

                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >

                        <Grid container>
                            <Grid item xs={8}>
                                <Typography variant="h5" style={{ textAlign: 'left' }}>{value['room_name']}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Button style={{ width: '100%' }}
                                        variant="contained"
                                        onClick={() => push('/room')}
                                        >
                                    START
                            </Button>
                            </Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>


                    </AccordionSummary>


                    <AccordionDetails>
                        <Grid container direction="column">
                            <Grid item >
                                <Typography variant="subtitle2"
                                    style={{ textAlign: 'left', fontWeight: 'bold' }} >
                                    TIME - {value['start_time']} --  {value['end_time']}
                                </Typography>
                            </Grid>

                            <Grid item >
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="PARTICIPANTS --"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary={value['participant_1']}
                                        />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemText
                                            primary={value['participant_2']}
                                        />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemText
                                            primary={value['participant_3']}
                                        />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemText
                                            primary={value['participant_4']}
                                        />
                                    </ListItem>

                                </List>


                            </Grid>
                        </Grid>

                    </AccordionDetails>
                </Accordion>

            ))}

        </div>
    );
}
