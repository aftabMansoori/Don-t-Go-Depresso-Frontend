import React, { useState, useEffect } from "react";
import { axiosConfig } from "../../../utils/axiosConfig";
import { getResponse } from "../../../utils/api";
import { questions } from "../../../Pages/Students/Quiz/questions";
import { useHistory } from "react-router-dom";

// MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import DisplaySkeleton from "../../Global/DisplaySkeleton";

import styles from "./Quiz.module.scss";

export default function AllResponses() {
  const ql = questions.length;
  const history = useHistory();

  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetResponse();
  }, []);

  const handleGetResponse = () => {
    setLoading(true);

    axiosConfig
      .get(getResponse)
      .then((res) => {
        if (res.status !== 200) return;
        let ans = res.data.response;
        ans.reverse();
        setAnswers(ans);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("ada", err.message);
      });
  };

  const timeHandler = (date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <>
      {loading ? (
        <div className="mt-5 ">
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
        </div>
      ) : (
        <div className="mt-5">
          {answers.length > 0 ? (
            <>
              <h4 className="mb-4">My Responses</h4>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="fw-bold">Sr. No</TableCell>
                      <TableCell className="fw-bold">Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {answers.map((res, i) => (
                      <TableRow
                        key={res._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {i + 1}
                        </TableCell>
                        <TableCell
                          onClick={() =>
                            history.push(`/student/response/${res._id}`)
                          }
                        >
                          <span className="btn p-0 m-0">
                            {timeHandler(res.time)}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <div className={styles.noData}>
              <img src="/Images/noData.svg" className="img-fluid" alt="" />
              <h3>No Responses.</h3>
              <p>
                All the responses of your questionaire attempt will be visible
                here.
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
