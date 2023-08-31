import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TechShop from "../../Assets/Projects/TechShop.jpg.png";
import infoplus from "../../Assets/Projects/infoplus.png";
import enigmatic from "../../Assets/Projects/enigmatic.png";
import spring from "../../Assets/Projects/spring+ang.png";
import esprit from "../../Assets/Projects/esprit.png";
import symf from "../../Assets/Projects/symf.png";

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
              imgPath={infoplus}
              isBlog={false}
              title="infoPLUS"
              description="I contributed to the development of a full-stack web site for INFOplus. Using the
                MERN stack (MongoDB, Express.js, React.js, Node.js), I designed and implemented the essential features
                of the site to meet the needs of the company"
              ghLink="https://github.com/Moetaz-doghman/InfoPlus_Project"
              demoLink="https://www.youtube.com/watch?v=7a_JPx0jKkk&feature=youtu.be"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enigmatic}
              isBlog={false}
              title="GiveBack"
              description="Development of a social media-inspired web platform to facilitate collaboration in the realm of volunteering and nonprofit organizations, as part of an academic project. Technologies used: MERN stack"
              ghLink="https://github.com/PI-4TWIN5-Enigmatic/PI-Enigmatic"
              demoLink="https://www.youtube.com/watch?v=Tb_jsl3yttQ&feature=youtu.be"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spring}
              isBlog={false}
              title="Kaddem"
              description="
              Development of a web application for student contract management, as part of an academic project.
              Technologies used: Angular for the frontend and Spring Boot for the backend. "
              ghLink="https://github.com/marsit-saif-eddine/Projet-kaddem-"
              //demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TechShop}
              isBlog={false}
              title="TechShop"
              description="Development of a Symfony e-commerce website, as part of an academic project. Additionally, I undertook the creation of a CodeName One Mobile App that consumed APIs developed in the Symfony segment. Furthermore, I engaged in the creation of a Desktop application using JavaFX."
              ghLink="https://github.com/Doniasarsar/ErrorMakers-3A45"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={symf}
              isBlog={false}
              title="My City in Your Pocket"
              description="As an intern Symfony developer at Tunisian Smart Cities, I contributed to this project, which focused on providing real-time access to vital services. The application was carefully crafted to ensure user-friendliness and efficient communication between city services and the community, ultimately enhancing the urban living experience for the residents of Bizerte."
              ghLink="https://github.com/SkanderZouaoui/MA-VILLE-EN-POCHE"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={esprit}
              isBlog={false}
              title="ESPRIT Career center"
              description="I served as a front-end developer for the development of the ESPRIT Career Center Website. My role involved utilizing technologies such as HTML, CSS, Bootstrap, and PHP."
              ghLink="/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
