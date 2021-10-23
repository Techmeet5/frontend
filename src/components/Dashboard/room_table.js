import React      from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table          from '@material-ui/core/Table';
import TableBody      from '@material-ui/core/TableBody';
import TableCell      from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead      from '@material-ui/core/TableHead';
import TableRow       from '@material-ui/core/TableRow';
import Paper          from '@material-ui/core/Paper';
import Button         from '@material-ui/core/Button';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function UserTable(props) {
  const classes = useStyles();




  function add_user(key,value){
    props.func(key)
    const index = props.data.username.indexOf(key)
    delete props.data.username[index]
  }
  

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>

          {props.data.username.map((key,value) => (
            <TableRow key={value}>

              <TableCell> {key} </TableCell>
              <TableCell align="right">
                    <Button variant="contained" onClick={() => add_user(key,value)}>ADD</Button>
              </TableCell>

            </TableRow>
          ))}

        </TableHead>
      </Table>
    </TableContainer>
  );
}