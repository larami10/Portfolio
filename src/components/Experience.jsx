import { Col, Container, Row } from "react-bootstrap";
import experience from "../data/Experience.json";
import TechStackIcon from "./TechStackIcon";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <>
      <h3 className="section-title">TECH EXPERIENCE</h3>
      <Row>
        {experience.map((job) => {
          return (
            <Container fluid className="experience-item">
              {job.companyName ? <h4>{job.companyName}</h4> : null}
              {job.jobTitle ? (
                <div className="gap">
                  <h5 className="job-title">{job.jobTitle}</h5>
                  <p className="experience-date">
                    {job.jobStart} - {job.jobEnd}
                  </p>
                </div>
              ) : null}
              <h6>{job.projectTitle}</h6>
              <p>
                {job.projectDescription.map((text) => {
                  return (
                    <span>
                      {text.text}
                      {text.linkText ? (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={text.linkUrl}
                          className="text-link"
                        >
                          {text.linkText}
                        </a>
                      ) : null}
                    </span>
                  );
                })}
              </p>
              <div className="techStack">
                {job.techStack.map((tech) => {
                  return <TechStackIcon tech={tech} />;
                })}
              </div>
            </Container>
          );
        })}
      </Row>
    </>
  );
};

export default Experience;
