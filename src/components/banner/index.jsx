import React from 'react';
import { Link } from 'react-scroll'

const Banner = () => 

    <section className="banner" id="banner">
        <div className="container no-pad">
            <div className="banner__block row align-items-center">
                <div className="col-lg-6 col-md-7">
                    <div className="banner__header">
                        <h2>
                            Test assignment for Frontend Developer position
                        </h2>
                    </div>

                    <div className="banner__text">
                        <p>
                            We kindly remind you that your test assignment should
                            be submitted as a link to github/bitbucket repository.
                            Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!
                        </p>
                    </div>

                    <div className="banner__button btn-primary">
                        <button>
                            <Link to="signUp" smooth duration={500}>
                                Sign Up
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>


export default Banner