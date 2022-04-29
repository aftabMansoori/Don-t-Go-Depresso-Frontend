import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { axiosConfig } from "../../../utils/axiosConfig";
import { getStdtcounsellors, scheduleAppointment } from "../../../utils/api";
import toast, { Toaster } from "react-hot-toast";

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

export default function ScheduleDialog({
  open,
  handleClick,
  handleAppointments,
}) {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [counsellors, setCounsellors] = useState([]);
  const [selectedCslr, setSelectedCslr] = useState("");

  useEffect(() => {
    handleCounsellorList();
  }, []);

  const handleCounsellorList = () => {
    setLoading(false);

    axiosConfig
      .get(getStdtcounsellors)
      .then((res) => {
        if (res.status !== 200) return;
        setCounsellors(res.data.counsellor);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ada", err.message);
        setLoading(false);
      });
  };

  const appointmentHandler = () => {
    setLoading(true);
    axiosConfig
      .post(scheduleAppointment, { counsellorID: selectedCslr })
      .then((res) => {
        if (res.status !== 201) return;
        setSelectedCslr("");
        toast.success("Appointment Requested");
        setLoading(false);
        handleClick();
        handleAppointments();
      })
      .catch((err) => {
        console.log("ada", err.message);
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <>
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
                value={selectedCslr}
                label="select counsellor"
                onChange={(e) => setSelectedCslr(e.target.value)}
                disabled={loading}
              >
                {counsellors.length > 0
                  ? counsellors.map((counsellor) => (
                      <MenuItem value={counsellor._id}>
                        {counsellor.counsellorUserName}
                      </MenuItem>
                    ))
                  : "loading..."}
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
            <button
              className={styles.reqBtn}
              onClick={() => appointmentHandler()}
            >
              Request
            </button>
          </div>
        </DialogActions>
        <Toaster position="bottom-right" reverseOrder={false} />
      </Dialog>
    </>
  );
}
