import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

// MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import DoneIcon from "@mui/icons-material/Done";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function Appointments({ appointments, loading }) {
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user.studentName.toLowerCase().split(" ").join("");

  const startCall = () => {
    history.push(`/call/${userName}`);
  };

  const timeHandler = (date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <>
      {appointments.length > 0 ? (
        <TableContainer>
          {loading ? (
            <>"loading"</>
          ) : (
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold">Sr. No</TableCell>
                  <TableCell className="fw-bold">Schedule</TableCell>
                  <TableCell className="fw-bold">Counsellor</TableCell>
                  <TableCell className="fw-bold">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* <TableRow>
              <TableCell>0</TableCell>
              <TableCell component="th" scope="row">
                22 April, 2022
              </TableCell>
              <TableCell>Counsellor Name</TableCell>
              <TableCell>
                <button className="btn btn-success" onClick={() => startCall()}>
                  <VideocamOutlinedIcon /> Start
                </button>
              </TableCell>
            </TableRow> */}
                {appointments.map((appointment, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell component="th" scope="row">
                      {appointment.scheduleTime
                        ? timeHandler(appointment.scheduleTime)
                        : "Requested"}
                    </TableCell>
                    <TableCell>{appointment.counsellorID}</TableCell>
                    <TableCell>
                      {appointment.scheduleType === "Scheduled" ? (
                        <div className="text-primary">
                          <CalendarTodayIcon />
                          <span className="mx-3 text-primary">Scheduled</span>
                        </div>
                      ) : appointment.scheduleType === "History" ? (
                        <div className="text-success">
                          <DoneIcon />
                          <span className="mx-3 text-success">Accepted</span>
                        </div>
                      ) : (
                        <div className="text-secondary">
                          <QueryBuilderIcon />
                          <span className="mx-3">Waiting</span>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      ) : (
        <NoData>
          <img src="/Images/noData.svg" className="img-fluid" alt="" />
          <h3>No Appointment scheduled yet.</h3>
          <p>
            Please schedule an appointment to have counselling session with your
            counsellor.
          </p>
        </NoData>
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
