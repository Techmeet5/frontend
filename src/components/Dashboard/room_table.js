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
  table: {
    minWidth: 650,
  },
});


export default function UserTable(props) {
  const classes = useStyles();




  function add_user(key,value){
    props.func(key)
    const index = props.data.indexOf(key)
    delete props.data[index]
  }
  

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>

          {props.data.map((key,value) => (
            <TableRow key={value}>
            
              <TableCell> {key['username']} </TableCell>
              <TableCell> {key['name']} </TableCell>
              <TableCell> {key['email']} </TableCell>
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