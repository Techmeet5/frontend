import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

import background from '../../svg/Login_design_svg.svg'



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

export default function SignUpMain() {
  const classes = styles()
  
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

          <TextField fullWidth placeholder="First Name" className={classes.input} />
          <TextField fullWidth placeholder="Last Name"  className={classes.input} />
          <TextField fullWidth placeholder="Email"      className={classes.input} />

          <Input
            type     ={values.showPassword ? 'text' : 'password'}
            value    ={values.password}
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
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />

          <Input
            type     ={values.showPassword ? 'text' : 'password'}
            value    ={values.password}
            onChange ={handleChange('password')}
            fullWidth 
            placeholder="Confirm Password"
            className={classes.input}
            variant="filled"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick     ={handleClickShowPassword}
                  onMouseDown ={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />

         

          <Button variant="contained" className={classes.button}>REGISTER</Button>

          <Typography variant="caption"  gutterBottom className={classes.caption}>
            Already have an Account? 
            <Button style={{  color: '#26BEFF',
                              textTransform: 'none',
                              display: "inline" }}
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
