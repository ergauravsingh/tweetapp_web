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

export const getTimeDifferenceFromNow = (dateString) => {
  let d1 = new Date(dateString);
  let d2 = new Date();

  let diffInMilliSeconds = (d2.getTime() - d1.getTime()) / 1000;
  console.log(diffInMilliSeconds);

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;
  console.log("calculated days", days);

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;
  console.log("calculated hours", hours);

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;
  console.log("minutes", minutes);

  let difference = "";
  if (days > 0) {
    difference += `${days}d `;
    return difference;
  }

  if (hours > 0) {
    difference += `${hours}h `;
  }

  difference += `${minutes}m`;

  console.log(difference);
  return difference;
};
