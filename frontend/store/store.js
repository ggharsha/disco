import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";


const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;