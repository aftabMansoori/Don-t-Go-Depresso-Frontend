import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { collegeLogout } from "../../redux/action/collegeAction";

import { Button } from "@mui/material";

export default function CollegeDashboard() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const handleSignOut = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      dispatch(collegeLogout())
        .then(() => {
          history.push("/college/signin");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>College DashBoard</h1>
      <Button
        onClick={handleSignOut}
        variant="contained"
        type="submit"
        disabled={loading}
      >
        Sign Out
      </Button>
    </div>
  );
}
