import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { getConnectedComponent } from "../store";
import LeftSideBar from "./_common/LeftSideBar";
import RightSideBar from "./_common/RightSideBar";
import Feeds from "./_common/Feeds";
import { Container } from "@mui/material";
import { TweetServices } from "../services/TweetServices";
import TweetBox from "./_common/TweetBox";
import TweetAppBar from "./_common/AppBar";
import { sortTweets } from "../util/TemplateFormatter";
import Spinner from "./Spinner";

const Home = ({
  tweetsList,
  setTweetsList,
  setUserName,
  setDisplayName,
  resetStore,
}) => {
  const history = useHistory();

  const [token] = useState(localStorage.getItem("token"));
  const [isloggedIn, setIsLoggedIn] = useState(null);

  setUserName(localStorage.getItem("userName"));
  setDisplayName(localStorage.getItem("displayName"));

  const logOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    resetStore();
    history.push("/");
  };

  const getAllTweets = async () => {
    const response = await TweetServices.getAllTweetsAPI({
      headers: { Authorization: token },
    });
    if (!response.error) {
      let sortedTweets = sortTweets(response.data);
      setTweetsList(sortedTweets);
      setIsLoggedIn(true);
    } else {
      logOut();
    }
  };

  const createTweet = async (tweet) => {
    setIsLoggedIn(false);
    const response = await TweetServices.createTweetAPI(tweet, {
      headers: { Authorization: token },
    });
    if (!response.error) {
      await getAllTweets();
    } else {
      console.log(response.error);
    }
    setIsLoggedIn(true);
  };

  const deleteTweet = async (tweetId) => {
    const response = await TweetServices.deleteTweetAPI(tweetId, {
      headers: { Authorization: token },
    });
    if (!response.error) {
      await getAllTweets();
    }
  };

  const createReply = async (reply) => {
    const response = await TweetServices.createReplyAPI(reply, {
      headers: { Authorization: token },
    });
    if (!response.error) {
      return true;
    } else {
      return false;
    }
  };

  const getReplies = async (tweetId) => {
    const response = await TweetServices.getRepliesAPI(tweetId, {
      headers: { Authorization: token },
    });
    if (!response.error) {
      return response.data;
    } else {
      console.log("Get replies api failed");
      return null;
    }
  };

  const deleteReply = async (replyId) => {
    const response = await TweetServices.deleteReplyAPI(replyId, {
      headers: { Authorization: token },
    });
    if (!response.error) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    getAllTweets();
  }, [token]);

  return (
    <div
      className="home-page feeds-center-container"
      style={{ marginLeft: "4%" }}
    >
      {isloggedIn ? (
        <div className="row row-sm-12 home-page">
          <div className="col col-sm-2 feeds-left-part">
            <LeftSideBar></LeftSideBar>
          </div>
          <div className="col col-sm-7 feeds-center-part">
            <div className="row app-bar">
              <TweetAppBar logOut={logOut}></TweetAppBar>
            </div>
            <div className="row tweet-box">
              <div className="col-12">
                <TweetBox createTweet={createTweet} />
              </div>
            </div>
            <div className="row tweets">
              <div className="col-12" style={{ paddingLeft: "0px" }}>
                {tweetsList.length > 0 ? (
                  <Feeds
                    deleteTweet={deleteTweet}
                    getReplies={getReplies}
                    deleteReply={deleteReply}
                    createReply={createReply}
                  ></Feeds>
                ) : (
                  <div>No Tweets found</div>
                )}
              </div>
            </div>
          </div>
          <div className="col feeds-right-part">
            <RightSideBar></RightSideBar>
          </div>
        </div>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
};

export default getConnectedComponent(Home);
