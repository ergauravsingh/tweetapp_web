import { connect } from "react-redux";
import { createStore } from "redux";

// REDUX: Initial State
const initial_state = {
  tweetsList: null,
  userName: null,
  displayName: null,
};

// REDUX: Reducer
const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "SET_TWEETSLIST":
      return { ...state, tweetsList: action.payload };
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    case "SET_DISPLAYNAME":
      return { ...state, displayName: action.payload };
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "RESET_STORE":
      return {
        ...state,
        tweetsList: null,
        userName: null,
        displayName: null,
      };
    default:
      return state;
  }
};

// REDUX: Instance of store
export const useStore = () => {
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

const mapStateToProps = (state) => {
  return {
    tweetsList: state.tweetsList,
    userName: state.userName,
    displayName: state.displayName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTweetsList: (tweetsList) => {
      dispatch({ type: "SET_TWEETSLIST", payload: tweetsList });
    },
    setUserName: (userName) => {
      dispatch({ type: "SET_USERNAME", payload: userName });
    },
    setDisplayName: (displayName) => {
      dispatch({ type: "SET_DISPLAYNAME", payload: displayName });
    },
    resetStore: () => {
      dispatch({ type: "RESET_STORE" });
    },
  };
};

export const getConnectedComponent = (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component);
};
