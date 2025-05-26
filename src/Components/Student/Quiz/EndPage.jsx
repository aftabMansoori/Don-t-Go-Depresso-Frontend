import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveQuestionaire } from "../../../utils/api";
import { axiosConfig } from "../../../utils/axiosConfig";

import styles from "./Quiz.module.scss";

export default function EndPage({ points, answers, setAnswers }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSave();
    setAnswers([]);
  }, []);

  const handleSave = () => {
    setLoading(true);

    if (answers.length === 0) return;

    axiosConfig
      .post(saveQuestionaire, { answers })
      .then((res) => {
        if (res.status !== 200) return;
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("ada", err);
      });
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className={styles.parent}>
          <span className={styles.loader}></span>
        </div>
      ) : (
        <div className={styles.parent + " container"}>
          <div className="text-white">
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
            <button
              className={styles.startBtn}
              onClick={() => navigate("/student/response")}
            >
              Your Answers
            </button>
            <button
              className={styles.startBtn}
              onClick={() => window.location.reload()}
            >
              Retake
            </button>
            <button className={styles.backBtn} onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        </div>
      )}
    </>
  );
}
