import React, { useState } from "react";

//Components
import Appointments from "../../../Components/Student/Appointments/Appointments";

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

export default function StudentDashboard() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleClick = () => {
    setOpen(!open);
  };

  console.log("ada", value);

  return (
    <>
      <div className="container">
        <div className="my-5 d-flex justify-content-between">
          <h3>Appointments</h3>
          <div>
            <button className="btn btn-success" onClick={handleClick}>
              Schedule
            </button>
          </div>
        </div>
        <Dialog
          open={open}
          onClose={handleClick}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Select the schedule"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              The schedule can vary according to counsellors availabilty
            </DialogContentText>
          </DialogContent>
          <div className="d-flex align-items-center justify-content-center">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params) => <TextField {...params} />}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
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
        <Appointments />
      </div>
    </>
  );
}
