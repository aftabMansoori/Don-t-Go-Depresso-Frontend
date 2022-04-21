import React from "react";

import styles from "./Counsellor.module.scss";

//MUI
import { TextField } from "@mui/material";

export default function AddCounsellor() {
  return (
    <>
      <div className={styles.parent}>
        <div className="my-2 w-50">
          <TextField
            id="outlined-basic"
            fullWidth
            label="Name"
            variant="outlined"
          />
        </div>
        <div className="my-4 w-50">
          <TextField
            id="outlined-basic"
            label="Password"
            fullWidth
            variant="outlined"
            type="password"
          />
        </div>
        <br />
        <button className="btn btn-success w-50 btn-lg">Add Counsellor</button>
      </div>
    </>
  );
}
