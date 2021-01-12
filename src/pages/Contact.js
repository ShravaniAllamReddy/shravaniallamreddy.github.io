
import React from "react";
import Footer from "../components/Footer";



function Contact() {

    return (
        <section id="contact-section" className="position footer-position bg-image">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div id="contact" className="box-shadow-full">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="title-box-2">
                                        <h5 className="title-left primary">
                                            Contact
                                        </h5>
                                    </div>  
                                    <div>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input name="name" type="text" placeholder="Name" className="form-control" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Subject" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="title-box-2 pt-4 pt-md-0">
                                        <h5 className="title-left primary">
                                            Connect with me
                                        </h5>
                                    </div>
                                    <div>
                                        <ul className="list-ico">
                                            <li>North Salt Lake, Utah</li>
                                            <li>(210) 882-9998</li>
                                            <li>shravani.allam@gmail.com</li>
                                        </ul>
                                    </div>
                                    <div className="socials">
                                        <ul>
                                            <li><a href="mailto:shravani.allam@gmail.com" target="_blank" rel="noreferrer"><span className="contact-item-link">
                                                <i className="fas fa-3x fa-envelope mr-3"></i></span></a></li>
                                            <li><a href="https://github.com/ShravaniAllamReddy" target="_blank" rel="noreferrer"><span
                                                className="contact-item-link"><i className="fab fa-github fa-3x mr-3"></i></span></a>
                                            </li>
                                            <li><a href="https://www.linkedin.com/in/shravani-allam-reddy-a28865162/" target="_blank" rel="noreferrer"><span
                                                className="contact-item-link"><i className="fab fa-linkedin fa-3x mr-3"></i></span></a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )

}


export default Contact;