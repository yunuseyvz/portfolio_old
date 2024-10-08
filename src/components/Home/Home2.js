import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import FlipNumbers from 'react-flip-numbers';

function Home2() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [playFlip, setPlayFlip] = useState(false);

  useEffect(() => {
    fetch("https://visit-counter.vercel.app/counter?page=yuemya.de")
      .then(response => response.text())
      .then(count => setVisitorCount(count));
    const handleScroll = () => {
      setPlayFlip(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              My name is Yunus Emre Yavuz and I am a passionate student interested in <b className="purple">UX Design and Research</b>. Currently, I am studying Media Informatics, and starting in October, I will pursue my Master's degree in <b className="purple">Human Computer Interaction</b>.
              <br /><br />
              Throughout my studies, I have gained valuable experience in UX design, working with tools like <b className="purple">Figma</b> for UI/UX design and prototypes. My Bachelor's thesis focused on designing and evaluating visual phishing warnings, using <b className="purple">eye-tracking technology</b> and qualitative feedback to enhance user interaction and security.
              <br /><br />
              I am driven by my interest in creating user-friendly and intuitive digital products. I have experience with programming languages like <b className="purple">Java, JavaScript, and HTML/CSS</b>, and libraries such as <b className="purple">React</b>.
              <br /><br />
              I am eager to apply my passion and knowledge to future projects, continuously improving the user experience in digital products.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yunuseyvz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yunuseyvz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={12} className="visits">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ marginRight: '10px', fontSize: '1.2em', color: 'grey' }}>Visitors:</span>
              <FlipNumbers
                height={20}
                width={20}
                color="grey"
                play={playFlip}
                fontSize="1.2em"
                perspective="1000px"
                numbers={visitorCount}
                delay={1}

              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;