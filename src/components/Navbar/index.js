
import React from "react";

function Navbar() {

    return (

        <div id="navbar">
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <div>
                        <a className="navbar-brand js-scroll" href="#hero">Shravani Allam Reddy</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars navbar-toggler-icon"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#introduction">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#work">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#contact-section">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;