import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdfEn from "../../Assets/../Assets/Moetaz_doghman_anglais.pdf";
import pdfFr from "../../Assets/../Assets/Moetaz_Doghman français.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(numPages);
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
            style={{
              maxWidth: "50%",
              marginBottom: "10px",
              marginLeft: "50px",
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV (English)
          </Button>
          <Button
            variant="primary"
            href={pdfFr}
            download="Moetaz_Doghman_Resume_français.pdf"
            style={{ maxWidth: "50%", marginLeft: "50px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger CV (Français)
          </Button>
        </Row>
        <Row className="resume">
          <div style={{ width: "100%", clear: "both" }}>
            <Document
              file={pdfEn}
              onLoadSuccess={onDocumentLoadSuccess}
              className="d-flex justify-content-center"
            >
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </div>
          <div style={{ width: "100%", clear: "both", paddingTop: "0px" }}>
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
