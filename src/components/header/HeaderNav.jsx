import React from 'react';
import {Link} from 'react-scroll'

const HeaderNav = () => 
    <div className="col">
        <ul className="header__nav">
            <li>
                <Link 
                    to="aboutMe"
                    smooth
                    duration={500}
                >
                    About Me
                </Link>
            </li>
            <li>
                <Link 
                    to="relationships"
                    smooth
                    duration={400}
                >
                    Relationships
                </Link>
            </li>
            <li>
                <Link 
                    to="requrements"
                    smooth
                    duration={400}
                >
                    Requirement
                </Link>
            </li>
            <li>
                <Link 
                    to="users"
                    smooth
                    duration={400}
                >
                    Users
                </Link>
            </li>
            <li>
                <Link 
                    to="signUp"
                    smooth
                    duration={400}
                >
                    Sign Up
                </Link>
            </li>
        </ul>
    </div>

export default HeaderNav