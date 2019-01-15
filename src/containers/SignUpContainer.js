import { connect } from 'react-redux';
import { fetchPositions, postUser } from '../action';
import SignUp from '../components/sign-up';

const SignUpContainer = connect(
    ({positions}) => ({positions: positions.positions}),
    { fetchPositions, postUser }
)(SignUp)

export default SignUpContainer