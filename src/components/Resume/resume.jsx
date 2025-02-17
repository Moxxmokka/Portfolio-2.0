import React from "react";
import "./resume.css";
import ResumePDF from "../../DanielCV.pdf";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Resume() {
  return (
    <div className="resumeWrapper">
      <Document file={ResumePDF}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Resume;