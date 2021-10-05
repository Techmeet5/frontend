import { React, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper          from '@material-ui/core/Paper';
import Grid           from '@material-ui/core/Grid';
import FormControl    from '@material-ui/core/FormControl';
import Select         from '@material-ui/core/Select';
import MenuItem       from '@material-ui/core/MenuItem';
import Button         from '@material-ui/core/Button';
import SendIcon       from '@material-ui/icons/Send';
import Divider        from '@material-ui/core/Divider';


import SimpleEditor from "./Editor_2.jsx"
import './monaco.css'

const axios = require('axios')

const useStyles = makeStyles((theme) => ({
  controls_1: {
    padding: theme.spacing(2),
    textAlign: "center",
    border: "solid",
    borderColor: "violet",
    margin: 10,
  },
  controls_2: {
    padding: theme.spacing(0),
    textAlign: 'center',
    border: "solid",
    borderColor: "blue",
    margin: 10,
    display: 'inline-flex',
  },
  controls_3: {
    padding: theme.spacing(1),
    border: "solid",
    borderColor: "blue",
    margin: 10,
    minHeight: '90vh'
  },
  pre: {
    height: 'auto',
    maxHeight: '90vh',
    overflow: 'auto',
    overflowY: 'none',
    backgroundColor: '#eeeeee',
  },
  text: {
    padding: theme.spacing(1),
    textAlign: 'left',
    border: 'solid',
    borderColor: 'black',
    margin: 10,
    minHeight: '90vh'
  },
  formControl: {
    minWidth: 120,
    width: "-webkit-fill-available"
  },

  selectEmpty: {
    padding: theme.spacing(1)
  },

  button: {
    padding: theme.spacing(1.2),
  },
  button_c: {
    backgroundColor: "#2196f3"
  },
  controls: {
    fontSize: 'x-large',
    color: '#0398fc',
    padding: '20px'
  }
}));


function Editor() {


  const classes = useStyles();




  // Hooks

  const [value, setValue] = useState('');

  const [lang, setlang] = useState('python3');

  const [output, setOutput] = useState('');



  // Functions

  const handleLangChange = (event) => {
    setlang(event.target.value);
    console.log(lang)
  };


  const submit_code = () => {

    console.log("submitted code - ", value)
    axios.post('http://127.0.0.1:8001/api/code', {
      lang,
      code: value
    })
      .then((response) => {
        console.log(response);
        setOutput(response['data'])
      }, (error) => {
        console.log(error);
      });
  }



  return (


    <Grid container
      direction="row"
      justifyContent="space-around"
      alignItems="stretch"
      style={{background:'snow'}}
    >

      <Grid item xs={12}>

        <Grid container direction="column" >

          <Grid item xs={12} style={{ border: '5px solid red' }}>

            <Grid container direction="row">

              {/* Lang & I/O */}

                <Grid item xs={6}>
                  <Paper className={classes.controls_1}>
                    <Grid container
                      direction="row"
                      justifyContent="space-between"
                      className="controls_1" >

                      <Grid item xs={6}>
                        <FormControl className={classes.formControl}>
                          <Select
                            value={lang}
                            onChange={handleLangChange}

                            className={classes.selectEmpty}

                          >
                            <MenuItem value={"cpp"}><b>C++</b></MenuItem>
                            <MenuItem value={"java"}><b>Java</b></MenuItem>
                            <MenuItem value={"python3"}><b>Python</b></MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>


                      <Grid item xs={3}>

                      </Grid>

                      <Grid item xs={3}>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          fullWidth
                          onClick={submit_code}
                          endIcon={<SendIcon >
                            send
                          </SendIcon>
                          }
                        >
                          RUN
                        </Button>
                      </Grid>


                    </Grid>
                  </Paper>
                </Grid>

                <Grid item xs={3}></Grid>
                
                <Grid item xs={3}>
                  <Paper className={classes.controls_2} >


                    <Button color="primary" style={{ textTransform: 'None' }}>
                      <b className={classes.controls}> Input </b>
                    </Button>
                    <Divider orientation="vertical" style={{
                      height: '70px',
                      marginLeft: '5px',
                      width: '2px'
                    }} />

                    <Button color="primary" style={{ textTransform: 'None' }}>
                      <b className={classes.controls}> Output </b>
                    </Button>

                  </Paper>
                </Grid>

            </Grid>
          
          </Grid>


          <Grid item xs={12} style={{ border: '5px solid brown' }}>

            {/*  Editor & Output */}
            <Grid container direction="row">

              <Grid item xs={6} >
                <Paper className={classes.text}>
                  <SimpleEditor
                    lang={lang}
                    parent_function={code_value => setValue(code_value)} />
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.controls_3} >
                  {/*  <Output/> */}
                  <pre className={classes.pre}>{output}</pre>
                </Paper>
              </Grid>

            </Grid>

          </Grid>

        </Grid>

      </Grid >

    </Grid>
  )

}

export default Editor;
