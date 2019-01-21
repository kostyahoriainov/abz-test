import { connect } from 'react-redux';
import { fetchPositions, postUser, fetchInitialUsers } from '../action';
import SignUp from '../components/sign-up';

const SignUpContainer = connect(
    ({positions}) => ({positions: positions.positions}),
    { fetchPositions, postUser, fetchInitialUsers }
)(SignUp)

export default SignUpContainer