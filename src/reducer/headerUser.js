import C from '../constants';

const defaultState = {
    user: {},
    error: null,
    loading: false
}

export default (state = defaultState, action) => {
    const { type, payload } = action
    switch(type) {
        case C.FETCH_HEADER_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case C.FETCH_HEADER_USER_SUCCESS:
            return {
                ...state,
                user: payload,
                loading: false
            }
        case C.FETCH_HEADER_USER_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}