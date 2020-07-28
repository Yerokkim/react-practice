import { SET_LOADING, SET_ERROR, GET_ALL_USER, SET_ISAUTH } from "./types";
import axios from "axios";

// import jsonPlaceholder from "../apis/jsonPlaceholder";

// export const fetchPosts = () => {
//   const res = jsonPlaceholder.get("/posts");

//   return {
//     type: "FETCH_POSTS",
//     payload: res.data,
//   };
// };

export const getUser = (user) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .post("https://reqres.in/api/login", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: SET_ISAUTH, payload: true });
      dispatch({ type: SET_LOADING, payload: false });
    })
    .catch((e) => {
      dispatch({ type: SET_ISAUTH, payload: false });
      dispatch({ type: SET_ERROR, payload: true });
    });

  return {
    type: "GET_USER",
    payload: user,
  };
};

export const getAllUsers = () => (dispatch) => {
  axios
    .get("https://reqres.in/api/users?page=2")
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_ALL_USER, payload: res.data.data });
    })
    .catch((e) => console.log(e));
};
