import axios from "axios";

const baseURL = "http://localhost:9085/api/v1.0/tweets";

const TweetAxios = axios.create({ baseURL: baseURL });

const addHeaders = (newHeader) => {
  if (!TweetAxios.defaults.headers) TweetAxios.defaults.headers = {};
  TweetAxios.defaults.headers = {
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
    CT: new Date().getTime(),
    ...TweetAxios.defaults.headers,
    ...newHeader,
  };
};

const responseInterceptor = (response) => {
  if (response.headers["access=token"]) {
    const accessToken = response.headers["access-token"];
    // TODO: set access token in store or localstorage
    const token = `Bearer ${accessToken}`;
    addHeaders({ Authorization: token });
  }
  return response;
};
const responseErrorInterceptor = (error) => {
  if (error?.response?.status === 403) {
    console.error("Not authorised, Redirecting to login...");
    // TODO: redirect to login
  }
  return Promise.reject(error);
};

TweetAxios.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
);

export { TweetAxios, addHeaders };
