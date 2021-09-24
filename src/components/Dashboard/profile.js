import { makeStyles } from '@material-ui/core/styles';
import Paper          from '@material-ui/core/Paper';
import Grid           from '@material-ui/core/Grid';

import Card            from '@material-ui/core/Card';
import CardMedia       from '@material-ui/core/CardMedia';
import CardContent     from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { Divider, Typography } from '@material-ui/core';
import './svg.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root2: {
    maxWidth: 343,
    margin: 'auto',
    border: 'solid',
    borderColor: 'red',
    borderRadius: 12,
    padding: 12,
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

export default function CenteredGrid() {
  const classes = useStyles();

  
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={4}>
          <Paper className={classes.paper}>

          <Card className={classes.root2}>
            <CardMedia
              className={classes.media}
              

              image={
                'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
              }
            />
            <CardContent>
              <TextInfoContent
                
                overline={'@Baaphusabka'}
                heading={'SARGUN SINGH'}
                body={
                  'That year, collection of songs, review melodies, memories full, this is a long and warm journey'
                }
              />
            </CardContent>
          </Card>


          </Paper>
        </Grid>

        <Grid item xs={8}>
          <Paper className={classes.paper}>

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
                  <Grid item xs={4}>
                    <TextField label="Username" placeholder="Username"     defaultValue="sargun123"                 variant="outlined" />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField  label="Email"    placeholder="Email"        defaultValue="sargun.narula5@gmail.com"  variant="outlined" fullWidth />
                  </Grid>
                </Grid>

              </Grid>



              <Grid item xs={12} style={{flexBasis: '0px'}} >

                <Grid container spacing={4} >
                  <Grid item xs={6}>
                    <TextField size="small"  label="First Name" placeholder="First Name"  defaultValue="sargun" variant="outlined" />
                  </Grid>
                  <Grid item xs={6} >
                    <TextField size="small"  label="Last Name"  placeholder="Last Name"   defaultValue="narula"  variant="outlined"  />
                  </Grid>
                </Grid>
                
              </Grid>

              <Grid item xs={12} style={{flexBasis: '0px'}} >

                <Grid container spacing={4} >
                  <Grid item xs={12}>
                    <TextField size="small"  label="College Name" placeholder="College Name"  defaultValue="Harvard" variant="outlined" fullWidth/>
                  </Grid>
                </Grid>
                
              </Grid>

              <Grid item xs={12} style={{flexBasis: '0px'}} >

                <Grid container spacing={4} >
                  <Grid item xs={4}>
                    <TextField size="small"  label="Year of Graduation" placeholder="Year of Graduation"  defaultValue="2021" variant="outlined" />
                  </Grid>
                  <Grid item xs={4} >
                    <TextField size="small"  label="Degree"  placeholder="Degree"   defaultValue="B.Tech"  variant="outlined"  />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField size="small"  label="Country" placeholder="Country"  defaultValue="US" variant="outlined" />
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
                  <TextareaAutosize style={{width:'100%' }} aria-label="About" minRows={5} placeholder="I am a Coder !!" multiline/>
                  </Grid>
                </Grid>
                
              </Grid>
              
              
              
              
              <Grid item xs={12} style={{flexBasis: '0px'}} >

                <Grid container spacing={4}>
                  <Grid item xs={8}>
                    
                  </Grid>
                  
                  <Grid item xs={4}>
                    <Button style={{textTransform: 'none',backgroundColor: '#23ccef'}} variant="contained" color="primary">
                      Update Profile
                    </Button> 
                  </Grid>
                </Grid>
                
              </Grid>
              

             
            

            </Grid>

          </Paper>
        
        </Grid>
      </Grid>
    </div>
  );
}
