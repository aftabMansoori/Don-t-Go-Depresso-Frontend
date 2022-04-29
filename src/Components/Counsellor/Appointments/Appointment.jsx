import React, { useState } from "react";
import styled from "styled-components";
import { axiosConfig } from "../../../utils/axiosConfig";
import { schedule } from "../../../utils/api";
import toast, { Toaster } from "react-hot-toast";

//MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { TextField } from "@mui/material";

export default function Appointment({
  loading,
  appointments,
  appointmentHandler,
}) {
  const [date, setDate] = useState(new Date());

  const timeHandler = (date) => {
    return new Date(date).toLocaleString();
  };

  const scheduleHandler = (appointment) => {
    let isoDate = date.toISOString();

    axiosConfig
      .post(schedule, { scheduleTime: isoDate, appoitmentID: appointment._id })
      .then((res) => {
        if (res.status !== 200) return;
        toast.success("Appointment Scheduled");
        appointmentHandler();
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
          {appointments.length > 0 ? (
            <>
              <TableContainer>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="fw-bold">Sr. No</TableCell>
                      <TableCell className="fw-bold">Student Name</TableCell>
                      <TableCell className="fw-bold">Requested On</TableCell>
                      <TableCell className="fw-bold"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appointments.map((appointment, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell component="th" scope="row">
                          {appointment.studentData.studentName}
                        </TableCell>
                        <TableCell>
                          {timeHandler(appointment.createdAt)}
                        </TableCell>
                        <TableCell className="d-flex align-items-center ">
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                              renderInput={(props) => <TextField {...props} />}
                              label="Schedule Appointment"
                              value={date}
                              onChange={(date) => {
                                setDate(date);
                              }}
                            />
                          </LocalizationProvider>
                          <button
                            className="btn btn-primary ms-3"
                            onClick={() => scheduleHandler(appointment)}
                          >
                            Schedule
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <NoData>
              <img src="/Images/noData.svg" className="img-fluid" alt="" />
              <h3>No appointments yet.</h3>
              <p>When appointment is appointments, it will be visible here.</p>
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
