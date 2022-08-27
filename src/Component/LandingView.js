import React from "react";
import "./Style.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { FaSearch, FaUserFriends, FaTwitter } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { Container, Box, Button } from "@mui/material";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
// import Spinner from "./Spinner";

class LandingView extends React.Component {
  redirect = (route) => {
    this.props.history.push(route);
  };
  render() {
    return (
      <Container disableGutters maxWidth={false}>
        <div className="row landing-page">
          <div className="col-6 landing-page-left">
            <div className="row landing-left-content">
              <FaSearch className="landing-left-content-icon" />
              <span>Follow your interests.</span>
            </div>
            <div className="row landing-left-content">
              <FaUserFriends className="landing-left-content-icon" />
              <span>
                Hear what people are <br /> talking about.
              </span>
            </div>
            <div className="row landing-left-content">
              <BsChat className="landing-left-content-icon" />
              <span>Join the conversation.</span>
            </div>
          </div>
          <div className="col-6 landing-page-right">
            <div className="row right-content">
              <div className="col right-content landing-box">
                <Box>
                  <FaTwitter className="landing-twitter-logo" />
                  <br /> <br />{" "}
                  <span className="see-whats-happening">
                    See what’s happening in <br /> the world right now
                  </span>
                  <br />
                  <br />
                  <br />
                  <div className="landing-content-bottom">
                    <div className="row">
                      <span className="join-twitter-today landing-content-bottom">
                        Join Twitter today
                      </span>
                    </div>
                    <div className="row landing-buttons">
                      <RegisterModal></RegisterModal>
                    </div>
                    <div className="row landing-buttons">
                      <LoginModal></LoginModal>
                    </div>
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default LandingView;
