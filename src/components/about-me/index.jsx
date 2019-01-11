import React from 'react';
import { Link } from 'react-scroll';

const AboutMe = () => 

    <section className="about-me" id='aboutMe'>
        <div className="container">
            <div className="about-me__block">

                <div className="row align-items-center">
                    <div className="col">

                        <div className="about-me__header title">
                            <h3>
                                Let's get ac quainted
                            </h3>
                        </div>

                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="about-me__img">
                            <img src="./img/man-mobile.svg" alt="man-mobile" />
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="about-me__title">
                            <p>
                                I am cool frontend developer
                            </p>
                        </div>

                        <div className="about-me__text">
                            <p>
                                When real users have a slow experience on mobile,
                                they're much less likely to find what they are looking for or purchase from you in the future.
                                For many sites this equates to a huge missed opportunity,
                                especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.
                            </p>
                            <p>
                                Last week, Google Search and Ads teams announced two new speed initiatives
                                to help improve user-experience on the web.
                            </p>
                        </div>

                        <div className="about-me__button btn-text">
                            <span>
                                <Link to="signUp" smooth duration={500}>
                                    Sign Up
                                </Link>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>


export default AboutMe