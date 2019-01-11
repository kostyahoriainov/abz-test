import C from '../constants';

const defaultState = {
    positions: [],
    isLoading: false,
    error: null
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch(type) {
        case C.FETCH_POSITIONS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case C.FETCH_POSITIONS_SUCCESS:
            return {
                ...state,
                positions: payload.positions,
                isLoading: false
            }
        case C.FETCH_HEADER_USER_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state
    }
}