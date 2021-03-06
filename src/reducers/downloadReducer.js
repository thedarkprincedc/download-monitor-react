import { ADD_DOWNLOAD } from "../constants/action-types";

const initialState = {
    list: [],
    isFetching: false
}

const downloadReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_DOWNLOAD:
            return Object.assign({}, {
                list: [
                    ...action.payload, {
                        id: action.payload.id,
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

export default downloadReducer;