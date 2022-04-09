import React, { useState } from "react";

//MUI
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", "8:54:03 PM, Fri Mar 25 2022"),
  createData("Ice cream sandwich", "8:12:12 PM, Fri Mar 25 2022"),
  createData("Eclair", "5:50:29 PM, Fri Mar 25 2022"),
];

export default function Scheduled() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sr. No</StyledTableCell>
              <StyledTableCell>Student Name</StyledTableCell>
              <StyledTableCell>Date & Time</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.calories}</StyledTableCell>
                <StyledTableCell>
                  <button type="button" class="btn btn-primary mx-2">
                    Start
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary mx-2"
                    onClick={handleClick}
                  >
                    Reschedule
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Select the schedule"}
        </DialogTitle>
        <div className="d-flex align-items-center justify-content-center mx-3">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(params) => <TextField {...params} />}
              // value={value}
              // onChange={(newValue) => {
              //   setValue(newValue);
              // }}
            />
          </LocalizationProvider>
        </div>
        <DialogActions>
          <Button onClick={handleClick}>Cancel</Button>
          <Button onClick={handleClick} autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
