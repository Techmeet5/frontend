import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper          from '@material-ui/core/Paper';
import Grid           from '@material-ui/core/Grid';

import Card            from '@material-ui/core/Card';
import CardMedia       from '@material-ui/core/CardMedia';
import CardContent     from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import TextField       from '@material-ui/core/TextField';
import Button          from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { Divider, Typography } from '@material-ui/core';
import './svg.css'
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid:{
    minHeight: '80vh'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
  },
  root2: {
    maxWidth: 343,
    margin: 'auto',
    border: 'solid',
    borderColor: 'red',
    borderRadius: 12,
    padding: 12,
    height: "100%",
  },
  media: {
    borderRadius: 6,
    padding: '2px',
    minHeight:"190px"
  },
  heading:{
    textAlign: 'left'
  },
  divider:{
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  
}));

export default function CenteredGrid(props) {
  const classes = useStyles();

  const [details, setDetails] = useState({
    username: null,
    email:    null,
    first_name: null,
    last_name: null,
    college:  null,
    year:     null,
    degree:   null,
    country:  null,
    about:    null,
  })


  console.log("Inside profile")
  console.log(details)
  console.log(props.location.state.user)
  const url = 'https://codeeditor-backend.herokuapp.com/api/profile/'+props.location.state.user+'/'
  
  function update_profile(){

    console.log("Sending API")
    axios.put(url,details)
    .then( (response) => {
        console.log(response.data)
        console.log("API Sent")
    })
    .catch( (error) => {} )
    }



  useEffect(() => {
  axios.get(url)
  .then((response)=>{
        console.log(response.data)
          setDetails(
            {
              username  : response.data.username,
              email     : response.data.email,
              first_name: response.data.first_name,
              last_name : response.data.last_name,
              college   : response.data.college,
              year      : response.data.year,
              degree    : response.data.degree,
              country   : response.data.country,
              about     : response.data.about,
            }
          )
            
  })
  .catch((error)=>{})
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [])
  
  
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="stretch" > 
        
        <Grid item xs={0}></Grid>
        <Grid item xs={3} className={classes.grid}>
          <Paper className={classes.paper}>

          <Card className={classes.root2}>
            <CardMedia
              className={classes.media}
              

              image={
                'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
              }
            />
            <Divider className={classes.divider}/>
            <CardContent>
              <TextInfoContent
                
                overline={details['username']}
                heading={details['first_name']}
                body={
                  details['about']
                }
              />
            </CardContent>
          </Card>


          </Paper>
        </Grid>

        <Grid item xs={8} className={classes.grid}>
          <Paper className={classes.paper}>
            
            <div >
            <Typography variant="h6" className={classes.heading}>
              Edit Profile
            </Typography>
            <Divider className={classes.divider}/>
            
            <Grid container
                  direction="column"
                  spacing={4}   
                  
                  >
              
              <Grid item xs={12} >

                <Grid container spacing={1}>
                  
                  <Grid item xs={12}>
                    <TextField  label="Email"  value={details.email} onChange={ (e) => setDetails( {...details,email:e.target.value}) } variant="outlined" fullWidth />
                  </Grid>
                </Grid>

              </Grid>



              <Grid item xs={12} style={{flexBasis: '0px'}} >

                <Grid container spacing={4} >
                  <Grid item xs={6}>
                    <TextField size="small"  label="First Name"  value={details.first_name} onChange={ (e) => setDetails( {...details,first_name:e.target.value}) } variant="outlined" />
                  </Grid>
                  <Grid item xs={6} >
                    <TextField size="small"  label="Last Name"    value={details.last_name} onChange={ (e) => setDetails( {...details,last_name:e.target.value}) } variant="outlined"  />
                  </Grid>
                </Grid>
                
              </Grid>

              <Grid item xs={12} style={{flexBasis: '0px'}} >

                <Grid container spacing={4} >
                  <Grid item xs={12}>
                    <TextField size="small"  label="College Name" placeholder="College Name"  value={details.college} onChange={ (e) => setDetails( {...details,college:e.target.value}) } variant="outlined" fullWidth/>
                  </Grid>
                </Grid>
                
              </Grid>

              <Grid item xs={12} style={{flexBasis: '0px'}} >

                <Grid container spacing={4} >
                  <Grid item xs={4}>
                    <TextField size="small"  label="Year of Graduation"  value={details.year} onChange={ (e) => setDetails( {...details,year:e.target.value}) } variant="outlined" />
                  </Grid>
                  <Grid item xs={4} >
                    <TextField size="small"  label="Degree"  value={details.degree} onChange={ (e) => setDetails( {...details,degree:e.target.value}) } variant="outlined"  />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField size="small"  label="Country"  value={details.country} onChange={ (e) => setDetails( {...details,country:e.target.value}) } variant="outlined" />
                  </Grid>
                </Grid>
                
              </Grid>
              
              <Grid item xs={12} style={{flexBasis: '0px'}} >

                <Grid container spacing={1} >

                  <Grid item xs={1}>
                    <Typography  style={{fontWeight:'bold',textAlign:'left'}}>
                      About
                    </Typography>
                  </Grid>

                  <Grid item xs={11}>
                    
                  </Grid>

                  <Grid item xs={12}>
                  <TextareaAutosize style={{width:'100%' }} aria-label="About" minRows={5} placeholder="I am a Coder !!" value={details.about} onChange={ (e) => setDetails( {...details,about:e.target.value}) } multiline/>
                  </Grid>
                </Grid>
                
              </Grid>
              
              
              
              
              <Grid item xs={12} style={{flexBasis: '0px'}} >

                <Grid container spacing={4}>
                  <Grid item xs={8}>
                    
                  </Grid>
                  
                  <Grid item xs={4}>
                    <Button style={{textTransform: 'none',backgroundColor: '#23ccef'}} 
                            variant="contained" 
                            color="primary"
                            onClick={update_profile} >
                      Update Profile
                    </Button> 
                  </Grid>
                </Grid>
                
              </Grid>
              

             
            

            </Grid>
            </div>
          </Paper>
        
        </Grid>
      </Grid>
    </div>
  );
}
