import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { collegeLogin } from "../../redux/action/collegeAction";

import { TextField, Button } from "@mui/material";

export default function CollegeSignin() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [collegeCode, setCollegeCode] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!collegeCode || !password) {
      setMsg("Please fill the required fields");
    } else {
      try {
        setMsg("");
        setLoading(true);
        dispatch(collegeLogin(collegeCode, password))
          .then(() => {
            history.push("/college/dashboard");
          })
          .catch((err) => {
            setMsg("Credentials are invalid");
            console.log(err);
          });
      } catch (err) {
        setMsg("There was an error while login");
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>College Signin</h1>
      <h4>{msg}</h4>
      <div>
        <TextField
          id="outlined-basic"
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
    </div>
  );
}
