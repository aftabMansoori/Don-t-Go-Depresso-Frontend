import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { axiosConfig } from "../../../utils/axiosConfig";
import toast, { Toaster } from "react-hot-toast";
// import { studentRegister } from "../../redux/action/studentAction";

import { TextField, Button } from "@mui/material";

import styles from "./StudentSignUp.module.scss";

export default function StudentSignUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  let [student, setStudent] = useState({
    studentClgEmail: "",
    studentClgCode: "",
    password: "",
    confPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    setMsg("");
    setLoading(true);
    axiosConfig
      .post("/student/signup", { student })
      .then((res) => {
        if (res.status !== 201) return;
        axiosConfig
          .post("/student/signin", {
            username: student.studentClgEmail,
            password: student.password,
            role: "student",
          })
          .then((res) => {
            if (res.status !== 200) return;
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem("isAuth", true);
            history.push("/student/set-profile");
            setLoading(false);
          })
          .catch((err) => {
            history.push("/student/signup");
          });
      })
      .catch((err) => {
        console.log("ada", err);
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  const signUp = useSelector((state) => state.student);

  return (
    <>
      <section className={styles.parent}>
        <div className={styles.signupForm}>
          <h1 className="text-center">Student Sign Up</h1>
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setStudent({ ...student, studentClgEmail: e.target.value })
              }
              label="Email"
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setStudent({ ...student, studentClgCode: e.target.value })
              }
              label="Code"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setStudent({ ...student, password: e.target.value })
              }
              label="Password"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setStudent({ ...student, confPassword: e.target.value })
              }
              label="Confirm Password"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <Button
            disabled={loading}
            variant="contained"
            fullWidth
            type="submit"
            size="large"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </section>
    </>
  );
}
