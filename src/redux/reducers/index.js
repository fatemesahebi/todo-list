import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import todoReducer from "./ToDo"


const persistConfig = {
    key: "root",
    storage,
};

export const allReducers = {

    todo: todoReducer,

}

const reducer = combineReducers(allReducers);

export const persistedReducer = persistReducer(persistConfig, reducer);