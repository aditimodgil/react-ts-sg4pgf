import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
import { auth } from "../../firebase";

export const loginStart = () => {
  return {
    type: LOGIN_START
  };
};

export const loginSuccess = (token, userId) => {
  return {
    type: LOGIN_SUCCESS,
    idToken: token,
    userId
  };
};

export const loginFail = error => {
  return {
    type: LOGIN_FAIL,
    error
  };
};

export const login = (email, password) => {
  return dispatch => {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        dispatch(loginSuccess(res.user.refreshToken, res.user.uid));
      })
      .catch(err => {
        console.log(err.message);
        dispatch(loginFail(err.message));
      });
  };
};
