import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import memeGenerator from "../../Assets/Projects/mememuc.png";
import bachelor from "../../Assets/Projects/bachelor.png";
import roborally from "../../Assets/Projects/roborally.png";
import walkietalkie from "../../Assets/Projects/walkietalkie.png";
import minigame from "../../Assets/Projects/minigame.png";
import wecommuters from "../../Assets/Projects/wecommuters.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on during my studies.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bachelor}
              isBlog={false}
              title={<strong>Bachelor Thesis Project</strong>}
              description="My bachelor’s thesis focused on improving user detection and response to phishing threats through the design and implementation of visual warnings in email clients. The study, conducted over two weeks with 16 participants using eye-tracking technology and qualitative feedback, evaluated different phishing warning designs in Mozilla Thunderbird."
              ghLink="https://github.com/yunuseyvz/Bachelorthesis_Phishing/"
              //demoLink="https://bachelorthesis-phishing-demo.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={walkietalkie}
              isBlog={false}
              title={<strong>Language Learning App Prototype</strong>}
              description="A team project focused on improving language learning through a mobile app. Using Figma, we created an interactive prototype. The app features gamified lessons and AR elements intended to make learning fun and accessible."
              //ghLink="https://github.com/"
              demoLink="https://www.figma.com/proto/LskgvLIixXjYt6MTnyXXt2/AppPrototype?node-id=18-3&t=68zkrRk3OH4btXYn-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=18%3A3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wecommuters}
              isBlog={false}
              title={<strong>Car Pooling App Prototype</strong>}
              description="Our team designed a prototype for a car pooling mobile application aimed at creating a user-friendly platform that encourages car pooling by integrating innovative incentive mechanisms. Through extensive user research and brainstorming sessions, we developed an interactive prototype using Figma."
              //ghLink="https://github.com/"
              demoLink="https://www.figma.com/proto/Yeni4yv3NOmEcVuXCtPC9H/WeCommuters?node-id=6-2&starting-point-node-id=6%3A2&t=KQ80qou9GuY6kNgt-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={roborally}
              isBlog={false}
              title={<strong>RoboRally - Digital Board Game</strong>}
              description="As part of my software development module, we developed a digital version of the board game 'RoboRally' using Java. We followed an Agile development process, focusing on coding the game's logic, implementing the user interface, and ensuring accurate game rules."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memeGenerator}
              isBlog={false}
              title={<strong>Meme Generator</strong>}
              description="As part of a course project, we developed a meme generator web application. I focused on front-end development using React, while the back-end was built with Express.js. The app allows users to generate, customize, and share memes, featuring text overlay, image uploads, and customizable templates."
              //ghLink="https://github.com/yourGithub/meme-generator"
              //demoLink="https://meme-generator-demo.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minigame}
              isBlog={false}
              title={<strong>2D Sidescroller Minigame</strong>}
              description="As part of a course project, we developed a small 2D sidescroller jump and run game using Unity. My primary focus was on developing the game logic using C#. The project involved designing levels, creating character animations, and implementing game mechanics such as jumping, running, and interacting with in-game objects."
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
