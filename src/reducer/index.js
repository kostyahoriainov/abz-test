import { combineReducers } from 'redux';
import headerUser from './headerUser';
import users from './users';
import positions from './positions'

const reducer = combineReducers({
    headerUser,
    users,
    positions
})

export default reducer