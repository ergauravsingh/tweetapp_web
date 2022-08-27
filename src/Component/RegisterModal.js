import React, { useState } from "react";
import { useHistory } from "react-router";
import UserService from "../services/UserService";

import { MdClose } from "react-icons/md";

import {
  Fab,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function RegisterModal() {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const reset = () => {
    setFirstName(null);
    setLastName(null);
    setEmail(null);
    setUsername(null);
    setPassword(null);
    setConfirmPassword(null);
    setError(null);
    setMessage(null);
  };

  const handleValidation = () => {
    const emailRegex = /^[a-z0-9]+@[a-z]+.[a-z]+$/;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !username ||
      !password ||
      !confirmPassword
    ) {
      setError("Field cannot be blank");
      return false;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return false;
    }

    if (password != confirmPassword) {
      setError("Password and Confirm Password do not match");
      return false;
    }
    return true;
  };

  const saveUserDetails = () => {
    // // e.preventDefault();
    if (handleValidation()) {
      let user = { firstName, lastName, email, username, password };
      console.log(user);
      //   UserService.saveUser(user)
      //     .then((response) => {
      //       setMessage("Registered successfully");
      //     })
      //     .catch((err) => {
      //       if (err.message == "Request failed with status code 500") {
      //         setError("Login Id and Email Already Exist");
      //       }
      //     });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    reset();
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        className="blue-btn landing-content-bottom"
        style={{ textTransform: "none" }}
        onClick={handleClickOpen}
      >
        Sign up
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        className="sign-up-dialog-box"
        fullWidth
        maxWidth="md"
      >
        <div className="row">
          <div className="col-1">
            <Fab onClick={handleClose} className="sign-up-close-btn">
              <MdClose className="sign-up-close-icon"></MdClose>
            </Fab>
          </div>
          <div className="col">
            <DialogTitle className="step-one">Step 1 of 1</DialogTitle>
          </div>
        </div>

        <DialogContent>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <DialogContentText className="create-your-account">
                Create Your Account
              </DialogContentText>

              <div className="sign-up-form">
                <div className="form-group">
                  <TextField
                    className="input-box-half"
                    style={{ marginRight: "3%" }}
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    onChange={(e) => setFirstName(e.target.value)}
                    error={
                      error == "Field cannot be blank" &&
                      (!firstName || firstName == "")
                    }
                    helperText={
                      error == "Field cannot be blank" &&
                      (!firstName || firstName == "")
                        ? "Field cannot be blank"
                        : null
                    }
                  />
                  <TextField
                    className="input-box-half"
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    onChange={(e) => setLastName(e.target.value)}
                    error={
                      error == "Field cannot be blank" &&
                      (!lastName || lastName == "")
                    }
                    helperText={
                      error == "Field cannot be blank" &&
                      (!lastName || lastName == "")
                        ? "Field cannot be blank"
                        : null
                    }
                  />
                </div>
                <div className="form-group">
                  <TextField
                    className="input-box"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                    error={
                      (error == "Field cannot be blank" &&
                        (!email || email == "")) ||
                      error == "Please enter a valid email"
                    }
                    helperText={
                      error == "Field cannot be blank" &&
                      (!email || email == "")
                        ? "Field cannot be blank"
                        : error == "Please enter a valid email"
                        ? "Please enter a valid email"
                        : null
                    }
                  />
                </div>
                <div className="form-group">
                  <TextField
                    className="input-box"
                    id="outlined-basic"
                    label="User Id"
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)}
                    error={
                      error == "Field cannot be blank" &&
                      (!username || username == "")
                    }
                    helperText={
                      error == "Field cannot be blank" &&
                      (!username || username == "")
                        ? "Field cannot be blank"
                        : null
                    }
                  />
                </div>
                <div className="form-group">
                  <TextField
                    className="input-box"
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                    error={
                      error == "Field cannot be blank" &&
                      (!password || password == "")
                    }
                    helperText={
                      error == "Field cannot be blank" &&
                      (!password || password == "")
                        ? "Field cannot be blank"
                        : null
                    }
                  />
                </div>
                <div className="form-group">
                  <TextField
                    className="input-box"
                    id="outlined-basic"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={
                      (error == "Field cannot be blank" &&
                        (!confirmPassword || confirmPassword == "")) ||
                      error == "Password and Confirm Password do not match"
                    }
                    helperText={
                      error == "Field cannot be blank" &&
                      (!confirmPassword || confirmPassword == "")
                        ? "Field cannot be blank"
                        : error == "Password and Confirm Password do not match"
                        ? "Password and Confirm Password do not match"
                        : null
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="create-account">
          <Button
            variant="contained"
            className="create-account-btn"
            style={{ textTransform: "none" }}
            onClick={saveUserDetails}
          >
            Create Account
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
