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
import Button         from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

import VidConf        from './VidConf';
import Editor         from './Editor';
import WhiteBoard     from './WhiteBoard';
import Profile        from './Profiles'   

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
    //backgroundColor: "#343a40"

  },
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient(#66615b,#000 80%)',
    //backgroundColor: "#343a40",
    //backgroundColor: "#ffffff",
    //color: "#fbc658",
    color: "#fff",
    textTransform: "uppercase"

  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    //backgroundColor: theme.palette.background.default,
    backgroundColor: '#c9c9c9',
    padding: theme.spacing(3),
  },
  logo:{
    textAlign: "center",
    padding: theme.spacing(2)
  },
  divider:{
    marginTop: theme.spacing(10),
  },
  li_item:{
    marginTop: theme.spacing(2),
    color: "#fff",
    '&:focus':{
      color: "aqua"
    }
  }
  
  
}));
 
export default function SideBar(props) {
  const { push } = useHistory();

  const classes = useStyles();

  const [VideoConference    , set_VideoConference] = React.useState(true)
  const [CodeEditor         , set_CodeEditor     ] = React.useState(false)
  const [Profiles           , set_Profiles       ] = React.useState(false)
  const [Whiteboard         , set_whiteboards    ] = React.useState(false)
  const [Title              , set_Title          ] = React.useState("Video Conference")


  function showPage(page_number){
    console.log(page_number)
    const show = [set_VideoConference,set_CodeEditor,set_whiteboards,set_Profiles]
    const titles=["Video Conference","Code Editor","Whiteboard","Profiles"]
    for (let i = 0; i < show.length; i++) {
      if(i===page_number){
        show[i](true)
        set_Title(titles[i]);
      }
      else{
        show[i](false)
      } 
    }
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {Title}
          </Typography>
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
        <Divider  />
          <List className={classes.divider}>
            {['Video Conference', 'Code Editor', 'WhiteBoard', 'Profiles'].map((text, index) => (
              <ListItem button key={text} 
                        className={classes.li_item}
                        onClick={() => showPage(index)}>
              <ListItemIcon>
                    
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        
      </Drawer>
      
      <main className={classes.content}>
        
        <div className={classes.toolbar} />

        <div>
            <VidConf data={VideoConference} />
            {CodeEditor  ? <Editor />    : ''}
            {Profiles     ? <Profile />   : ''}
            {Whiteboard  ? <WhiteBoard {...props} /> : ''}
        </div>


      </main>
    </div>
  );
}
