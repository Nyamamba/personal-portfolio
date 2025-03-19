import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Appollinaris Nyamamba </span>
            from <span className="purple">Kenya.</span>
            <br />
            I am a passionate software engineer with a strong interest in
            full-stack development and blockchain technology.
            <br />
            I thrive on solving complex problems and building web solutions that
            are both functional and impactful.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new tech trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem-solving and critical thinking
            </li>
            <li className="about-activity">
              <ImPointRight /> Networking with fellow developers
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and experiencing different cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Haba na haba hujaza kibaba."{" "}
          </p>
          <footer className="blockquote-footer">Appollinaris</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
