import React, { useState } from "react";

import styles from "./Quiz.module.scss";

export default function Question({ q, incrementPage }) {
  return (
    <div className={styles.parent}>
      <div className="row">
        <div className="col-6 d-flex align-items-center justify-content-center flex-column">
          <h1 className="text-white">{q.q}</h1>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center flex-column">
          <div>
            {q.a.map((a, i) => (
              <p
                onClick={() => incrementPage(a)}
                className={styles.answerBox}
                key={i}
              >
                {a}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
