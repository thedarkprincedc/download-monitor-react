import {combineReducers} from "redux";
import downloadReducer from "./downloadReducer";
import networkReducer from "./networkReducer";

export default combineReducers(
    { 
        downloads: downloadReducer,
        network: networkReducer
    }
);