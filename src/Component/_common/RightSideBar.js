import React from "react";
import "./Sidebar.css";
import SearchIcon from "@mui/icons-material/Search";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { FiSettings, FiMoreHorizontal } from "react-icons/fi";

import { FaUserCircle } from "react-icons/fa";
import { Button } from "@mui/material";

function Sidebar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <div className="right-sidebar">
      <Search className="search-box">
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Twitter"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <div className="trends">
        <div style={{ marginBottom: "4%" }}>
          <span className="trends-for-you">Trends for you</span>{" "}
          <span style={{ marginLeft: "32%" }}>
            {" "}
            <FiSettings />{" "}
          </span>
        </div>
        <TrendsForYou style={{ padding: "2%" }}></TrendsForYou>
      </div>
      <div
        style={{
          marginLeft: "3%",
          marginTop: "1%",
          marginBottom: "1%",
          color: "#1DA1F2",
        }}
      >
        Show more
      </div>
      <div className="trends">
        <div style={{ marginBottom: "4%" }}>
          <span className="trends-for-you">You Might Like</span>{" "}
        </div>
        <YouMightLike style={{ padding: "2%" }}></YouMightLike>
      </div>
    </div>
  );
}
export default Sidebar;

function TrendsForYou() {
  return [1, 2, 3].map(() => {
    return (
      <div
        style={{
          width: "100%",
          maxWidth: 360,
          borderBottom: "1px solid grey",
        }}
      >
        <span className="trending-in-germany">Trending in germany</span>
        <span style={{ marginLeft: "34%" }}>
          <FiMoreHorizontal />
        </span>
        <br />
        <span className="revolution">Revolution</span> <br />
        <span className="no-of-tweets">50.4K Tweets</span>
      </div>
    );
  });
}

function YouMightLike() {
  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      <ListItem style={{ padding: "0px", borderBottom: "1px solid grey" }}>
        <ListItemAvatar>
          <Avatar>
            <FaUserCircle
              className="post__avatar"
              style={{
                fontSize: "40px",
                color: "lightgrey",
                background: "white",
              }}
            />
          </Avatar>
        </ListItemAvatar>
        <div className="col-6" style={{ padding: "0px" }}>
          <ListItemText>
            <span className="you-might-like-username">Ratan N. Tata</span>{" "}
            <br />
            <span className="you-might-like-userid">@tata_sons</span>
          </ListItemText>
        </div>
        <div className="col" style={{ padding: "0px" }}>
          <Button
            type="submit"
            className="black-follow-button"
            style={{ textTransform: "none" }}
            variant="contained"
          >
            Follow
          </Button>
        </div>
      </ListItem>
      <ListItem style={{ padding: "0px", borderBottom: "1px solid grey" }}>
        <ListItemAvatar>
          <Avatar>
            <FaUserCircle
              className="post__avatar"
              style={{
                fontSize: "40px",
                color: "lightgrey",
                background: "white",
              }}
            />
          </Avatar>
        </ListItemAvatar>
        <div className="col-6" style={{ padding: "0px" }}>
          <ListItemText>
            <span className="you-might-like-username">Bill Gates</span> <br />
            <span className="you-might-like-userid">@microsoft_founder</span>
          </ListItemText>
        </div>
        <div className="col" style={{ padding: "0px" }}>
          <Button
            type="submit"
            className="black-follow-button"
            style={{ textTransform: "none" }}
            variant="contained"
          >
            Follow
          </Button>
        </div>
      </ListItem>
      <ListItem style={{ padding: "0px", borderBottom: "1px solid grey" }}>
        <ListItemAvatar>
          <Avatar>
            <FaUserCircle
              className="post__avatar"
              style={{
                fontSize: "40px",
                color: "lightgrey",
                background: "white",
              }}
            />
          </Avatar>
        </ListItemAvatar>
        <div className="col-6" style={{ padding: "0px" }}>
          <ListItemText>
            <span className="you-might-like-username">Jeff Bezos</span> <br />
            <span className="you-might-like-userid">@a_to_z</span>
          </ListItemText>
        </div>
        <div className="col" style={{ padding: "0px" }}>
          <Button
            type="submit"
            className="black-follow-button"
            style={{ textTransform: "none" }}
            variant="contained"
          >
            Follow
          </Button>
        </div>
      </ListItem>
    </List>
  );
}
