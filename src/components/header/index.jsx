import React from 'react'
import PropTypes from 'prop-types';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderUser from './HeaderUser';

class Header extends  React.Component {

    componentDidMount()  {
        this.props.fetchHeaderUser()
    }

    render() {
        const { headerUser } = this.props;
        return (
            <section className="header">
                <div className="container">
                    <div className="header__block row align-items-center">

                        <HeaderLogo />

                        <HeaderNav />
                        
                        <HeaderUser 
                                toggleMenu={this.props.toggleMenu}
                                user={headerUser.user}/>
                    </div>


                </div>

            </section>
        )
    }
} 
   
Header.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    fetchHeaderUser: PropTypes.func.isRequired,
    headerUser: PropTypes.object.isRequired
}



export default Header