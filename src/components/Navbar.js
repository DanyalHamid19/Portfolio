import React from "react";
import "./navbar.css";
import download from "../pictures/download.jpg";

export default function Navbar() {
  // Function to handle the download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Resume.pdf";
    link.download = "Danyal-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className="navbar">
        <p className="portfolio-text">Portfolio</p>
        <ul className="nav-links">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contactpage">Contact</a>
          </li>
        </ul>
        <button className="btn btn-dark resume-btn" onClick={handleDownload}>
          Resume
          <img className="download-img" src={download} alt="Download" />
        </button>
      </nav>
    </>
  );
}
