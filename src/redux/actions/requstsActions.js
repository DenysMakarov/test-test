export const GET_REQUESTS = 'GET_REQUESTS';

export const getAllRequestsAction = (requests) => {
    return {
        type: GET_REQUESTS,
        payload: requests
    }
}

/*
* This action just mock (from jsonplaceholder) and in a future will be adopted for real request from db
* */
export const getAllRequests = () => (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        .then(data => dispatch(getAllRequestsAction(data)))
}