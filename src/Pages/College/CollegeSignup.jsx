import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { collegeRegister } from "../../redux/action/collegeAction";

import { TextField, Button } from "@mui/material";

export default function CollegeSignup() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [college, setCollege] = useState({
    collegeCode: "",
    collegeName: "",
    password: "",
    confPassword: "",
    collegePhoneNo: "",
    collegeAddress: "",
    collegeLocation: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      dispatch(collegeRegister(college))
        .then(() => history.push("/college/signin"))
        .catch((err) => {
          console.log(err);
          history.push("/college/signup");
        });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>CollegeSignup</h1>
      <div>
        <TextField
          id="outlined-basic"
          onChange={(e) =>
            setCollege({ ...college, collegeName: e.target.value })
          }
          label="College Name"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          onChange={(e) =>
            setCollege({ ...college, collegeCode: e.target.value })
          }
          label="College Code"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          onChange={(e) =>
            setCollege({ ...college, collegePhoneNo: e.target.value })
          }
          label="Phone Number"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          onChange={(e) => setCollege({ ...college, password: e.target.value })}
          label="Password"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          onChange={(e) =>
            setCollege({ ...college, confPassword: e.target.value })
          }
          label="Confirm Password"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          onChange={(e) =>
            setCollege({ ...college, collegeAddress: e.target.value })
          }
          label="College Address"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          onChange={(e) =>
            setCollege({ ...college, collegeLocation: e.target.value })
          }
          label="College Location"
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
    </div>
  );
}
