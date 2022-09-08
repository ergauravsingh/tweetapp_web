import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Button } from "@mui/material";
import { FiMail, FiMoreHorizontal } from "react-icons/fi";
import { BsBell, BsBookmarks, BsTwitter } from "react-icons/bs";
import { FaHome, FaHashtag, FaRegListAlt } from "react-icons/fa";
import { MdPermIdentity } from "react-icons/md";
import IconButton from "@mui/material/IconButton";

export default function LeftSideBar() {
  return (
    <div className="sidebar">
      <div className="home">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <BsTwitter className="twitter-icon" />
        </IconButton>
      </div>

      <SidebarOption Icon={FaHome} text="Home" active={true} />
      <SidebarOption Icon={FaHashtag} text="Explore" />
      <SidebarOption Icon={BsBell} text="Notifications" />
      <SidebarOption Icon={FiMail} text="Messages" />
      <SidebarOption Icon={BsBookmarks} text="Bookmarks" />
      <SidebarOption Icon={FaRegListAlt} text="Lists" />
      <SidebarOption Icon={MdPermIdentity} text="Profile" />
      <SidebarOption Icon={FiMoreHorizontal} text="More" />

      <Button fullWidth className="tweet-btn" variant="outlined">
        "Login" : "SignOut"
      </Button>
    </div>
  );
}
