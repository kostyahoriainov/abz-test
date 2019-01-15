import { connect } from 'react-redux';
import { fetchUsers } from '../action';
import User from '../components/users';

const UsersContainer = connect(
    ({users}) => ({users}),
    { fetchUsers }
)(User)

export default UsersContainer