import React from 'react'

const Footer = () => 

    <section className="footer">
        <div className="container">
            <div className="footer__block">
                <div className="row align-items-center justify-content-between footer__top">
                    <div className="col-md-auto  col-xs-12">
                        <div className="footer__top-img">
                            <img src="./img/logo-f.png" alt="logo" />
                        </div>
                    </div>

                    <div className="col-md-auto  col-xs-12">
                        <ul className="footer__top-nav">
                            <li>About me</li>
                            <li>Relationships</li>
                            <li>Requirement</li>
                            <li>Users</li>
                            <li>Sign Up</li>
                        </ul>
                    </div>
                </div>

                <hr />
                <div className="row footer__main">
                    <div className="col-md-4">
                        <div className="footer__main-contacts">
                            <div className="footer__main-img">
                                <img src="./img/icons/mail.svg" alt="mail" />
                            </div>
                            <span>
                                work.of.future@gmail.com
                            </span>
                        </div>

                        <div className="footer__main-contacts">
                            <div className="footer__main-img">
                                <img src="./img/icons/phone.svg" alt="mail" />
                            </div>
                            <span>
                                +38 (050) 789 24 98
                            </span>
                        </div>

                        <div className="footer__main-contacts">
                            <div className="footer__main-img">
                                <img src="./img/icons/cellphone.svg" alt="mail" />
                            </div>
                            <span>
                                +38 (095) 556 08 45
                            </span>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <ul className="footer__main-list">
                            <li>News</li>
                            <li>Blog</li>
                            <li>Partners</li>
                            <li>Shop</li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <ul className="footer__main-list">
                            <li>Overview</li>
                            <li>Design</li>
                            <li>Code</li>
                            <li>Collaborate</li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <ul className="footer__main-list">
                            <li>Tutorials</li>
                            <li>Resources</li>
                            <li>Guides</li>
                            <li>Examples</li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <ul className="footer__main-list">
                            <li>FAQ</li>
                            <li>Terms</li>
                            <li>Conditions</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>

                <div className="row align-items-center justify-content-between footer__bot">
                    <div className="col-md-auto">
                        <div className="footer__bot-copyright">
                            <p>
                                &#169; abz.agency specially for the test task
                            </p>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <ul className="footer__bot-socials">
                            <li>
                                <img src="./img/icons/facebook.svg" alt="facebook" />
                            </li>
                            <li>
                                <img src="./img/icons/linkedin.svg" alt="linkedin" />
                            </li>
                            <li>
                                <img src="./img/icons/instagram.svg" alt="instagram" />
                            </li>
                            <li>
                                <img src="./img/icons/twitter.svg" alt="twitter" />
                            </li>
                            <li>
                                <img src="./img/icons/pinterest.svg" alt="pinterest" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>


export default Footer