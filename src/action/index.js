/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import C from '../constants'

export function fetchHeaderUser () {
    return function (dispatch, getState) {
        dispatch({
            type: C.FETCH_HEADER_USER_REQUEST
        })
        return axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users/1')
            .then(({data}) => dispatch({
                type: C.FETCH_HEADER_USER_SUCCESS,
                payload:  data.user
            }))
            .catch(err => dispatch({
                type: C.FETCH_HEADER_USER_FAILURE,
                payload: err.message
            }))
    }
}

export function fetchInitialUsers() {
    return function(dispatch, getState) {
        dispatch({
            type: C.FETCH_INITIAL_USERS_REQUEST,
            getToken: true
        })
        return axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
            .then(({data}) => dispatch({
                type: C.FETCH_INITIAL_USERS_SUCCESS,
                payload: data
            }))
            .catch(err => dispatch({
                type: C.FETCH_INITIAL_USERS_FAILURE,
                payload: err.message
            }))
    }
}

export function fetchUsers() {
    return function(dispatch, getState) {
        dispatch({
            type: C.FETCH_USERS_REQUEST,

        })
        return axios.get(getState().users.links.next_url)
            .then(({data}) => dispatch({
                type: C.FETCH_USERS_SUCCESS,
                payload: data
            }))
            .catch(err => dispatch({
                type: C.FETCH_USERS_FAILURE,
                payload: err.message
            }))
    }
}

export function fetchPositions () {
    return function (dispatch, getState) {
        dispatch({
            type: C.FETCH_POSITIONS_REQUEST
        })
        return axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
            .then(({data}) => dispatch({
                type: C.FETCH_POSITIONS_SUCCESS,
                payload: data
            }))
            .catch(err => dispatch({
                type: C.FETCH_USERS_FAILURE,
                payload: err.message
            }))
    }
}

export function postUser (user) {
    return function (dispatch, getState) {
        dispatch({
            type: C.POST_USER_REQUEST
        })
        const token = getState().users.token
        axios.defaults.headers.common["Token"] = token;
        return axios.post('https://frontend-test-assignment-api.abz.agency/api/v1/users', user)
            .then(response => {
                fetchInitialUsers();
                console.log(response)
            })
            .catch(err => console.log(err))
    }
}