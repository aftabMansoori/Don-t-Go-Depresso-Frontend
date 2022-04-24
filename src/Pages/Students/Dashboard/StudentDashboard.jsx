import React, { useState } from "react";
import styled from "styled-components";

//Components
import Appointments from "../../../Components/Student/Appointments/Appointments";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

export default function StudentDashboard() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

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
            <h4 className="mb-0 mt-2">{"Request for an Appointment"}</h4>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              An appoinment request will be send to the counsellor with your
              profile.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <CancelBtn onClick={handleClick}>Cancel</CancelBtn>
            <ReqBtn onClick={handleClick}>Request</ReqBtn>
          </DialogActions>
        </Dialog>
        <Appointments />
      </div>
    </>
  );
}

const ReqBtn = styled.button`
  border: none;
  background: #614385; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #516395,
    #614385
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #516395,
    #614385
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 10px 30px;
  margin: 10px;
  width: 150px;
  color: white;
  border-radius: 20px;
  font-weight: 600;
  &:hover {
    transform: scale(1.1);
  }
`;

const CancelBtn = styled.button`
  border: none;
  padding: 8px 30px;
  margin: 10px;
  border-radius: 20px;
  border: 2px solid #614385;
  background: none;
  width: 150px;
  color: #614385;
  font-weight: 600;

  &:hover {
    background: none;
    color: #614385;
    transform: scale(1.1);
  }
`;
