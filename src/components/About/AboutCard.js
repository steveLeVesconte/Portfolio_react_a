import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Full Stack Developer dedicated to service and craft.  Creating value for my customers and users through discipline, creativity and collaboration (winning together!). 


        {/*     Hi Everyone, I am <span className="purple">Steve LeVesconte </span>
            from <span className="purple"> Olympia Washington.</span>
            <br /> I am a final year student pursuing an Integrated MSc (IMSc)
            in Maths and Computing at BIT Mesra.
            <br />
            Additionally, I am currently employed as a software developer at
            Juspay. */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games like Go
            </li>
            <li className="about-activity">
              <ImPointRight /> Physics
            </li>
          </ul>
         {/*  <p style={{ color: "rgb(155 126 172)" }}>  tbd */}
{/*           <p style={{ color: "rgb(119 119 119)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
