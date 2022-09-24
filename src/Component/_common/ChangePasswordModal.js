import React, { useState } from "react";
import { getConnectedComponent } from "../../store";
import { MdClose } from "react-icons/md";
import LockResetIcon from "@mui/icons-material/LockReset";
import { MenuItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";

import {
  Fab,
  IconButton,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

export default function ChangePasswordModal({ changePassword, logOut }) {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState(null);
  const [confirmpassword, setConfirmpassword] = useState(null);

  const [error, setError] = useState(null);

  const [message, setMessage] = useState(null);

  const reset = () => {
    setPassword(null);
    setConfirmpassword(null);
    setError(null);
    setMessage(null);
  };

  const handleValidation = () => {
    if (!password || !password) {
      setError("Field cannot be blank");
      return false;
    } else if (password !== confirmpassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const changePWD = async () => {
    if (handleValidation()) {
      const response = await changePassword(password);
      if (!response.error) {
        setMessage(null);
        logOut();
      } else {
        console.log(response.error);
        if (typeof response.error === "string") setMessage(response.error);
      }
    }
  };

  const handleClickOpen = async () => {
    setOpen(true);
  };
  const handleClose = () => {
    reset();
    setOpen(false);
  };

  return (
    <div>
      <MenuItem onClick={handleClickOpen}>
        <ListItemIcon>
          <LockResetIcon fontSize="small" />
        </ListItemIcon>
        Change Password
      </MenuItem>
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
                Change your password
              </DialogContentText>

              <div className="sign-up-form">
                <div className="form-group">
                  <TextField
                    className="input-box"
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    error={
                      (error === "Field cannot be blank" &&
                        (!password || password === "")) ||
                      error === "Passwords do not match"
                    }
                    helperText={
                      error === "Field cannot be blank" &&
                      (!password || password === "")
                        ? "Field cannot be blank"
                        : error === "Passwords do not match"
                        ? "Passwords do not match"
                        : null
                    }
                  />
                </div>
                <div className="form-group">
                  <TextField
                    className="input-box"
                    id="confirmpassword"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => setConfirmpassword(e.target.value)}
                    error={
                      (error === "Field cannot be blank" &&
                        (!confirmpassword || confirmpassword === "")) ||
                      error === "Passwords do not match"
                    }
                    helperText={
                      error === "Field cannot be blank" &&
                      (!confirmpassword || confirmpassword === "")
                        ? "Field cannot be blank"
                        : error === "Passwords do not match"
                        ? "Passwords do not match"
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
            onClick={changePWD}
          >
            Change Password Securely
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
