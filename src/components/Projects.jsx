import { Col, Container, Row } from "react-bootstrap";
import projects from "../data/Projects.json";
import "../styles/Projects.css";
import TechStackIcon from "./TechStackIcon";

const Projects = () => {
  return (
    <>
      <h3 className="section-title">PROJECTS</h3>
      <Row>
        {projects.map((project) => {
          return (
            <>
              <a
                target="_blank"
                rel="noreferrer"
                href={project.projectLink}
                className="project-link"
              >
                <h4>{project.projectTitle}</h4>
                <Container fluid className="project-image-container">
                  <img
                    src={project.projectImage}
                    alt={project.projectImageAlt}
                    width={"100%"}
                    className="project-image"
                  />
                </Container>
                <p>{project.projectDescription}</p>
                <div className="techStack">
                  {project.techStack.map((tech) => {
                    return <TechStackIcon tech={tech} />;
                  })}
                </div>
              </a>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default Projects;
