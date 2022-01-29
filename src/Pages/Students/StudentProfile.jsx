import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { studentProfile } from "../../api";
import axios from "axios";

import { TextField, Button } from "@mui/material";

export default function StudentProfile() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [profile, setProfile] = useState({
    studentName: "",
    studentPRN: "",
    studentClass: "",
    studentPhoneNo: "",
    studentAge: "",
    aboutStudent: "",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    try {
      setMsg("");
      setLoading(true);
      axios
        .post(studentProfile(), { profile }, { withCredentials: true })
        .then(() => {
          history.push("/student/dashboard");
        })
        .catch((err) => {
          console.log(err);
          setMsg(err + "There was an error");
        });
    } catch (err) {
      console.log(err);
      setMsg("There was an error while updating your profile");
    }
    setLoading(false);
  };

  return (
    <>
      <h1>Student Profile</h1>
      <h6>{msg}</h6>
      <div>
        <TextField
          id="outlined-basic"
          label="Full Name"
          margin="normal"
          variant="outlined"
          {...register("fullName", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          onChange={(e) =>
            setProfile({ ...profile, studentName: e.target.value })
          }
        />
        {errors?.fullName?.type === "required" && (
          <ErrorStyle>This field is required</ErrorStyle>
        )}
        {errors?.fullName?.type === "pattern" && (
          <ErrorStyle>Alphabetical characters only</ErrorStyle>
        )}
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="PRN"
          margin="normal"
          variant="outlined"
          {...register("PRN", { required: true })}
          onChange={(e) =>
            setProfile({ ...profile, studentPRN: e.target.value })
          }
        />
        {errors?.PRN?.type === "required" && (
          <ErrorStyle>This field is required</ErrorStyle>
        )}
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Class (Year/field/Sem)"
          margin="normal"
          variant="outlined"
          {...register("studentClass", { required: true })}
          onChange={(e) =>
            setProfile({ ...profile, studentClass: e.target.value })
          }
        />
        {errors?.studentClass?.type === "required" && (
          <ErrorStyle>This field is required</ErrorStyle>
        )}
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Phone"
          margin="normal"
          variant="outlined"
          {...register("studentPhoneNo", { required: true })}
          onChange={(e) =>
            setProfile({ ...profile, studentPhoneNo: e.target.value })
          }
        />
        {errors?.studentPhoneNo?.type === "required" && (
          <ErrorStyle>This field is required</ErrorStyle>
        )}
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Age"
          margin="normal"
          variant="outlined"
          {...register("studentAge", { required: true })}
          onChange={(e) =>
            setProfile({ ...profile, studentAge: e.target.value })
          }
        />
        {errors?.studentAge?.type === "required" && (
          <ErrorStyle>This field is required</ErrorStyle>
        )}
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="About"
          multiline
          rows={8}
          margin="normal"
          onChange={(e) =>
            setProfile({ ...profile, aboutStudent: e.target.value })
          }
        />
      </div>
      <br />
      <Button
        variant="contained"
        type="submit"
        onClick={handleSubmit(onSubmit)}
        margin="normal"
        disabled={loading}
      >
        Set Profile
      </Button>
    </>
  );
}

const ErrorStyle = styled.p`
  color: #bf1650;
  margin: 0;
  margin-bottom: 10px;
  ::before {
    display: inline;
    content: "⚠ ";
  }
`;
