import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
// import { collegeLogin } from "../../redux/action/collegeAction";
import { axiosConfig } from "../../../utils/axiosConfig";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

import { TextField, Button } from "@mui/material";

import styles from "./CollegeSignin.module.scss";

export default function CollegeSignin() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [collegeCode, setCollegeCode] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const user = {
      username: collegeCode,
      password: password,
      role: "college",
    };

    if (!collegeCode || !password) {
      toast.error("Please fill the required fields");
    } else {
      axiosConfig
        .post("/college/signin", user)
        .then((res) => {
          if (res.status !== 200) return;
          let user = res.data.user;
          localStorage.setItem("token", JSON.stringify(res.data.token));
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("isAuth", true);
          toast.success("Login Successfull!");
          history.push("/college/dashboard");
          setLoading(false);
        })
        .catch((err) => {
          toast.error("There was an Error. Please try again later");
          console.log("ada", err.message);
          setLoading(false);
        });
    }
    setLoading(false);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.signinForm}>
        <h1>College Signin</h1>
        <div>
          <TextField
            id="outlined-basic"
            fullWidth
            label="College Code"
            margin="normal"
            variant="outlined"
            onChange={(e) => setCollegeCode(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Password"
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <div className="text-end">
          <p>Forget Password?</p>
        </div>
        <Button
          disabled={loading}
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          type="submit"
        >
          Sign In
        </Button>
      </div>
      <div className="text-center mt-4">
        <p>
          Don't have account?
          <Link to="/college/signup"> Register here</Link>
        </p>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
