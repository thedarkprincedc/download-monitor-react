import { ADD_DOWNLOAD } from "../constants/action-types";
const initialState = {
    downloads: {},
    isFetching: false
}
const downloadReducer = (state = [], action) => {
    switch(action.type){
        case ADD_DOWNLOAD:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default downloadReducer;