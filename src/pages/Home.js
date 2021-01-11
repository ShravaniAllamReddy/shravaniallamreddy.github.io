
import React from "react";
import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom"

function Hero() {

    return (
        <section id="hero">
            <Navbar />
            <div className="text-center hero-text-container">
                <div className="hero-text-container-inner">
                    <h2 className="hero-title">Shravani Allam Reddy</h2>
                    <p className="hero-subtitle"><span className="text-slider-items">Web Developer,Frontend Developer,Backend
            Developer</span><strong className="text-slider"></strong>
                    </p>
                </div>
                <div className="intro-next">
                    <a href="#introduction" className="text-center down-arrow-link">
                        <i className="fas fa-3x fa-caret-down down-arrow"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;