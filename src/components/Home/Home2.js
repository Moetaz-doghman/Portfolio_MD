import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/moetaz.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import AboutCard from "../About/AboutCard";
import { Link } from "react-router-dom";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <AboutCard />
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="more-about">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <hr
                style={{
                  background: "#1B668A", // Set the color to purple
                  height: "4px",
                  width: "50%",
                }}
              />
              <Link to="/about" style={{ textDecoration: "none" }}>
                <p
                  style={{
                    fontSize: "1.5em",
                    marginRight: "10px",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                  &nbsp;More <span className="purple">INFO </span> ....
                </p>
              </Link>
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <hr
                style={{
                  background: "#1B668A",
                  height: "4px",
                  width: "50%",
                }}
              />
              <Link to="/project" style={{ textDecoration: "none" }}>
                <p
                  style={{
                    fontSize: "1.5em",
                    marginRight: "10px",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                  &nbsp;Explore my <span className="purple">PROJECTS </span> ....
                </p>
              </Link>
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <hr
                style={{
                  background: "#1B668A",
                  height: "4px",
                  width: "50%",
                }}
              />
              <Link to="/resume" style={{ textDecoration: "none" }}>
                <p
                  style={{
                    fontSize: "1.5em",
                    marginRight: "10px",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                 &nbsp; Check out my <span className="purple">CV </span> ....
                </p>
              </Link>
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <hr
                style={{
                  background: "#1B668A",
                  height: "4px",
                  width: "50%",
                }}
              />
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <p
                  style={{
                    fontSize: "1.5em",
                    marginRight: "10px",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                 &nbsp; Get in <span className="purple">TOUCH </span> ....
                </p>
              </Link>
            </div>{" "}
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
                  href="https://github.com/Moetaz-doghman"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/moetez.doghman66/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/moetaz-doghman-409aa8213/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/moetez_doghman/?hl=fr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
