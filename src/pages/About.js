
import React from "react";
// import { Link } from 'react-router-dom';
import dp from "../assets/img/dp.png";
import "../assets/css/style.css"


function About() {
    return (

        <section id="introduction" className="section-pad-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={dp} alt="description" className="img-fluid intro-img" />
                    </div>
                    <div className="col-lg-6">
                        <div className="intro-text-container">
                            <h2 className="primary mb-4 section-title">About Me</h2>
                            <p className="intro-text">
                                I have been working in the IT Industry for 4 years in developing and supporting applications with
                                the help of Shell,Perl scripts for automating daily activities which we do in production support.
            </p>
                            <p className="intro-text">
                                I am enthusiastic towards thinking creatively at my daily work. I have found that learning
                                web-development is challenging and encourages me to think out of the box in required
                                scenarios.Especially when working on a front end scripting enables me to see what I visualize in my
                                mind, it is kind of amalgamation of technology and art.These kind of thoughts and ideas have
                                nurtured my inclination towards being a full stack developer.So, here I am at the Boot Camp at
                                University of Arizona, building a career on my thoughts and ideas to be a Full Stack developer.

            </p>
                            <p className="intro-text">
                                <a href="https://drive.google.com/file/d/1sXLvwZOsun3Aw9zuaVBPZ3hkfa6uyioD/view?usp=sharing"
                                    target="_blank" rel="noreferrer">Click Here to view my Resume</a>
                            </p>
                            <div>
                                <a href="#work" className="intro-text btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;