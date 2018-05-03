import { ADD_DOWNLOAD } from "../constants/action-types";

const initialState = {
    downloads: [],
    map: [],
    network: {
        download: [0, 20, 99],
        upload: [0, 30, 49]
    },
    isFetching: false
}

const downloadReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_DOWNLOAD:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default downloadReducer;