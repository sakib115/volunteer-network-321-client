/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
//css import
import './event.css'
//mui
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


    const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


const event = ({pname}) => {




const classes = useStyles();

  
  
  
  
    let history = useHistory();
    let location = useLocation();
    let { from } = { from: { pathname: `/event` }}
function handleCancel(id){
            fetch(`https://protected-castle-08953.herokuapp.com/delete/${id}`, {method: 'DELETE'})
            .then( res => res.json)
            .then(result => {
             history.replace(from)
            })
        }

    const [currentData, setCurrentData] = useState([]);
    useEffect(
        () => {
            fetch(`https://protected-castle-08953.herokuapp.com/request/${pname}`)
                .then(res => res.json())
                .then(data => {
                    setCurrentData(data);
                })
        },[]
    )
    return (
        <div>
            <h1 className="event-header m-auto">Your events</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Volunteer as</StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>
                        <StyledTableCell align="right">Description</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {currentData.map((cd) => (
                        <StyledTableRow key={cd._id}>
                        <StyledTableCell component="th" scope="row">
                            {cd.nms}
                        </StyledTableCell>
                        <StyledTableCell align="right">{cd.date}</StyledTableCell>
                        <StyledTableCell align="right">{cd.description}</StyledTableCell>
                        <StyledTableCell align="right" onClick={() =>{handleCancel(cd._id)}} ><button className="btn btn-danger">Cancel</button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default event;