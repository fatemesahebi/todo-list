import {persistedReducer} from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger],
});

export default store;