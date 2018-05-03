import {combineReducers} from "redux";
import downloadReducer from "./downloadReducer";

export default combineReducers(
    { 
        root: downloadReducer 
    }
);