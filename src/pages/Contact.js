
import React from "react";
import Footer from "../components/Footer";
import { Container, Row, Col } from '../components/Grid';
import { Input, TextArea, FormBtn } from "../components/Form";

function Contact() {


    return (
        <section id="contact-section" className="position footer-position bg-image">
            <div className="overlay"></div>
            <Container>
                <Row>
                    <Col size="sm-12">
                        <div id="contact" className="box-shadow-full">
                            <Row>
                                <Col size="md-6">
                                    <div className="title-box-2">
                                        <h5 className="title-left primary">
                                            Contact
                                        </h5>
                                    </div>

                                    <form>
                                        <Row>
                                            <Col size="md-12">
                                                <Input
                                                    name="name"
                                                    placeholder="Name"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="md-12">
                                                <Input
                                                    name="email"
                                                    placeholder="Email"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="md-12">
                                                <Input
                                                    name="subject"
                                                    placeholder="Subject"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="md-12">
                                                <TextArea
                                                    name="Message"
                                                    rows="3"
                                                    placeholder="Type your message"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="md-12">
                                                <FormBtn>
                                                    Send Message
                                                </FormBtn>
                                            </Col>
                                        </Row>
                                    </form>

                                </Col>
                                <Col size="md-6">
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
                                </Col>
                            </Row>
                        </div>

                    </Col>
                </Row>
            </Container >
            <Footer />
        </section >
    )

}


export default Contact;