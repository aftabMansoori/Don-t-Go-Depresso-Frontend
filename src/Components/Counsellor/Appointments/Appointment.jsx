import React from "react";
import styled from "styled-components";

//MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function Appointment({ loading, appointments }) {
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
                      <TableCell className="fw-bold">Date & Time</TableCell>
                      <TableCell className="fw-bold"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appointments.map((appointment, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell component="th" scope="row">
                          {appointment.studentID}
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                          <button type="button" class="btn btn-primary mx-2">
                            Schedule
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-primary mx-2"
                          >
                            Reschedule
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
              <h3>Nothing appointments yet.</h3>
              <p>When appointment is appointments, it will be visible here.</p>
            </NoData>
          )}
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
