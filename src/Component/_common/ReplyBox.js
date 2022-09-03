import React, { useState } from "react";
import { Avatar, Button, TextField } from "@mui/material";
import "./TweetBox.css";

function ReplyBox({ tweet_id, createReply, getAllReplies }) {
  const [replyMessage, setReplyMessage] = useState(null);

  const createReplyFunction = async (event) => {
    event.preventDefault();
    if (replyMessage) {
      let reply = { tweetId: tweet_id, replyText: replyMessage };
      const replyStatus = await createReply(reply);
      setReplyMessage(null);
      if (replyStatus) {
        await getAllReplies();
      }
    }
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="row form-row">
          <div className="col-1 avatar-col">
            <Avatar
              style={{ width: "60px", height: "60px" }}
              src="data:image/jpeg;base64,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"
            />
          </div>
          <div className="col-8">
            <TextField
              fullWidth
              label="Tweet your reply"
              id="reply"
              onChange={(event) => setReplyMessage(event.target.value)}
            />
          </div>
          <div className="col">
            <Button onClick={createReplyFunction} type="submit">
              Reply
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReplyBox;
