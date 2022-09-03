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
        <div className="col-1 post-avatar">
          <FaUserCircle
            className="post__avatar"
            style={{ fontSize: "40px", color: "grey" }}
          />
        </div>
        <div className="col post-content">
          <div className="row post-content-row-username">
            <div className="col">
              <span className="display-name">{displayName}</span>
              <MdVerified className="display-icon post__badge" />@{userName}
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
            <p>{tweet_message}</p>
          </div>
          <div className="row post-content-row-time">
            <div className="col-2">{formatAMPM(tweet_updated_at)}</div>
            <div className="col-2">{formatDayMonth(tweet_updated_at)}</div>
          </div>
          <div className="row post-content-row-actions">
            {isStandAlone && (
              <div className="col">
                <ReplyModal feed={replyFeedProp}></ReplyModal>
              </div>
            )}

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
