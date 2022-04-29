import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { getResponse } from "../../../utils/api";
import { axiosConfig } from "../../../utils/axiosConfig";
import { questions } from "./questions";
import DisplaySkeleton from "../../../Components/Global/DisplaySkeleton";

// MUI
import { Dialog } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styles from "./Quiz.module.scss";

export default function Answers() {
  const history = useHistory();
  const ql = questions.length;

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

  const responseHandler = () => {
    const response = [];

    for (var i = 0; i < ql; i++) {
      response.push({
        q: questions[i].q,
        a: answers.length > 0 ? answers[0].answers[i] : "loading...",
      });
    }

    return (
      <div className={styles.responses}>
        {response.map((res) => (
          <div
            className={
              res.a === "NOT AT ALL"
                ? styles.green
                : res.a === "SEVERAL DAYS"
                ? styles.green
                : res.a === "NEARLY EVERY DAY"
                ? styles.red
                : styles.yellow
            }
          >
            <p className="fw-bold">{res.q}?</p>
            <p>{res.a}</p>
          </div>
        ))}
      </div>
    );
  };

  const timeHandler = (date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <Dialog
      open={true}
      fullScreen={true}
      maxWidth={"100vw"}
      fullWidth={"100vw"}
    >
      <div className="container mt-5 d-flex align-items-center ">
        <ArrowBackIcon
          fontSize="large"
          className="btn p-0 m-0"
          onClick={() => history.push("/student/dashboard")}
        />
        <span className="mx-3 h3 mb-0">
          {answers.length > 0 ? timeHandler(answers[0].time) : "loading..."}
        </span>
      </div>
      {loading ? (
        <div className="container mt-5">
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
          <DisplaySkeleton width={"100%"} />
        </div>
      ) : (
        <div className="container">{responseHandler()}</div>
      )}
    </Dialog>
  );
}
