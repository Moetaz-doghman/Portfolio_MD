import React, { useRef, useState } from "react";
import { Row, Col, Button, Container, Form, Alert } from "react-bootstrap";
import ContactCard from "./ContactCard";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  user_email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

function ContactForm() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const service_key = process.env.REACT_APP_service_key;
  const template_key = process.env.REACT_APP_template_key;
  const public_key = process.env.REACT_APP_public_key;

  const formik = useFormik({
    initialValues: {
      user_email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);

      emailjs
        .sendForm(service_key, template_key, form.current, public_key)
        .then(
          (result) => {
            console.log(result.text);
            setIsSuccess(true);
            formik.resetForm();
            setTimeout(() => {
              setIsSuccess(false); // Masquer le message après 2 secondes
            }, 2000); // 2000 ms = 2 secondes
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    },
  });

  return (
    <div>
      <Container fluid className="contact-section">
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
              <Form onSubmit={formik.handleSubmit} ref={form}>
                <div className="mb-3">
                  <label htmlFor="user_email">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className={`form-control ${
                      formik.touched.user_email && formik.errors.user_email
                        ? "is-invalid"
                        : ""
                    }`}
                    value={formik.values.user_email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.user_email && formik.errors.user_email ? (
                    <div className="invalid-feedback">
                      {formik.errors.user_email}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className={`form-control ${
                      formik.touched.subject && formik.errors.subject
                        ? "is-invalid"
                        : ""
                    }`}
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.subject && formik.errors.subject ? (
                    <div className="invalid-feedback">
                      {formik.errors.subject}
                    </div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className={`form-control ${
                      formik.touched.message && formik.errors.message
                        ? "is-invalid"
                        : ""
                    }`}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div className="invalid-feedback">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>
                <br></br>
                <br></br>
                <br></br>
                <Button type="submit" disabled={isSubmitting}>
                  Send Message
                </Button>
                {isSuccess && (
                  <Alert
                    variant="success"
                    className="mt-3"
                    show={isSuccess} // Utilisation de la prop "show" pour afficher/masquer l'alerte
                  >
                    Message sent successfully!
                  </Alert>
                )}
                <br></br>
                <br></br>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ContactForm;
  