import React from 'react';
import PropTypes from 'prop-types';

const HeaderUser = ({user, toggleMenu}) => 
    <div className="col-xs-auto">
        <div className="header__user">

            <div className="header__user-info">
                <p>{user.name}</p>
                <span>{user.email}</span>
            </div>

            <div className="header__user-img">
                <img src={user.photo} alt="user-superstar" />
            </div>

            <div className="header__user-logout">
                <img src="./img/icons/sign-out.svg" alt="sign-out" />
            </div>

        </div>

        <div className="header__icon">
            <img src="/img/icons/line-menu.svg" alt="line-menu" onClick={() => toggleMenu()} />
        </div>

    </div>

HeaderUser.propTypes = {
    user: PropTypes.object.isRequired,
    toggleMenu: PropTypes.func.isRequired
}


export default HeaderUser