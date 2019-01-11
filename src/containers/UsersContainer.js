import { connect } from 'react-redux';
import { fetchUsers, loadMoreUsers } from '../action';
import User from '../components/users';

const UsersContainer = connect(
    ({users}) => ({users}),
    { fetchUsers, loadMoreUsers }
)(User)

export default UsersContainer