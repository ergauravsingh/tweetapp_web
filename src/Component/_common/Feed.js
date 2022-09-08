import React, { useState } from "react";
import "./Feed.css";
import { FiShare } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdRepeat,
  MdVerified,
} from "react-icons/md";
import { IconButton } from "@mui/material";
import {
  formatAMPM,
  formatDayMonth,
  getTimeDifferenceFromNow,
} from "../../util/TemplateFormatter";
import TweetTooltip from "./TweetTooltip";
import ReplyModal from "./ReplyModal";

export default function Feed({
  tweet_id,
  displayName,
  userName,
  tweet_updated_at,
  tweet_message,
  canBeDeleted,
  deleteTweet,
  isStandAlone,
  getReplies,
  deleteReply,
  createReply,
}) {
  const replyFeedProp = {
    tweet_id,
    displayName,
    userName,
    tweet_updated_at,
    tweet_message,
    deleteTweet,
    getReplies,
    deleteReply,
    createReply,
  };
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
            <div className="col">
              <span className="display-name">{displayName}</span>
              <span>
                {" "}
                <MdVerified className="display-icon" />
              </span>
              <span className="diplay-username"> @{userName}</span>
              <span>
                {" "}
                <BsDot />{" "}
              </span>
              <span>{getTimeDifferenceFromNow(tweet_updated_at)}</span>
            </div>
            <div className="col-1">
              <TweetTooltip
                canBeDeleted={canBeDeleted}
                deleteTweet={deleteTweet}
                tweet_id={tweet_id}
              ></TweetTooltip>
            </div>
          </div>
          <div className="row post-content-row-tweet">
            <div className="col col-md-12">
              <span className="tweet-message">{tweet_message}</span>
            </div>
          </div>
          <div className="row post-content-row-time">
            <div className="col">
              <span className="tweet-time">{formatAMPM(tweet_updated_at)}</span>
              <span>
                {" "}
                <BsDot />{" "}
              </span>
              <span className="tweet-time">
                {formatDayMonth(tweet_updated_at)}
              </span>
            </div>
          </div>
          <div className="row post-content-row-actions">
            {isStandAlone && (
              <div className="col">
                <ReplyModal feed={replyFeedProp}></ReplyModal>
              </div>
            )}

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
