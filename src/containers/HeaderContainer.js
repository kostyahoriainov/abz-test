import { connect } from 'react-redux';
import { fetchHeaderUser } from '../action'
import Header from '../components/header';

const HeaderContainer = connect(
    ({headerUser}) => ({headerUser}),
    { fetchHeaderUser }
)(Header)

export default HeaderContainer