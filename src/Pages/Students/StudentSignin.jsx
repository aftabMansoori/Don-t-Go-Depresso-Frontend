import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { studentLogin } from "../../redux/action/studentAction";

import { TextField, Button } from "@mui/material";

export default function StudentSignin() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMsg("Please fill the required fields");
    } else {
      try {
        setMsg("");
        setLoading(true);
        dispatch(studentLogin(email, password))
          .then(() => {
            history.push("/student/set-profile");
          })
          .catch((err) => {
            setMsg("Credentials are invalid");
          });
      } catch (err) {
        setMsg("There was an error while login");
      }
    }
    setLoading(false);
  };

  const signIn = useSelector((state) => state.student);

  return (
    <>
      <h1>Student Signin</h1>
      <h4>{msg}</h4>
      <div>
        <TextField
          id="outlined-basic"
          label="Email"
          margin="normal"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Password"
          margin="normal"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        disabled={loading}
        onClick={handleSubmit}
        variant="contained"
        type="submit"
      >
        Sign In
      </Button>
    </>
  );
}
