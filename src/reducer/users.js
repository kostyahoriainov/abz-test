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
        case C.FETCH_INITIAL_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                getToken: action.getToken,
                token: action.token
            }
        case C.FETCH_INITIAL_USERS_SUCCESS:
            return {
                ...state,
                users: payload.users,
                isLoading: false,
                links: payload.links
            }
        case C.FETCH_INITIAL_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case C.FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case C.FETCH_USERS_SUCCESS:
            return {
                ...state, 
                users: [
                    ...state.users,
                    ...payload.users
                ],
                isLoading: false,
                links: payload.links
            }
        case C.FETCH_USERS_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state
    }
}