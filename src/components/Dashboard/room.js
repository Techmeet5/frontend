import { makeStyles } from '@material-ui/core/styles';
import Paper          from '@material-ui/core/Paper';
import Grid           from '@material-ui/core/Grid';
import TextField      from '@material-ui/core/TextField';
import Button         from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { Typography } from '@material-ui/core';

import axios                   from 'axios';
import { useEffect, useState } from 'react';

// Search Options Components
import UserTable  from './room_table'

// Selected Users Component
import UserTable2 from './room_table2'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));

export default function CenteredGrid(props) {
  const { push } = useHistory();
  const classes = useStyles();

  //to generate random strings
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  function generateString(length) {
      let result = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
  }


  console.log(props)

  // For table 1
  const [userdata, setUserdata] = useState([])
  // For table 2
  const [selected, setSelected] = useState( [
              
          { "username":props.location.state.user,
            "name"    :props.location.state.name,
            "email"   :props.location.state.email
          }
      ])

  console.log("selected - ",selected)


  const [meeting, setMeeting] = useState({
    name     : "none",
    start    : "07:30",
    end      : "07:30",
    meet_url : generateString(10),
    board_url: generateString(10),
    persons  : []
  })

  console.log(meeting)

  // Function which is sent to table 1 component 
  function add_data(data){
    if(selected.length<4){
      setSelected(selected.concat(data))
    }
    else{
      console.log("Array is Full")
    }
  }

  // Function which is sent to table 2 component 
  function delete_data(key){
    if(key['username']===props.location.state.user){}
    else
    {
      setSelected(selected.filter(item => item !== key))
    }
  }



  function schedule(){

    

    axios.post('https://codeeditor-backend.herokuapp.com/api/meetings/set/',meeting)
        .then((response) => {
          console.log(response)
          console.log("Api Sent")
          // To reload after scheduling
          //push('/homepage')
          push( { 
            pathname: "/homepage", 
            state:  {
              user: props.location.state.user,
              name: props.location.state.name,
              email: props.location.state.email
            }
          })
          
        })
        .catch((error) => {
          console.log("Schedule Error\n",error)
        })
  }
  


  //API CALL 
  function search(event){
    if(event.target.value===''){}
    else{
        axios.post('https://codeeditor-backend.herokuapp.com/api/list/',{
          "username":event.target.value,
        })
        .then((response) => {
          const val = response.data.find(item => item.username === props.location.state.user)
          const index = response.data.indexOf(val)
          if (index > -1) {
            response.data.splice(index, 1);
          }

          setUserdata(response.data)
          
        })
        .catch((error) => {
          console.log("Search Error\n",error)
        })
      }
  }
    // eslint-disable-next-line 
    useEffect( () => { setMeeting({...meeting,persons:selected}) },[selected])


  return (
    <div className={classes.root}>

      <Grid container spacing={3}>

        <Grid item xs={0}></Grid>



        <Grid item xs={11}>
          <Paper className={classes.paper}>
            <Grid container direction="column" spacing={3}>

              <Grid item>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h6" style={{ textAlign: 'left' }}>
                      CREATE ROOM
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <TextField required 
                              onChange={(event) => setMeeting({...meeting, name:event.target.value})} 
                              label="Room Name" />
                  </Grid>

                  <Grid item xs={4}></Grid>
                  <Grid item xs={2}>
                    <TextField
                      id="time"
                      label="Start"
                      type="time"
                      defaultValue="07:30"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                      onChange={(event) => setMeeting({...meeting, start:event.target.value})}
                    />
                  </Grid>

                  <Grid item xs={2}>
                    <TextField
                      id="time"
                      label="End"
                      type="time"
                      defaultValue="07:30"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                      onChange={(event) => setMeeting({...meeting, end:event.target.value})}
                    />
                  </Grid>

                </Grid>
              </Grid>

              <Grid item>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField variant="outlined" placeholder="Search..." onChange={search} />
                    
                    <UserTable  data={userdata} func={add_data} />
             
                    <UserTable2  data={selected} func={delete_data} />

                  
                  
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container spacing={3}>
                  <Grid item xs={8}></Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" onClick={schedule}>
                      Schedule
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button 
                    variant="contained"
                    onClick={() => push( { 
                      pathname: "/room", 
                      state: {
                        user: props.location.state.user,
                        meet: generateString(10),
                        board: generateString(10)
                      }
                    })}>
                      Start
                    </Button>
                  </Grid>
                </Grid>
              </Grid>


            </Grid>
          </Paper>
        </Grid>





        <Grid item xs={1}></Grid>

      </Grid>
    </div>
  );
}