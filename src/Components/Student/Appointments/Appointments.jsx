import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import styles from "./Appointments.module.scss";

function createData(schedule, counsellor, status) {
  return { schedule, counsellor, status };
}

const rows = [
  createData("26 March, 2022", "Counsellor Name", "waiting"),
  createData("24 March, 2022", "Counsellor Name", "rejected"),
  createData("21 March, 2022", "Counsellor Name", "accepted"),
  createData("14 March, 2022", "Counsellor Name", "rejected"),
  createData("12 March, 2022", "Counsellor Name", "accepted"),
];

export default function Appointments() {
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="fw-bold">Sr. No</TableCell>
              <TableCell className="fw-bold">Schedule</TableCell>
              <TableCell className="fw-bold">Counsellor</TableCell>
              <TableCell className="fw-bold">Status</TableCell>
              {/* <TableCell></TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {row.schedule}
                </TableCell>
                <TableCell>{row.counsellor}</TableCell>
                <TableCell>
                  {row.status === "rejected" ? (
                    <div className="text-primary">
                      <CalendarTodayIcon />
                      <span className="mx-3 text-primary">Rescheduled</span>
                    </div>
                  ) : row.status === "accepted" ? (
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
      </TableContainer>
    </>
  );
}
