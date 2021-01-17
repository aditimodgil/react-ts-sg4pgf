import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../actions/types";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
      };
    case REGISTER_FAIL:
      return {
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
