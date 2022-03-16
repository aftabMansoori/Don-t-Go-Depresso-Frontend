import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { studentLogin } from "../../../redux/action/studentAction";
import { axiosConfig } from "../../../utils/axiosConfig";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

import { TextField, Button } from "@mui/material";

import styles from "./StudentSignin.module.scss";

export default function StudentSignin() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    setLoading(true);
    // `${base_url}/student/signin`
    axiosConfig
      .post("/student/signin", {
        username: email,
        password: password,
        role: "student",
      })
      .then((res) => {
        if (res.status !== 200) return;
        // console.log("ada", res);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("isAuth", true);
        toast.success("Sign in Sucessfull");
        history.push("/student/dashboard");
        window.location.reload(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ada", err.message);
        toast.error(err.response.data.message);
        setLoading(false);
      });

    setLoading(false);
  };

  const signIn = useSelector((state) => state.student);

  return (
    <>
      <section className={styles.parent}>
        <div className={styles.loginForm}>
          <h1 className="text-center">Sign in</h1>
          <p className="text-center">Sign in to safe mental space!</p>
          <div>
            <TextField
              id="outlined-basic"
              label="Email"
              margin="normal"
              variant="outlined"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              margin="normal"
              variant="outlined"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
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
            size="large"
          >
            Sign In
          </Button>
          <div className="text-center mt-4">
            <p>
              Don't have account?
              <Link to="/student/signup"> Register here</Link>
            </p>
          </div>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </section>
    </>
  );
}
