//import { ADD_DOWNLOAD } from "../constants/action-types";

const initialState = {
    download: [],
    upload: [],
    isFetching: false
}

const networkReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_NETWORK":
            return Object.assign({}, state, {
                download: [
                    ...state.download, action.payload.download,
                    ...state.upload, action.payload.upload
                ]
            })
            //return [...state, action.payload];
        default:
            return state;
    }
}

export default networkReducer;