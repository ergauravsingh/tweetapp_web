import React, { useState } from "react";
import "./Feed.css";
import { FiShare } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdRepeat,
  MdVerified,
} from "react-icons/md";
import { IconButton } from "@mui/material";
import { formatAMPM, formatDayMonth } from "../../util/TemplateFormatter";
import TweetTooltip from "./TweetTooltip";

export default function Reply({
  reply_id,
  userName,
  replying_to,
  reply_created_at,
  reply_message,
  canBeDeleted,
  deleteReply,
}) {
  const [likeClass, setLikeClass] = useState(false);
  const likeDislike = () => {
    setLikeClass(!likeClass);
  };
  return (
    <div className="post">
      <div className="post-body row">
        <div className="col-1 post-avatar">
          <FaUserCircle
            className="post__avatar"
            style={{ fontSize: "40px", color: "grey" }}
          />
        </div>
        <div className="col post-content">
          <div className="row post-content-row-username">
            <div className="col">
              <span className="display-name">@{userName} </span>
              <MdVerified className="display-icon post__badge" />
            </div>
            <div className="col-1">
              <TweetTooltip
                canBeDeleted={canBeDeleted}
                deleteReply={deleteReply}
                reply_id={reply_id}
                isAReply={true}
              ></TweetTooltip>
            </div>
          </div>
          <div className="row replying-to">Replying to @ {replying_to}</div>
          <div className="row post-content-row-tweet">
            <p>{reply_message}</p>
          </div>
          <div className="row post-content-row-time">
            <div className="col-2">{formatAMPM(reply_created_at)}</div>
            <div className="col-2">{formatDayMonth(reply_created_at)}</div>
          </div>
          <div className="row post-content-row-actions">
            <div className="col">
              <MdRepeat fontSize="medium" />
            </div>
            <div className="col ">
              <IconButton className="like-button" onClick={likeDislike}>
                {likeClass ? (
                  <MdFavorite fontSize="medium" style={{ color: "#e0245e" }} />
                ) : (
                  <MdFavoriteBorder fontSize="medium"></MdFavoriteBorder>
                )}
              </IconButton>
            </div>
            <div className="col">
              <FiShare fontSize="medium" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
