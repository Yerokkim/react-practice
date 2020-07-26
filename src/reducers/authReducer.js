import {
  GET_USER,
  SET_LOADING,
  SET_ERROR,
  GET_ALL_USER,
  SET_ISAUTH,
} from "../actions/types";

const initalState = {
  isAuth: false,
  loading: false,
  token: localStorage.getItem("token"),
  users: [{ email: "yerok@yerok.com", password: "1234k" }],
  allUser: [],
  isError: "",
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_ISAUTH: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        isError: action.payload,
      };
    }
    case GET_ALL_USER: {
      return {
        ...state,
        allUser: action.payload,
      };
    }
    default:
      return state;
  }
}
