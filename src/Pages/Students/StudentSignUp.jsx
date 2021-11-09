import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { studentRegister } from "../../redux/action/studentAction";

import { TextField, Button } from "@mui/material";

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
      dispatch(studentRegister(student))
        .then(() => {
          history.push("/student/signin");
        })
        .catch((err) => {
          setMsg("Credentials are invalid");
        });
    } catch (err) {
      console.log(err);
      setMsg("There was an error");
    }
    setLoading(false);
  };

  const signUp = useSelector((state) => state.student);

  return (
    <>
      <h1>Student SignUp</h1>
      <h5>{msg}</h5>
      <div>
        <TextField
          id="outlined-basic"
          onChange={(e) =>
            setStudent({ ...student, studentClgEmail: e.target.value })
          }
          label="Email"
          margin="normal"
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
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          onChange={(e) => setStudent({ ...student, password: e.target.value })}
          label="Password"
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
          margin="normal"
          variant="outlined"
        />
      </div>
      <Button
        disabled={loading}
        variant="contained"
        type="submit"
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </>
  );
}
