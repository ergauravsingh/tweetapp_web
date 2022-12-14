import { createRequest, HTTP_METHODS } from "./ServiceInvoker";
import { BASE_URL } from "../environmentConstants";

const baseUrl = BASE_URL;

export const TweetServices = {
  saveUserAPI(user) {
    if (user) {
      return createRequest(HTTP_METHODS.POST, baseUrl + "/register", user);
    } else {
      console.error("Save User Api Failed");
      return { error: "[saveUserAPI] FAILED" };
    }
  },

  loginAPI(user) {
    if (user) {
      return createRequest(HTTP_METHODS.POST, baseUrl + "/login", user);
    } else {
      console.error("Login Failed");
      return { error: "[loginAPI] FAILED" };
    }
  },

  getAllTweetsAPI(config) {
    return createRequest(HTTP_METHODS.GET, baseUrl + "/all", null, config);
  },

  createTweetAPI(tweet, config) {
    if (tweet) {
      return createRequest(
        HTTP_METHODS.POST,
        baseUrl + "/create",
        tweet,
        config
      );
    } else {
      console.error("Create Tweet Api Failed");
      return { error: "[createTweetAPI] FAILED" };
    }
  },

  deleteTweetAPI(id, config) {
    return createRequest(HTTP_METHODS.DELETE, baseUrl + "/" + id, null, config);
  },

  getRepliesAPI(tweetId, config) {
    return createRequest(
      HTTP_METHODS.GET,
      baseUrl + "/" + tweetId + "/reply/all",
      null,
      config
    );
  },

  deleteReplyAPI(replyId, config) {
    return createRequest(
      HTTP_METHODS.DELETE,
      baseUrl + "/reply/" + replyId,
      null,
      config
    );
  },

  createReplyAPI(reply, config) {
    if (reply) {
      return createRequest(
        HTTP_METHODS.POST,
        baseUrl + "/reply",
        reply,
        config
      );
    } else {
      console.error("Create Reply Api Failed");
      return { error: "[createReplyAPI] FAILED" };
    }
  },

  changePasswordAPI(user, config) {
    if (user) {
      return createRequest(
        HTTP_METHODS.POST,
        baseUrl + "/change_password",
        user,
        config
      );
    } else {
      console.error("Change Password Api Failed");
      return { error: "[changePasswordAPI] FAILED" };
    }
  },
};
