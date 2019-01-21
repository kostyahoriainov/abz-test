import { connect } from 'react-redux';
import { fetchUsers, fetchInitialUsers } from '../action';
import User from '../components/users';

const UsersContainer = connect(
    ({users}) => ({users}),
    { fetchUsers, fetchInitialUsers }
)(User)

export default UsersContainer