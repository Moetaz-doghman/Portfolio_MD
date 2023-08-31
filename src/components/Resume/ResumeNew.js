import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdfEn from "../../Assets/../Assets/Moetaz_doghma_anglais.pdf";
import pdfFr from "../../Assets/../Assets/Moetaz_Doghman_Resume français.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(numPages)
  }, [numPages]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfEn}
            download="Moetaz_Doghman_Resume_english.pdf"
            target="_blank"
            style={{ maxWidth: "250px", marginRight: "20px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV (English)
          </Button>
          <Button
            variant="primary"
            href={pdfFr}
            download="Moetaz_Doghman_Resume_français.pdf"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger CV (Français)
          </Button>
        </Row>

        <Row className="resume">
          <div style={{ width: "50%", float: "left" }}>
            <Document
              file={pdfEn}
              onLoadSuccess={onDocumentLoadSuccess}
              className="d-flex justify-content-center"
            >
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </div>
        </Row>
        <Row className="resume">
          <div style={{ width: "50%", float: "left" }}>
            <Document
              file={pdfEn}
              onLoadSuccess={onDocumentLoadSuccess}
              className="d-flex justify-content-center"
            >
              <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;