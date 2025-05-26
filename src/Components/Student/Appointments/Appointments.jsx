import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

// MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import DoneIcon from "@mui/icons-material/Done";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

import DisplaySkeleton from "../../Global/DisplaySkeleton";

export default function Appointments({ appointments, loading }) {
  const navigate = useNavigate();

  let currentDate = new Date().toISOString();

  const user = JSON.parse(localStorage.getItem("user"));
  const userID = user._id;

  const startCall = () => {
    navigate(`/call/${userID}`);
  };

  const timeHandler = (date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <>
      {!loading ? (
        <TableContainer>
          {!appointments.length > 0 ? (
            <NoData>
              <img src="/Images/noData.svg" className="img-fluid" alt="" />
              <h3>No Appointment scheduled yet.</h3>
              <p>
                Please schedule an appointment to have counselling session with
                your counsellor.
              </p>
            </NoData>
          ) : (
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold">Sr. No</TableCell>
                  <TableCell className="fw-bold">Requested On</TableCell>
                  <TableCell className="fw-bold">Schedule At</TableCell>
                  <TableCell className="fw-bold">Counsellor</TableCell>
                  <TableCell align="center" className="fw-bold">
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments.map((appointment, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{timeHandler(appointment.createdAt)}</TableCell>
                    <TableCell component="th" scope="row">
                      {appointment.scheduleTime
                        ? timeHandler(appointment.scheduleTime)
                        : "Requested"}
                    </TableCell>
                    <TableCell>
                      {appointment.counsellorID.counsellorUserName}
                    </TableCell>
                    <TableCell align="center">
                      {appointment.scheduleType === "Scheduled" ? (
                        <div className="text-success">
                          <CalendarTodayIcon />
                          <span className="mx-3 text-success">Scheduled</span>
                          <button
                            type="button"
                            onClick={() => startCall()}
                            class="btn btn-success mx-2"
                            disabled={
                              currentDate >= appointment.scheduleTime
                                ? false
                                : true
                            }
                          >
                            <VideocamOutlinedIcon className="me-2" />
                            Start
                          </button>
                        </div>
                      ) : appointment.scheduleType === "History" ? (
                        <div className="text-primary">
                          <DoneIcon />
                          <span className="mx-3 text-primary">Accepted</span>
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
        <div>
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
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
