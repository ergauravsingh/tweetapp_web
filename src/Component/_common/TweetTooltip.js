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
      <IconButton onClick={handleClick} className="display-icon">
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
            <MdDelete
              style={{
                fontSize: "1.25rem",
                color: "rgba(0, 0, 0, 0.54)",
                marginRight: "7%",
              }}
            />{" "}
            Delete Tweet
          </MenuItem>
        )}
        {canBeDeleted === "delete" && isAReply && (
          <MenuItem onClick={deleteReplyFunction}>
            <MdDelete
              style={{
                fontSize: "1.25rem",
                color: "rgba(0, 0, 0, 0.54)",
                marginRight: "7%",
              }}
            />{" "}
            Delete Reply:
          </MenuItem>
        )}
        {canBeDeleted !== "delete" && (
          <MenuItem onClick={handleClose}>
            {" "}
            <TbUserOff
              style={{
                fontSize: "1.25rem",
                color: "rgba(0, 0, 0, 0.54)",
                marginRight: "7%",
              }}
            />{" "}
            Unfollow User
          </MenuItem>
        )}
        <MenuItem onClick={handleClose} style={{ width: "125%" }}>
          {" "}
          <FaRegListAlt
            style={{
              fontSize: "1.0rem",
              color: "rgba(0, 0, 0, 0.54)",
              marginRight: "7%",
            }}
          />{" "}
          Add/Remove from lists
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <FaVolumeMute
            style={{
              fontSize: "1.25rem",
              color: "rgba(0, 0, 0, 0.54)",
              marginRight: "7%",
            }}
          />{" "}
          Mute
        </MenuItem>
        {canBeDeleted !== "delete" && (
          <MenuItem onClick={handleClose}>
            {" "}
            <MdBlock
              style={{
                fontSize: "1.25rem",
                color: "rgba(0, 0, 0, 0.54)",
                marginRight: "7%",
              }}
            />{" "}
            Block{" "}
          </MenuItem>
        )}
        <MenuItem onClick={handleClose}>
          {" "}
          <ImEmbed2
            style={{
              fontSize: "1.25rem",
              color: "rgba(0, 0, 0, 0.54)",
              marginRight: "7%",
            }}
          />{" "}
          Embed Tweet
        </MenuItem>
        {canBeDeleted !== "delete" && (
          <MenuItem onClick={handleClose}>
            {" "}
            <BsFlagFill
              style={{
                fontSize: "1.25rem",
                color: "rgba(0, 0, 0, 0.54)",
                marginRight: "7%",
              }}
            />{" "}
            Report Tweet
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
