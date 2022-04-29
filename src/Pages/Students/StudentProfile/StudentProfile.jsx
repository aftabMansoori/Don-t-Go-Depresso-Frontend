import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { axiosConfig } from "../../../utils/axiosConfig";

import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Dialog,
} from "@mui/material";

import styles from "./StudentProfile.module.scss";

export default function StudentProfile() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = useState(true);
  const [profile, setProfile] = useState({
    studentName: "",
    studentPRN: "",
    studentClass: "",
    studentPhoneNo: "",
    studentAge: "",
    gender: "",
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
      axiosConfig
        .post("/student/profile", { profile })
        .then((res) => {
          if (res.status !== 200) return;
          history.push("/student/set-profile/2");
          setLoading(false);
        })
        .catch((err) => {
          console.log("ada", err.response);
        });
    } catch (err) {
      console.log(err);
      setMsg("There was an error while updating your profile");
      setLoading(false);
    }
  };

  const handleBack = () => {
    setOpen(false);
    history.push("/");
  };

  return (
    <Dialog
      open={open}
      fullScreen={open}
      maxWidth={"100vw"}
      fullWidth={"100vw"}
    >
      <section className={styles.parent}>
        <div className={styles.profileForm + " container"}>
          <h1 className="text-center">Student Profile</h1>
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <div>
                <img
                  src="https://i.pinimg.com/236x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="About"
                  fullWidth
                  multiline
                  rows={9}
                  margin="normal"
                  onChange={(e) =>
                    setProfile({ ...profile, aboutStudent: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <TextField
                id="outlined-basic"
                label="Full Name (Name Surname)"
                margin="normal"
                fullWidth
                variant="outlined"
                onChange={(e) =>
                  setProfile({ ...profile, studentName: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="PRN"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={(e) =>
                  setProfile({ ...profile, studentPRN: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Class (Year/field/Sem)"
                margin="normal"
                fullWidth
                variant="outlined"
                onChange={(e) =>
                  setProfile({ ...profile, studentClass: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                fullWidth
                label="Phone"
                margin="normal"
                variant="outlined"
                onChange={(e) =>
                  setProfile({ ...profile, studentPhoneNo: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Age"
                margin="normal"
                variant="outlined"
                onChange={(e) =>
                  setProfile({ ...profile, studentAge: e.target.value })
                }
              />
            </div>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit(onSubmit)}
            margin="normal"
            disabled={loading}
            size="large"
          >
            Set Profile
          </Button>
        </div>
      </section>
    </Dialog>
  );
}
