import React, { useState } from "react";
import { useHistory } from "react-router";
import { getConnectedComponent } from "../store";
import { TweetServices } from "../services/TweetServices";
import { MdClose } from "react-icons/md";
import {
  Fab,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

const LoginModal = (props) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const reset = () => {
    setUserName(null);
    setPassword(null);
    setError(null);
    setMessage(null);
  };

  const handleValidation = () => {
    if (!userName || !password) {
      setError("Field cannot be blank");
      return false;
    }
    return true;
  };

  const loginUser = async () => {
    if (handleValidation()) {
      let user = { userName, password };
      const response = await TweetServices.loginAPI(user);
      if (!response.error) {
        setMessage(null);
        localStorage.setItem("token", "Bearer " + response.data?.jwt);

        // set store
        props.setUserName(response.data?.username);
        props.setDisplayName(
          response.data?.firstName + " " + response.data?.lastName
        );

        history.push("/home");
      } else {
        console.log(response.error);
        if (typeof response.error === "string") setMessage(response.error);
      }
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
        variant="outlined"
        className="white-btn landing-content-bottom"
        style={{ textTransform: "none" }}
        onClick={handleClickOpen}
      >
        Log in
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
        </div>

        <DialogContent>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <span
                className="dialog-message"
                style={{
                  color: "red",
                }}
              >
                {message}
              </span>
              <DialogContentText className="create-your-account">
                Login to your account
              </DialogContentText>

              <div className="sign-up-form">
                <div className="form-group">
                  <TextField
                    className="input-box"
                    id="username"
                    label="User Id"
                    variant="outlined"
                    onChange={(e) => setUserName(e.target.value)}
                    error={
                      error === "Field cannot be blank" &&
                      (!userName || userName === "")
                    }
                    helperText={
                      error === "Field cannot be blank" &&
                      (!userName || userName === "")
                        ? "Field cannot be blank"
                        : null
                    }
                  />
                </div>
                <div className="form-group">
                  <TextField
                    className="input-box"
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                    error={
                      error === "Field cannot be blank" &&
                      (!password || password === "")
                    }
                    helperText={
                      error === "Field cannot be blank" &&
                      (!password || password === "")
                        ? "Field cannot be blank"
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
            onClick={loginUser}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default getConnectedComponent(LoginModal);
