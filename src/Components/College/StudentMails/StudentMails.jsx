import React, { useState, useEffect } from "react";

//MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

import { Delete, Edit } from "@mui/icons-material";

import styled from "styled-components";

export default function StudentMails({ studentMails, loading }) {
  return (
    <>
      <div className="w-100 container">
        {loading ? (
          "loading..."
        ) : (
          <>
            <div>
              <div className="border border-secondary px-3 py-1 rounded-3 mb-3">
                <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <SearchStyle type="text" placeholder="search..." />
              </div>
            </div>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="fw-bold">Sr. No</TableCell>
                    <TableCell className="fw-bold">Email</TableCell>
                    <TableCell></TableCell>
                    {/* <TableCell></TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentMails.map((student, i) => (
                    <TableRow
                      key={student._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {i + 1}
                      </TableCell>
                      <TableCell>{student.studentMail}</TableCell>
                      {/* <TableCell className="p-1"></TableCell> */}
                      <TableCell className="p-1">
                        <button className="btn btn-primary mx-1">
                          <Edit className="mx-1" />
                        </button>
                        <button className="btn btn-danger mx-1">
                          <span>
                            <Delete className="mx-1" />
                          </span>
                          {/* Delete */}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </div>
    </>
  );
}

const SearchStyle = styled.input`
  border: none;
  padding: 5px 10px;
  color: rgb(100, 100, 100);
`;
