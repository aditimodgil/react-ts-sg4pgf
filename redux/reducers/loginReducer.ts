import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
      };
    case LOGIN_FAIL:
      return {
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
