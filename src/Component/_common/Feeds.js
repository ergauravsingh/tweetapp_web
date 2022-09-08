import React from "react";
import Feed from "./Feed";
import { getConnectedComponent } from "../../store";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Feeds = ({
  tweetsList,
  userName,
  deleteTweet,
  getReplies,
  deleteReply,
  createReply,
}) => {
  return (
    <div className="feed">
      <div className="feed__header"></div>

      {/* Central feeds section  */}
      <div>
        <List
          style={{
            maxHeight: 465,
            overflow: "auto",
            width: "107%",
          }}
        >
          {tweetsList?.map((feed) => (
            <ListItem
              key={feed.tweetId}
              style={{ paddingTop: "0%", paddingBottom: "0%" }}
            >
              <Feed
                tweet_id={feed.tweetId}
                likes={feed.likes}
                tweet_message={feed.tweet_message}
                tweet_created_at={feed.tweet_created_at}
                tweet_updated_at={feed.tweet_updated_at}
                userName={feed.userName}
                displayName={feed.firstName + " " + feed.lastName}
                // tweet can be deleted if username matches the one saved in store
                canBeDeleted={
                  feed.userName === userName ? "delete" : "nodelete"
                }
                deleteTweet={deleteTweet}
                isStandAlone={true}
                getReplies={getReplies}
                deleteReply={deleteReply}
                createReply={createReply}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default getConnectedComponent(Feeds);
