import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper          from '@material-ui/core/Paper';
import Grid           from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button         from '@material-ui/core/Button';
import TextField      from '@material-ui/core/TextField';
import IconButton     from '@material-ui/core/IconButton';
import Visibility     from '@material-ui/icons/Visibility';
import VisibilityOff  from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input          from '@material-ui/core/Input';

import background from '../../svg/Login_design_svg.svg'
import axios      from 'axios';



const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '20px',
    backgroundColor: '#F0F0F0',

  },
  input:{
    marginTop: '25px',
    padding: '10px',
    background: '#F5F5F5'
  },
  
  button:{
    marginTop: '20px',
    width: "100%",
    fontWeight: '900'
  },
  caption:{
    marginTop: '20px',
    display: "block",
  },
}));

export default function SignUpMain(props) {
  const classes = styles()
  

  const [username,   setUsername]  = useState(null)
  const [email,      setEmail]     = useState(null)
  const [first_name, setFirstname] = useState(null)
  const [last_name,  setLastname]  = useState(null)

  const [password,      setPassword]   = useState('')
  const [show_pass,     setShowpass]   = useState(false)


  const [conf_password, setConfpassword] = useState('')
  const [show_cpass,    setShowcpass]    = useState(false)




  // Password Methods
  const handleChange = (prop) => (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowpass(!show_pass)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };




  // Confirm Password methods
  const handleChange2 = (prop) => (event) => {
    setConfpassword(event.target.value);
  };

  const handleClickShowPassword2 = () => {
    setShowcpass(!show_cpass);
  };

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };





  function showLogin(event) {
    props.onChange(2);  
  }

  function Login(event) {
    axios.post('https://codeeditor-backend.herokuapp.com/api/add/',{

        "username":username,
        "email":email,       
        "first_name":first_name,  
        "last_name":last_name,        
    })

    .then((response) => {
      console.log("\n\n",response)
    })

    props.onChange(2);  
  }

  return (
    <div className={classes.root} style={{ backgroundImage: `url(${background})`,
                                            height: '100vh',
                                        }}>
      <Grid container  spacing={0} alignItems="stretch"  >
        
        <Grid item xs={7}>
          
        </Grid>

        <Grid item xs={4} >
          <Paper elevation={0} style={{  height: '100%', padding: '30px', paddingBottom:'0px' }}
                 square
          > 

          <Typography variant="h6" gutterBottom style={{ fontWeight: 600, textAlign: 'center' }}>
            Create Account
          </Typography>

          <TextField fullWidth placeholder="Username  " className={classes.input} onChange={(e) => setUsername(e.target.value) } />
          <TextField fullWidth placeholder="First Name" className={classes.input} onChange={(e) => setFirstname(e.target.value) } />
          <TextField fullWidth placeholder="Last Name"  className={classes.input} onChange={(e) => setLastname(e.target.value) } />
          <TextField fullWidth placeholder="Email"      className={classes.input} onChange={(e) => setEmail(e.target.value) } />
          
          <Input
            type     ={show_pass ? 'text' : 'password'}
            value    ={password}
            onChange ={handleChange('password')}
            fullWidth 
            placeholder="Password"
            className={classes.input}
            variant="filled"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick     ={handleClickShowPassword}
                  onMouseDown ={handleMouseDownPassword}
                >
                  {show_pass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />

          <Input
            type     ={show_cpass ? 'text' : 'password'}
            value    ={conf_password}
            onChange ={handleChange2('password')}
            fullWidth 
            placeholder="Confirm Password"
            className={classes.input}
            variant="filled"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick     ={handleClickShowPassword2}
                  onMouseDown ={handleMouseDownPassword2}
                >
                  {show_cpass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />

         

          <Button variant="contained" 
                  className={classes.button}
                  onClick={Login}
                  >REGISTER</Button>

          <Typography variant="caption"  gutterBottom className={classes.caption}>
            Already have an Account? 
            <Button style={{  color: '#26BEFF',
                              textTransform: 'none',
                              display: "inline" }}
                    onClick={showLogin}
                            >
              <Typography variant="caption" gutterBottom style={{ fontWeight: '600' }}>
                Log In
              </Typography>
            </Button>
          </Typography>

         

          </Paper> 
        </Grid>
        
      </Grid>
    </div>
  );
}
