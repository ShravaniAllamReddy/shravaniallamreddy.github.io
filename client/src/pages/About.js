
import React from "react";
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../components/Grid';


function About() {
    return (

        <section id="introduction" className="section-pad-top">
            <Container>
                <Row>
                    <Col size="md-6">
                        <img src="/assets/img/dp.png" alt="description" className="img-fluid intro-img" />
                    </Col>
                    <Col size="md-6">
                        <div className="intro-text-container">
                            <h2 className="primary mb-4 section-title">About Me</h2>
                            <p className="intro-text">
                                Full Stack Web Developer applying IT background towards building functional server-side applications. 
                                I have recently earned a certificate in Full Stack development Bootcamp from University of Arizona. 
                            </p>
                            <p className="intro-text">
                                More than 4 years of experience in development and support of applications. 
                                Experience in automating the application using Shell and Perl. 
                                Worked with the deployment process and regression testing of the application. 
                                Experience in developing web applications using MongoDB, HTML, CSS, JavaScript, jQuery, Node.js, React.js. 
                                Designed Responsive Web pages using media queries and Bootstrap.
                            </p>
                            <p className="intro-text">
                                <a href="https://drive.google.com/file/d/12Yf6ZLHdF0g6YQ496oelvGbjmiTjHPyo/view?usp=sharing"
                                    target="_blank" rel="noreferrer">Click Here to view my Resume</a>
                            </p>
                            <div>
                                <a href="#work" className="intro-text btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;