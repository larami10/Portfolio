import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row } from "react-bootstrap";
import About from "./components/About";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import resume from "../Luis-Ramirez-Resume.pdf";
import { useState } from "react";

const App = () => {
  const [arrowTransition, setArrowTransition] = useState(false);

  return (
    <>
      <Row lg={2} id="main">
        <div id="header-container">
          <section id="header">
            <Header />
          </section>
        </div>
        <div id="sections">
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="resume">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="resume-link"
              onMouseEnter={() => setArrowTransition(true)}
              onMouseLeave={() => setArrowTransition(false)}
            >
              <h5 className="resume-pdf">View Full Resumé</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                class={
                  arrowTransition
                    ? "bi bi-arrow-right arrow-transition"
                    : "bi bi-arrow-right"
                }
                viewBox="0 0 1em 1em"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
          </section>
          <section id="projects">
            <Projects />
          </section>
        </div>
      </Row>
    </>
  );
};

export default App;
