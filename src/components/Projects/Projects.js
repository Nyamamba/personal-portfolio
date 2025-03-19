import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weatherApp from "../../Assets/Projects/weatherapp.png";
import taskflow from "../../Assets/Projects/taskflow.png";
import ecommerce from "../../Assets/Projects/eccomerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskflow}
              isBlog={false}
              title="TaskFlow To-Do App"
              description="A simple and efficient task management app built with HTML, CSS and Js. It allows users to create, update, and track their daily tasks seamlessly with a clean and user-friendly interface."
              ghLink="https://github.com/Nyamamba/taskflow-to-do-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="Weather React Website"
              description="A modern weather application built with React.js that fetches real-time weather data using the OpenWeather API. Provides accurate forecasts, temperature trends, and an intuitive UI."
              ghLink="https://github.com/Nyamamba/weather-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="PHP E-commerce Website"
              description="A feature-rich e-commerce platform built with PHP and MySQL. Supports user authentication, product management, secure checkout, and an intuitive shopping experience."
              ghLink="https://github.com/Nyamamba/ecommerce-website"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
