import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Sidebar from "./_common/Sidebar";
import Feeds from "./_common/Feeds";
import { Container } from "@mui/material";
import { TweetServices } from "../services/TweetServices";
import TweetBox from "./_common/TweetBox";
import TweetAppBar from "./_common/AppBar";
import { sortTweets } from "../util/TemplateFormatter";

import Spinner from "./Spinner";
export default function Home() {
  const history = useHistory();

  const [tweetsList, setTweetsList] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState({
    userName: localStorage.getItem("userName"),
    displayName: localStorage.getItem("displayName"),
  });
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isloggedIn, setIsLoggedIn] = useState(null);

  const logOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
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
    setIsLoggedIn(false);
    const response = await TweetServices.deleteTweetAPI(tweetId, {
      headers: { Authorization: token },
    });
    if (!response.error) {
      await getAllTweets();
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    getAllTweets();
  }, [token]);

  return (
    <div className="home-page feeds-center-container">
      {isloggedIn ? (
        <Container disableGutters maxWidth={false}>
          <div className="row">
            <div className="col-2 feeds-left-part">
              <Sidebar></Sidebar>
            </div>
            <div className="col feeds-center-part">
              <div className="row app-bar">
                <TweetAppBar
                  displayName={loggedInUser?.displayName}
                ></TweetAppBar>
              </div>
              <div className="row tweet-box">
                <div className="col-12">
                  <TweetBox createTweet={createTweet} />
                </div>
              </div>
              <div className="row tweets">
                {tweetsList.length > 0 ? (
                  <Feeds
                    feeds={tweetsList}
                    user={loggedInUser}
                    deleteTweet={deleteTweet}
                  ></Feeds>
                ) : (
                  <div>No Tweets found</div>
                )}
              </div>
            </div>
            <div className="col-2 feeds-right-part">
              <Sidebar></Sidebar>
            </div>
          </div>
        </Container>
      ) : (
        <Container>
          <Spinner></Spinner>
        </Container>
      )}
    </div>
  );
}
