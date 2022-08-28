import axios from "axios";
import React from "react";
import { createRequest, HTTP_METHODS } from "./ServiceInvoker";

const baseUrl = "http://localhost:9085/api/v1.0/tweets";

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
};
