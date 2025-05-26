import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { axiosConfig } from "../../../utils/axiosConfig";
import { endMeeting, schedule } from "../../../utils/api";
import toast, { Toaster } from "react-hot-toast";

//MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CallEndIcon from "@mui/icons-material/CallEnd";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Scheduled({ loading, scheduled, appointmentHandler }) {
  const navigate = useNavigate();

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const timeHandler = (date) => {
    return new Date(date).toLocaleString();
  };

  const startMeeting = (student) => {
    navigate(`/call/${student._id}`)
  };

  const endMeet = () => {
    axiosConfig
      .post(endMeeting, { appoitmentID: scheduled[0]._id })
      .then((res) => {
        if (res.status !== 200) return;
        appointmentHandler();
        toast.success("Meeting ended");
      })
      .catch((err) => {
        console.log("ada", err.message);
      });
  };

  const scheduleHandler = (scheduled) => {
    let isoDate = date.toISOString();

    axiosConfig
      .post(schedule, {
        scheduleTime: isoDate,
        appoitmentID: scheduled._id,
      })
      .then((res) => {
        if (res.status !== 200) return;
        toast.success("Appointment Rescheduled");
        appointmentHandler();
        handleClose();
      })
      .catch((err) => {
        console.log("ada", err.message);
      });
  };

  return (
    <>
      {loading ? (
        <>"loading..."</>
      ) : (
        <div className="mt-5">
          {scheduled.length > 0 ? (
            <>
              <TableContainer>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="fw-bold">Sr. No</TableCell>
                      <TableCell className="fw-bold">Student Name</TableCell>
                      <TableCell className="fw-bold">Requested On</TableCell>
                      <TableCell className="fw-bold">Scheduled At</TableCell>
                      <TableCell className="fw-bold"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {scheduled.map((scheduled, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell component="th" scope="row">
                          {scheduled.studentData.studentName}
                        </TableCell>
                        <TableCell>
                          {timeHandler(scheduled.createdAt)}
                        </TableCell>
                        <TableCell>
                          {timeHandler(scheduled.scheduleTime)}
                        </TableCell>
                        <TableCell>
                          <button
                            type="button"
                            onClick={() => startMeeting(scheduled.studentData)}
                            class="btn btn-success mx-2"
                          >
                            <VideocamOutlinedIcon className="me-2" />
                            Start
                          </button>
                          <button
                            type="button"
                            onClick={() => handleClickOpen()}
                            class="btn btn-primary mx-2"
                          >
                            <AccessTimeIcon className="me-2" />
                            Reschedule
                          </button>
                          <button
                            type="button"
                            onClick={() => endMeet()}
                            class="btn btn-danger mx-2"
                          >
                            <CallEndIcon className="me-2" />
                            End
                          </button>
                        </TableCell>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            {"Use Google's location service?"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              Let Google help apps determine location. This
                              means sending anonymous location data to Google,
                              even when no apps are running.
                            </DialogContentText>
                          </DialogContent>
                          <DialogContent>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <DateTimePicker
                                renderInput={(props) => (
                                  <TextField {...props} />
                                )}
                                label="Reschedule Appointment"
                                value={date}
                                onChange={(date) => {
                                  setDate(date);
                                }}
                              />
                            </LocalizationProvider>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button
                              className=""
                              onClick={() => scheduleHandler(scheduled)}
                              autoFocus
                            >
                              Reschedule
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <NoData>
              <img src="/Images/noData.svg" className="img-fluid" alt="" />
              <h3>Nothing scheduled yet.</h3>
              <p>When appointment is scheduled, it will be visible here.</p>
            </NoData>
          )}

          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
      )}
    </>
  );
}

const NoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 0 0;

  img {
    width: 350px;
  }

  h3 {
    margin: 3rem 0 0 0;
    color: rgb(108, 99, 255);
  }
`;
