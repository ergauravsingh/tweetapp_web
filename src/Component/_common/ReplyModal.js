import React, { useState } from "react";
import { getConnectedComponent } from "../../store";
import { MdClose } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import {
  Fab,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";

import Feed from "./Feed";
import Reply from "./Reply";
import ReplyBox from "./ReplyBox";

const ReplyModal = ({ feed, userName }) => {
  const [repliesList, setRepliesList] = useState(null);
  const [open, setOpen] = useState(false);

  const reset = () => {};

  const getAllReplies = async () => {
    const response = await feed.getReplies(feed.tweet_id);
    if (response) {
      setRepliesList(response);
    }
  };

  const deleteAReply = async (reply_id) => {
    const deleteSatus = await feed.deleteReply(reply_id);
    if (deleteSatus) {
      await getAllReplies();
    }
  };

  const handleClickOpen = async () => {
    await getAllReplies();
    setOpen(true);
  };
  const handleClose = () => {
    reset();
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen} className="action-button">
        <BsChat fontSize="medium" />
      </IconButton>

      {repliesList && (
        <Dialog
          open={open}
          onClose={handleClose}
          className="sign-up-dialog-box"
          fullWidth
          maxWidth="md"
          style={{ overflowX: "hidden" }}
        >
          <div className="row">
            <div className="col-1">
              <Fab onClick={handleClose} className="sign-up-close-btn">
                <MdClose className="sign-up-close-icon"></MdClose>
              </Fab>
            </div>
          </div>

          <DialogContent>
            <div
              className="feed-in-reply"
              style={{ width: "90%", overflowX: "hidden" }}
            >
              <Feed
                tweet_id={feed.tweet_id}
                tweet_message={feed.tweet_message}
                tweet_created_at={feed.tweet_created_at}
                tweet_updated_at={feed.tweet_updated_at}
                userName={feed.userName}
                displayName={feed.displayName}
                // tweet can be deleted if username matches the one saved in store
                canBeDeleted={
                  feed.userName === userName ? "delete" : "nodelete"
                }
                deleteTweet={feed.deleteTweet}
              />
            </div>
            <div className="replies-in-reply" style={{ overflowX: "hidden" }}>
              {repliesList?.map((reply) => (
                <Reply
                  key={reply.replyId}
                  reply_id={reply.replyId}
                  userName={reply.userName}
                  replying_to={feed.userName}
                  reply_message={reply.replyText}
                  reply_created_at={reply.replyCreatedAt}
                  canBeDeleted={
                    reply.userName === userName ? "delete" : "nodelete"
                  }
                  deleteReply={deleteAReply}
                ></Reply>
              ))}
            </div>
          </DialogContent>
          <DialogActions style={{ display: "block" }}>
            <ReplyBox
              tweet_id={feed.tweet_id}
              getAllReplies={getAllReplies}
              createReply={feed.createReply}
            ></ReplyBox>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default getConnectedComponent(ReplyModal);
