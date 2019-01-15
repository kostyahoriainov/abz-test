import React from 'react'

const Relationships = () =>

    <section className="relationships" id="relationships">
        <div className="container">
            <div className="relationships__block">
                <div className="row">
                    <div className="col">
                        <div className="relationships__header title">
                            <h3>
                                About my relationships with
                                web-development
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="relationships__img">
                            <img src="./img/html.svg" alt="html" />
                        </div>

                        <div className="relationships__info">
                            <div className="relationships__title">
                                <p>
                                    I'm in love with HTML
                                </p>
                            </div>

                            <div className="relationships__text">
                                <p>
                                    Hypertext Markup Language (HTML) is the standard
                                    markup language for creating web pages and web applications.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="relationships__img">
                            <img src="./img/css.svg" alt="css" />
                        </div>

                        <div className="relationships__info">
                            <div className="relationships__title">
                                <p>
                                    CSS is my best friend
                                </p>
                            </div>

                            <div className="relationships__text">
                                <p>
                                    Cascading Style Sheets (CSS) is a  style sheet language used for describing the presentation
                                    of a document written in a markup language
                                    like HTML.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="relationships__img">
                            <img src="./img/javascript.svg" alt="javascript" />
                        </div>

                        <div className="relationships__info">
                            <div className="relationships__title">
                                <p>
                                    JavaScript is my passion
                                </p>
                            </div>

                            <div className="relationships__text">
                                <p>
                                    JavaScript is a high-level, interpreted programming language.
                                    It is a language which is also characterized as dynamic,
                                    weakly typed, prototype-based and multi-paradigm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


export default Relationships