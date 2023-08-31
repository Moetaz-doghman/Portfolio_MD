import React from "react";
import Card from "react-bootstrap/Card";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

function ContactCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple"> Get In Touch </span>{" "}{" "}
          </p>
          <ul>
            <li className="about-activity">
              <FiMapPin /> Location: Bizerte, Tunisia
            </li>
            <li className="about-activity">
              <FiPhone /> Phone: +216 52464649
            </li>
            <li className="about-activity">
              <FiMail /> Email: doghman.moetaz@gmail.com
            </li>
            <li className="about-activity">
              <FiMail /> Email: moetaz.doghman@esprit.tn
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            Please fill out the form on this section to contact with me. I'm
            always available between 9:00 a.m. and 8:00 p.m. ET, Monday through
            Friday.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
