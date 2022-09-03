import { TweetAxios } from "./AxiosConfig";

export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

const _GETRequest = async (url, config) => {
  const response = await TweetAxios.get(url, config);
  return response.data;
};

const _POSTRequest = async (url, payload, config) => {
  const response = await TweetAxios.post(url, payload, config);
  return response.data;
};

const _PUTRequest = async (url, payload, config) => {
  const response = await TweetAxios.put(url, payload, config);
  return response.data;
};

const _PATCHRequest = async (url, payload, config) => {
  const response = await TweetAxios.patch(url, payload, config);
  return response.data;
};

const _DELETERequest = async (url, config) => {
  const response = await TweetAxios.delete(url, config);
  return response.data;
};

export const createRequest = async (method, url, payload, config) => {
  try {
    switch (method) {
      case HTTP_METHODS.GET:
        return await _GETRequest(url, config);
      case HTTP_METHODS.POST:
        return await _POSTRequest(url, payload, config);
      case HTTP_METHODS.PUT:
        return await _PUTRequest(url, payload, config);
      case HTTP_METHODS.PATCH:
        return await _PATCHRequest(url, payload, config);
      case HTTP_METHODS.DELETE:
        return await _DELETERequest(url, config);

      default:
        console.error(`[${method}] Method not implemented`);
        return null;
    }
  } catch (error) {
    console.error(`[${method}] FAILED request - ${url}`, error);
    return { error };
  }
};
