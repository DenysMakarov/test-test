import {GET_REQUESTS} from "../actions/requstsActions";


/*
*   This action just mock and a future will be adopted for real request from db
* */
const initiallyState = {
    requests: []
}

export const requestsReducer = (state = initiallyState, action) => {
        switch (action.type){
            case GET_REQUESTS:
                return {...state, requests: action.payload}
            default:
                return state
        }
}