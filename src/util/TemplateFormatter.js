export const formatAMPM = (dateString) => {
  const date = new Date(dateString);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export const formatDayMonth = (dateString) => {
  const date = new Date(dateString);
  let strDate = date.toDateString();
  return strDate.substring(4, strDate.length);
};

export const sortTweets = (tweets) => {
  const sorted = tweets.sort(function (a, b) {
    return new Date(b.tweet_updated_at) - new Date(a.tweet_updated_at);
  });
  return sorted;
};
