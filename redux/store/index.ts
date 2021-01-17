import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import loginReducer from "../reducers/loginReducer";
import registerReducer from "../reducers/registerReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
