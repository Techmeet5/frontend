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

export default function CenteredGrid() {
  const { push } = useHistory();
  const classes = useStyles();


  


  // For table 1
  const [userdata, setUserdata] = useState([])
  // For table 2
  const [selected, setSelected] = useState([])


  const [meeting, setMeeting] = useState({
    name   : "none",
    start  : "07:30",
    end    : "07:30",
    persons: []
  })

  console.log(meeting)

  // Function which is sent to table 1 component 
  function add_data(data){
    setSelected(selected.concat(data).reverse())
  }

  // Function which is sent to table 2 component 
  function delete_data(key){ 
    setSelected(selected.filter(item => item !== key))
  }

  //function update_meeting(){
    //setMeeting({...meeting, persons:selected})
  //}



  function schedule(){
    
    const server_meeting = {
      room_name   : meeting['name'],
      start_time  : meeting['start'],
      end_time    : meeting['end'],
      host: meeting['persons'][0]['username'],
      host_name:  meeting['persons'][0]['name'],
      host_email: meeting['persons'][0]['email'],

      participant_2: meeting['persons'][1]['username'],
      participant_2_name: meeting['persons'][1]['name'],
      participant_2_email: meeting['persons'][1]['email'],

      participant_3: meeting['persons'][2]['username'],
      participant_3_name: meeting['persons'][2]['name'],
      participant_3_email: meeting['persons'][2]['email'],

      participant_4: meeting['persons'][3]['username'],
      participant_4_name: meeting['persons'][3]['name'],
      participant_4_email: meeting['persons'][3]['email'],
    }

    axios.post('https://codeeditor-backend.herokuapp.com/api/meetings/',server_meeting)
        .then((response) => {
          console.log(response)
          console.log("Api Sent")
          // To reload after scheduling
          push('/')
          
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
          setUserdata(response.data)
          
        })
        .catch((error) => {
          console.log("Search Error\n",error)
        })
      }
  }

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
                    onClick={() => push('/room')}>
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