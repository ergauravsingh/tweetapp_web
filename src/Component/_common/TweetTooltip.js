import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsThreeDots, BsFlagFill } from "react-icons/bs";
import { TbUserOff } from "react-icons/tb";
import { FaRegListAlt, FaVolumeMute } from "react-icons/fa";
import { MdBlock, MdDelete } from "react-icons/md";
import { ImEmbed2 } from "react-icons/im";
import { IconButton } from "@mui/material";

export default function TweetTooltip({
  tweet_id,
  reply_id,
  canBeDeleted,
  deleteTweet,
  deleteReply,
  isAReply,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteTweetFunction = () => {
    deleteTweet(tweet_id);
  };

  const deleteReplyFunction = () => {
    deleteReply(reply_id);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <BsThreeDots
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        ></BsThreeDots>
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {canBeDeleted === "delete" && !isAReply && (
          <MenuItem onClick={deleteTweetFunction}>
            <MdDelete /> Delete Tweet
          </MenuItem>
        )}
        {canBeDeleted === "delete" && isAReply && (
          <MenuItem onClick={deleteReplyFunction}>
            <MdDelete /> Delete Reply:
          </MenuItem>
        )}
        {canBeDeleted !== "delete" && (
          <MenuItem onClick={handleClose}>
            {" "}
            <TbUserOff /> Unfollow User
          </MenuItem>
        )}
        <MenuItem onClick={handleClose}>
          {" "}
          <FaRegListAlt /> Add/Remove from lists
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <FaVolumeMute /> Mute
        </MenuItem>
        {canBeDeleted !== "delete" && (
          <MenuItem onClick={handleClose}>
            {" "}
            <MdBlock /> Block{" "}
          </MenuItem>
        )}
        <MenuItem onClick={handleClose}>
          {" "}
          <ImEmbed2 /> Embed Tweet
        </MenuItem>
        {canBeDeleted !== "delete" && (
          <MenuItem onClick={handleClose}>
            {" "}
            <BsFlagFill /> Report Tweet
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
