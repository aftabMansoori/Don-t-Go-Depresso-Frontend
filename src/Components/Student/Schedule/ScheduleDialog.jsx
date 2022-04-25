import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import styles from "./Schedule.module.scss";

export default function ScheduleDialog({ open, handleClick }) {
  const history = useHistory();

  const [counsellor, setCounsellor] = useState("");

  return (
    <>
      {/* <div>ScheduleDialog</div> */}
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
          <DialogContentText id="alert-dialog-description">
            We highly recommend you to attemp the questionaire before requesting
            appointment.
          </DialogContentText>
          <Box className="mt-4" sx={{ width: 300 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">
                Select Counsellor
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={counsellor}
                label="select counsellor"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions className="d-flex justify-content-between">
          <button className={styles.cancelBtn} onClick={handleClick}>
            Cancel
          </button>
          <div>
            <button
              className={styles.reqBtn}
              onClick={() => history.push("/student/questionaire")}
            >
              Questionaire
            </button>
            <button className={styles.reqBtn} onClick={handleClick}>
              Request
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}
