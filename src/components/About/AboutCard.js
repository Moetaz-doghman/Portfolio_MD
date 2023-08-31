import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillGift } from 'react-icons/ai';
import { FaMapMarkerAlt, FaBirthdayCake, FaGraduationCap } from 'react-icons/fa';


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Moetaz Doghman</span>, a third-year
            student in the Computer Engineering program at
            <span className="purple">
              {" "}
              the Private Higher School of Engineering and Technologies - ESPRIT
            </span>
            . With 4 years of programming expertise, I am a creative{" "}
            <span className="purple">web developer</span>. I excel at
            problem-solving and am known for developing innovative solutions for
            websites. My strong communication skills enable me to effectively
            convey ideas and collaborate with others.
          </p>
          <ul>
            <li className="about-activity">
              <AiFillGift /> Birthday : 24/09/2000
            </li>
            <li className="about-activity">
              <FaMapMarkerAlt /> Location : Bizerte, Tunisia
            </li>
            <li className="about-activity">
              <FaBirthdayCake /> Age : 23
            </li>
            <li className="about-activity">
              <FaGraduationCap /> Degree : Software Engineering
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
