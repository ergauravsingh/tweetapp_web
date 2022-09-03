import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import Twitter from "@mui/icons-material/Twitter";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

export default function LeftSideBar() {
  const history = useHistory();

  const change = (e) => {
    history.push("/home");
  };
  return (
    <div className="sidebar">
      <div className="home">
        <Twitter className="twitter-icon" onClick={change} />
      </div>

      <SidebarOption Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} active={false} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <Button fullWidth className="tweet-btn" variant="outlined">
        "Login" : "SignOut"
      </Button>
    </div>
  );
}
