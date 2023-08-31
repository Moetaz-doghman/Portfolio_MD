import React, { useRef } from "react"; // Import useRef
import { Row, Col, Button, Container } from "react-bootstrap";
import ContactCard from "./ContactCard";
import emailjs from "@emailjs/browser";


function ContactForm() {
  const form = useRef(); // Create a ref for the form element
  const service_key = process.env.REACT_APP_service_key;
  const template_key = process.env.REACT_APP_template_key;
  const public_key = process.env.REACT_APP_public_key;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        service_key,
        template_key,
        form.current,
        public_key
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Container fluid className="contact-section">
        {/* <Particle /> */}
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={5}
              style={{ paddingTop: "10px", paddingBottom: "50px" }}
              className="about-img"
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Contact <strong className="purple">Me</strong>
              </h1>
              <ContactCard />
            </Col>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "90px",
              }}
            >
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="user_email">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" name="subject" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="message">Message</label>
                  <input
                    as="textarea"
                    name="message"
                    rows={4}
                    className="form-control"
                  />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <Button type="submit">Send Message</Button>
                <br></br>
                <br></br>
              </form>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ContactForm;
