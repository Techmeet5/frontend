import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VidConf from './VidConf';
import WhiteBoard from './WhiteBoard';      

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
 
export default function SideBar() {
  
  const classes = useStyles();

  const [VideoConference    , set_VideoConference] = React.useState(true)
  const [CodeEditor         , set_CodeEditor     ] = React.useState(false)
  const [Profiles           , set_Profiles       ] = React.useState(false)
  const [Whiteboard         , set_whiteboards    ] = React.useState(false)
  const [Title              , set_Title          ] = React.useState("VideoConference")


  function showPage(page_number){
    console.log(page_number)
    const show = [set_VideoConference,set_CodeEditor,set_whiteboards,set_Profiles]
    const titles=["VideoConference","CodeEditor","Whiteboard","Profiles"]
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
              TechMeet
          </Typography>
          
        </div>
        <Divider  />
          <List className={classes.divider}>
            {['Video Confrence', 'Code Editor', 'WhiteBoard', 'Profiles'].map((text, index) => (
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
            {/* {room         ? <Room />       : ''} */}
            {/* {profile      ? <Profile />    : ''} */}
            {Whiteboard  ? <WhiteBoard/> : ''}
        </div>


      </main>
    </div>
  );
}
