//import { ADD_DOWNLOAD } from "../constants/action-types";

const initialState = {
    list: [],
    isFetching: false
}

const mapReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_MAP":
            return Object.assign({}, {
                list: [
                    ...action.payload, {
                        name: action.payload.name,
                        data: action.payload.data || {}
                    }
                ]
            })
            //return [...state, action.payload];
        default:
            return state;
    }
}

export default mapReducer;