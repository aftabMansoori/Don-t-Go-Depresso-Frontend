import React from "react";
import { useHistory } from "react-router";

import styles from "./CollegeDashboard.module.scss";

export default function CollegeDashboard() {
  const history = useHistory();

  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center my-4">
          <div className={styles.data}>
            <h1>49</h1>
            <p>Students Added</p>
          </div>

          <div className={styles.data}>
            <h1>49</h1>
            <p>Students Registered</p>
          </div>

          <div className={styles.data}>
            <h1>149</h1>
            <p>Sessions Taken</p>
          </div>
        </div>
      </div>
    </>
  );
}
