import React from 'react';
import { Link } from 'react-scroll'

const SideMenu = ({toggleMenu, headerUser}) => 

    <div className="navigation-menu">
        <div className="navigation-menu__content">
            <div className="navigation-menu__user">
                <img src={headerUser.user.photo} alt="user-superstar-2x" />
                <p>
                    {headerUser.user.name}
                </p>
                <span>
                    {headerUser.user.email}
                </span>
            </div>

            <hr />
            <ul className="navigation-menu__list">
            <li>
                <Link 
                    to="aboutMe"
                    smooth
                    duration={500}
                    onClick={() => toggleMenu()}
                >
                    About Me
                </Link>
            </li>
            <li>
                <Link 
                    to="relationships"
                    smooth
                    duration={400}
                    onClick={() => toggleMenu()}
                >
                    Relationships
                </Link>
            </li>
            <li>
                <Link 
                    to="requrements"
                    smooth
                    duration={400}
                    onClick={() => toggleMenu()}
                >
                    Requirement
                </Link>
            </li>
            <li>
                <Link 
                    to="users"
                    smooth
                    duration={400}
                    onClick={() => toggleMenu()}
                >
                    Users
                </Link>
            </li>
            <li>
                <Link 
                    to="signUp"
                    smooth
                    duration={400}
                    onClick={() => toggleMenu()}
                >
                    Sign Up
                </Link>
            </li>
            <li>
                <Link
                    to="banner"
                    smooth
                    duration={400}
                    onClick={() => toggleMenu()}
                >
                    Sign Out
                </Link>
            </li>
            </ul>
        </div>
    </div>


export default SideMenu