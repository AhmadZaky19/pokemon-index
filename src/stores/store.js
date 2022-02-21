import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from "./reducer/pokemon";

export default createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware, logger)
);
