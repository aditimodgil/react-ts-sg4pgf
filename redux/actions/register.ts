import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from "./types";
import { auth } from "../../firebase";

export const registerStart = () => {
  return {
    type: REGISTER_START
  };
};

export const registerSuccess = (token, userId) => {
  return {
    type: REGISTER_SUCCESS,
    idToken: token,
    userId
  };
};

export const registerFail = error => {
  return {
    type: REGISTER_FAIL,
    error
  };
};

export const register = (email, password) => {
  return dispatch => {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        dispatch(registerSuccess(res.user.refreshToken, res.user.uid));
      })
      .catch(err => {
        console.log(err);
        dispatch(registerFail(err.message));
      });
  };
};
