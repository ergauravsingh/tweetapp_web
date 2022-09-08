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
import { BsDot } from "react-icons/bs";
import { IconButton } from "@mui/material";
import {
  formatAMPM,
  formatDayMonth,
  getTimeDifferenceFromNow,
} from "../../util/TemplateFormatter";
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
        <div className="col col-md-11 post-content">
          <div className="row post-content-row-username">
            <div className="col-1 post-avatar">
              <FaUserCircle
                className="post__avatar"
                style={{ fontSize: "40px", color: "lightgrey" }}
              />
            </div>
            <div className="col" style={{ padding: "0px" }}>
              <span className="display-name">@{userName} </span>
              <MdVerified className="display-icon" />
              <span>
                {" "}
                <BsDot />{" "}
              </span>
              <span>{getTimeDifferenceFromNow(reply_created_at)}</span>
              <br />
              <span className=" replying-to">Replying to @{replying_to}</span>
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
          <div className="row post-content-row-tweet">
            <div className="col col-md-12">
              <span className="tweet-message">{reply_message}</span>
            </div>
          </div>

          <div className="row post-content-row-time">
            <div className="col">
              <span className="tweet-time">{formatAMPM(reply_created_at)}</span>
              <span>
                {" "}
                <BsDot />{" "}
              </span>
              <span className="tweet-time">
                {formatDayMonth(reply_created_at)}
              </span>
            </div>
          </div>
          <div className="row post-content-row-actions">
            <div className="col">
              <IconButton className="action-button">
                <MdRepeat fontSize="medium" />
              </IconButton>
            </div>
            <div className="col ">
              <IconButton className="like-button" onClick={likeDislike}>
                {likeClass ? (
                  <MdFavorite fontSize="medium" style={{ color: "#EF1C5C" }} />
                ) : (
                  <MdFavoriteBorder fontSize="medium"></MdFavoriteBorder>
                )}
              </IconButton>
            </div>
            <div className="col">
              <IconButton className="action-button">
                <FiShare fontSize="medium" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
