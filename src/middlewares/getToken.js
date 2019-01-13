import axios from "axios";

const getToken = store => next => action => {

    if (!action.getToken) {
        console.log(action)
        return next(action)
    }
    return axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        .then(({data}) => next({
            ...action,
            token: data.token,
            getToken: false
        }))
}

export default getToken