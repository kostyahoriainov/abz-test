import { connect } from 'react-redux';
import { fetchPositions } from '../action';
import SignUp from '../components/sign-up';

const SignUpContainer = connect(
    ({positions}) => ({positions: positions.positions}),
    { fetchPositions }
)(SignUp)

export default SignUpContainer