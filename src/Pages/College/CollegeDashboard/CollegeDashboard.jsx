import React from "react";
import { useHistory } from "react-router";
// import { Chart } from "react-charts";

import styles from "./CollegeDashboard.module.scss";

export default function CollegeDashboard() {
  const history = useHistory();

  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 0],
          [15, 20],
          [18, 40],
          [29, 60],
          [35, 80],
          [45, 100],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-center my-4">
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
        {/* <div className="w-100 d-flex align-items-center justify-content-center">
          <div style={{ height: "60vh" }}>
            <Chart data={data} axes={axes} />
          </div>
        </div> */}
      </div>
    </>
  );
}
