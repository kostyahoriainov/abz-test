import C from '../constants';

const defaultState = {
    users: [],
    error: null,
    isLoading: false,
    links: false
}

export default (state = defaultState, action) => {
    const { type, payload } = action
    switch(type) {
        case C.FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case C.FETCH_USERS_SUCCESS:
            return {
                ...state, 
                users: payload.users,
                isLoading: false,
                links: payload.links
            }
        case C.FETCH_USERS_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        case C.LOAD_MORE_USERS_SUCCESS: 
            return {
                ...state,
                users: [
                    ...state.users,
                    ...payload.users
                ],
                links: payload.links
            }
        case C.LOAD_MORE_USERS_FAILURE:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}