import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function StudentProfileP2() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

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
          <div>
            <div>
              <TextField
                id="outlined-basic"
                label="Father's Occupation"
                margin="normal"
                fullWidth
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Mother's Occupation"
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </div>
            {/* <div> */}
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Are you on any medication?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            {/* <div className="m-0"> */}
            <TextField
              id="outlined-basic"
              label="Little about the medications"
              fullWidth
              margin="normal"
              variant="standard"
            />
            <div>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Handicapped
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <Button
                variant="contained"
                type="submit"
                margin="normal"
                size="large"
              >
                Done
              </Button>
            </div>
            <div>
              <button
                className="btn"
                onClick={() => navigate("/student/signin")}
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      </section>
    </Dialog>
  );
}
