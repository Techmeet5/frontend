import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card                     from '@material-ui/core/Card';
import CardContent              from '@material-ui/core/CardContent';
import Typography               from '@material-ui/core/Typography';

import companyLogo from './pic.png';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        borderRadius: '25px',
        padding: '20px'
    },
    details: {
        width: '70%'
    },
    content: {
        flex: '1 0 auto',
    },
    image: {
        borderRadius: '100%',
        width: '20%',
        border: '1px solid blue',
    },
    img:{
        borderRadius: '100%',
        height: '100%',
        width: "100%"
    }


}));

export default function AvatarCard(props) {
    const classes = useStyles();

//    console.log("Inside Avatar card",props)
    return (
        <Card className={classes.root}>

            <div className={classes.image}>
                <img  className={classes.img} src={companyLogo} alt="" />
            </div>

            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        @{props.username}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.email}
                    </Typography>
                </CardContent>
            </div>



        </Card>
    );
}
