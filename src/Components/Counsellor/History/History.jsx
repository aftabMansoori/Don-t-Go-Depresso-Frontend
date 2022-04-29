import React from "react";
import styled from "styled-components";

//MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function History({ loading, history }) {
  const timeHandler = (date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <>
      {loading ? (
        <>"loading..."</>
      ) : (
        <div className="mt-5">
          {history.length > 0 ? (
            <>
              <TableContainer>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="fw-bold">Sr. No</TableCell>
                      <TableCell className="fw-bold">Student Name</TableCell>
                      <TableCell className="fw-bold">Counselor Name</TableCell>
                      <TableCell className="fw-bold">Requested On</TableCell>
                      <TableCell className="fw-bold">Completed On</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {history.map((history, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{history.studentData.studentName}</TableCell>
                        <TableCell>
                          {history.counsellorData.counsellorUserName}
                        </TableCell>
                        <TableCell>{timeHandler(history.createdAt)}</TableCell>
                        <TableCell>
                          {timeHandler(history.scheduleTime)}
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
              <h3>Start taking Sessions.</h3>
              <p>Completed Sessions will be visible here.</p>
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
