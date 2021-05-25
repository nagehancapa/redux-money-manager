import { combineReducers, createStore } from "redux";
import balanceReducer from "./balance/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const store = createStore(
  combineReducers({ balance: balanceReducer }),
  enhancer
);

export default store;
