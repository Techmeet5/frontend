import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer         from '@material-ui/core/Drawer';
import CssBaseline    from '@material-ui/core/CssBaseline';
import AppBar         from '@material-ui/core/AppBar';
import Toolbar        from '@material-ui/core/Toolbar';
import List           from '@material-ui/core/List';
import Typography     from '@material-ui/core/Typography';
import Divider        from '@material-ui/core/Divider';
import ListItem       from '@material-ui/core/ListItem';
import ListItemIcon   from '@material-ui/core/ListItemIcon';
import ListItemText   from '@material-ui/core/ListItemText';
import InboxIcon      from '@material-ui/icons/MoveToInbox';
import MailIcon       from '@material-ui/icons/Mail';
import Button         from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

import './svg.css'
//import { ReactComponent as Bell } from '../../svg/bell_icon.svg'

import Meeting from './meeting.js'
import Room from './room.js'
import Whiteboard from './whiteboard.js'
import Profile from './profile.js'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#c9c9c9',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "#fff",
    color: "#212529",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient(#66615b,#000 80%)',
    color: "#fff",
    textTransform: "uppercase"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#c9c9c9',
    padding: theme.spacing(3),
  },
  logo: {
    textAlign: "center",
    padding: theme.spacing(2)
  },
  divider: {
    marginTop: theme.spacing(5)
  },
  li_item: {
    marginTop: theme.spacing(2),
    color: "#fff",
    '&:focus': {
      color: "aqua"
    }
  }


}));

export default function Dashboard(props) {
  const { push } = useHistory();
  const classes = useStyles();

  const [meetings,    set_meetings]   = React.useState(true)
  const [room,        set_room]       = React.useState(false)
  const [whiteboards, set_wboard]     = React.useState(false)
  const [profile,     set_profile]    = React.useState(false)


  function showPage(page_number) {
    console.log(page_number)
    const show = [set_meetings, set_room, set_wboard, set_profile]

    for (let i = 0; i < show.length; i++) {
      if (i === page_number) {
        console.log(show[i])
        show[i](true)
      }
      else {
        show[i](false)
      }

    }
    console.log(meetings, room, whiteboards, profile)
  }


  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        </Toolbar>
      </AppBar>

      <hr />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >

        <div className={classes.logo} >
          <Typography variant="h6" >
            <Button 
                style={{color: 'white', fontSize: '20px', padding: '0px 30px'}}
                onClick={() => push({ 
                pathname: "/homepage", 
                state:  {
                  user: props.location.state.user,
                  name: props.location.state.name,
                  email: props.location.state.email
                }
              })}>
              Techmeet
            </Button>
          </Typography>

        </div>
        <Divider />
        <List className={classes.divider}>
          {['Meetings', 'Room', 'Whiteboards', 'Profile'].map((text, index) => (
            <ListItem button key={text}
              className={classes.li_item}
              onClick={() => showPage(index)}
            >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon style={{ fill: "#a69d9d" }} /> : <MailIcon style={{ fill: "#a69d9d" }} />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </Drawer>

      <main className={classes.content}>

        <div className={classes.toolbar} />

        <div>
          {meetings    ? <Meeting {...props} />  : ''}
          {room        ? <Room    {...props} />  : ''}
          {whiteboards ? <Whiteboard />          : ''}
          {profile     ? <Profile {...props} />  : ''}

        </div>


      </main>
    </div>
  );
}
