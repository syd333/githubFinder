import React, { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // const getUser = async (login) => {
  //   setLoading();

  //   const res = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   if (res.status === 404) {
  //     window.location = "/notfound";
  //   } else {
  //     const data = await res.json();

  //     dispatch({
  //       type: "GET_USER",
  //       payload: data,
  //     });
  //   }
  // };

  // get user repos
    // const getUserRepos = async (login) => {
    //   setLoading();


    //   const res = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
    //     headers: {
    //       Authorization: `token ${GITHUB_TOKEN}`,
    //     },
    //   });
    //   const data = await res.json();

    //   dispatch({
    //     type: "GET_USER_AND_REPOS",
    //     payload: data,
    //   });
    // };

  //set loading
  // const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        // user: state.user,
        // repos: state.repos,
        // loading: state.loading,
        ...state,
        dispatch,
        // searchUsers,
        // clearUsers,
        // getUser,
        // getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
