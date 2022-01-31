import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
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
    e.preventDefault();
    try {
      setMsg("");
      setLoading(true);
      // dispatch(studentRegister(student))
      //   .then(() => {
      //     history.push("/student/signin");
      //   })
      //   .catch((err) => {
      //     setMsg("Credentials are invalid");
      //   });
    } catch (err) {
      console.log(err);
      setMsg("There was an error");
    }
    setLoading(false);
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
        </div>
      </section>
    </>
  );
}
