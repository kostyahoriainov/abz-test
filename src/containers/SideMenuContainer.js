import { connect } from 'react-redux';
import SideMenu from '../components/sideMenu';

const HeaderContainer = connect(
    ({headerUser}) => ({headerUser}),
    null
)(SideMenu)

export default HeaderContainer