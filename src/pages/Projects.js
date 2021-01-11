
import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import projects from "../projects.json";
import Card from "../components/Card";
import "../assets/css/style.css";

class Projects extends Component {

    //setting this.state.projects to the projects json array
    state = {
        projects: projects
    }

    render() {

        return (
            <section id="work" className="section-pad-top">
                <div className="container container-gallery">
                    <div className="row">
                        <div className="text-center col-12">
                            <h2 className="primary section-title mb-5">Portfolio</h2>
                        </div>
                    </div>
                    <div className="row" >
                        {this.state.projects.map(project => (
                            <Card
                                id={project.id}
                                key={project.id}
                                image={project.image}
                                name={project.name}
                                link={project.link}

                            />
                        ))}
                    </div>
                </div>
            </section>

        )
    }

}


export default Projects;