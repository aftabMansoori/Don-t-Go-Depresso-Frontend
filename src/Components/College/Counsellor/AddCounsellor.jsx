import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { addCollegeCounsellor } from "../../../utils/api";
import { axiosConfig } from "../../../utils/axiosConfig";

import styles from "./Counsellor.module.scss";

//MUI
import { TextField } from "@mui/material";

export default function AddCounsellor({ handleCounsellorList }) {
  const [loading, setLoading] = useState(false);
  const [counsellorUserName, setCounsellorUserName] = useState("");
  const [password, setPassword] = useState("");

  const addCounsellor = () => {
    setLoading(true);

    axiosConfig
      .post(addCollegeCounsellor, { counsellorUserName, password })
      .then((res) => {
        if (res.status !== 201) return;
        console.log("ada", res);
        setLoading(false);
        setCounsellorUserName("");
        setPassword("");
        handleCounsellorList();
        toast.success("Counsellor added successfully");
      })
      .catch((err) => {
        toast.error("There was an Error. Please try again later");
        console.log("ada", err.response.data.message);
        setLoading(false);
      });
    setLoading(false);
  };

  return (
    <>
      <div className={styles.parent}>
        <div className="my-2 w-50">
          <TextField
            id="outlined-basic"
            fullWidth
            label="Name"
            variant="outlined"
            value={counsellorUserName}
            onChange={(e) => setCounsellorUserName(e.target.value)}
          />
        </div>
        <div className="my-4 w-50">
          <TextField
            id="outlined-basic"
            label="Password"
            fullWidth
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button
          disabled={loading}
          onClick={() => addCounsellor()}
          className="btn btn-success w-50 btn-lg"
        >
          Add Counsellor
        </button>
        <Toaster position="top-right" />
      </div>
    </>
  );
}
