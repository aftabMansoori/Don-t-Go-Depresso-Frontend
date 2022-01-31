import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { studentLogin } from "../../../redux/action/studentAction";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import { TextField, Button } from "@mui/material";

import styles from "./StudentSignin.module.scss";

export default function StudentSignin() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://localhost:5000/student/signin", {
        username: email,
        password: password,
        role: "student",
      })
      .then((res) => {
        console.log("ada", res);
        toast("Sign in Sucessfull");
      })
      .catch((err) => {
        console.log("ada", err.message);
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
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </section>
    </>
  );
}
