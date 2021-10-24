import React      from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table          from '@material-ui/core/Table';
import TableCell      from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead      from '@material-ui/core/TableHead';
import TableRow       from '@material-ui/core/TableRow';
import Paper          from '@material-ui/core/Paper';
import Button         from '@material-ui/core/Button';


const useStyles = makeStyles({
  container:{
    marginTop: '16px',
  },
  table: {
    minWidth: 650,
  },
  head:{
      backgroundColor: '#aecff7'
  },
  text:{
    fontSize: '18px'
  },
  button_text:{
    color: "black"
  }
});


export default function UserTable2(props) {
  const classes = useStyles();
  

  function delete_user(key){
    props.func(key)

  }

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.head}>

          {props.data.map((key,value) => (
            <TableRow key={value}>

              <TableCell className={classes.text}> {key['username']} </TableCell>
              <TableCell className={classes.text}> {key['name']} </TableCell>
              <TableCell className={classes.text}> {key['email']} </TableCell>

              <TableCell align="right">
                    <Button variant="contained" 
                            color="secondary" 
                            className={classes.button_text}
                            onClick={() => delete_user(key)}
                            >
                              DELETE
                    </Button>
              </TableCell>

            </TableRow>
          ))}

        </TableHead>
 
      </Table>
    </TableContainer>
  );
}