import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { questions } from "./questions";
import { calc } from "./logic";

//Components
import Question from "../../../Components/Student/Quiz/Question";
import StartPage from "../../../Components/Student/Quiz/StartPage";
import EndPage from "../../../Components/Student/Quiz/EndPage";

import styles from "./Quiz.module.scss";
import { Dialog } from "@mui/material";

export default function Quiz() {
  const history = useHistory();
  const pages = questions.length;

  const [open, setOpen] = useState(true);
  const [page, setPage] = useState(-1);
  const [points, setPoints] = useState(0);
  const [answers, setAnswers] = useState([]);

  const incrementPage = (answer) => {
    page !== -1 && setAnswers([...answers, answer]);
    let point = calc(answer);
    setPoints(point + points);
    setPage(page + 1);
  };

  return (
    <Dialog
      open={open}
      fullScreen={open}
      maxWidth={"100vw"}
      fullWidth={"100vw"}
    >
      <div className={styles.background}>
        {page === -1 && (
          <StartPage
            setPage={setPage}
            page={page}
            incrementPage={incrementPage}
          />
        )}
        {questions.map((q, i) => (
          <div className="container">
            {page > -1 && page < pages && page === i && (
              <Question
                q={q}
                setPage={setPage}
                page={page}
                key={i}
                incrementPage={incrementPage}
              />
            )}
          </div>
        ))}
        {page > -1 && page === pages && (
          <>
            <EndPage
              points={points}
              setPoints={setPoints}
              answers={answers}
              setAnswers={setAnswers}
            />
            {/* <div className={styles.parent}>
            <h1>ENd is near</h1>
            <button
              onClick={() => history.push("/student/dashboard")}
              className="btn"
            >
              Go home
            </button>
          </div> */}
          </>
        )}
      </div>
    </Dialog>
  );
}
