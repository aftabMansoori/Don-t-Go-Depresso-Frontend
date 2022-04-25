import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Quiz.module.scss";

export default function EndPage({ points, setPoints, setAnswers }) {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
    setPoints(0);
    setAnswers([]);
  };

  const retake = () => {
    window.location.reload();
    setPoints(0);
    setAnswers([]);
  };

  return (
    <>
      <div className={styles.parent + " container"}>
        <div>
          {points >= 0 && points < 100 ? (
            <>
              <h1>You are doing great</h1>
            </>
          ) : points > 100 && points <= 200 ? (
            <>
              <h1>We recommend you for therapy</h1>
            </>
          ) : (
            <>
              <h1>We highly recommend you for therapy</h1>
            </>
          )}
        </div>
        <div>
          <button className={styles.startBtn}>Your Answers</button>
          <button className={styles.startBtn} onClick={() => retake()}>
            Retake
          </button>
          <button className={styles.backBtn} onClick={() => goBack()}>
            Go back
          </button>
        </div>
      </div>
    </>
  );
}
