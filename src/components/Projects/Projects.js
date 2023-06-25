import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import play from "../../Assets/Projects/Play.png";
import payment from "../../Assets/Projects/payment-portal-1-1024x603.png";
import CeuCatelog2fixed from "../../Assets/Projects/CeuCatelog2fixed.png";

function Projects() {
  return (
    <Container fluid className="project-section">
{/*       <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row className="project-row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CeuCatelog2fixed}
              isBlog={false}
              title="Public Access"
              description="A continuing education database where you will find a list of courses which have been approved by NAB (National Association of Long Term Care Administrator Boards) and the Ohio Department of Aging."

              demoLink="https://ceucatalog.age.ohio.gov/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={payment}
              isBlog={false}
              title="Public Payment"
              description="Online public portal allows customers (licensees and companies) to search for and pay their invoices online for the State of Ohio.  This system is used by Licensed Nursing Home Administrators, Nursing Home companies and Continuing Education Course Providers.  Users can search for their invoices by multiple criteria.  Users can see the status of their invoices (paid or not) and optionally pay them online with either major credit card or checking account."

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={play}
              isBlog={false}
              title="Azue AD B2C Go Game"
              description="The purpose of the project is to provide an adequately rich domain for the exploration of multiple technologies. In my experience, many learning projects are too simple to challenge a developer to deeply exercise a technology. The developer can find themselves doing little more than repeating the pre-packaged solutions provided in tutorials."
              
            />
          </Col>

 {/*          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
