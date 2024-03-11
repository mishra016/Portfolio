import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../assets/img/icon2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div className="about-info">
              <h2>About Me</h2>
              <p>
              With nearly two years of hands-on industry experience, I've honed 
              my skills in diverse programming languages and web development frameworks. 
              I love to create simple yet beautiful websites with great user experience.
              Passionate about problem-solving and collaboration, I thrive in fast-paced 
              environments where creativity meets technical expertise. 
              Let's connect and explore how we can drive innovation together!
              </p>
            </div>
          </Col>
          
          <Col xs={12} md={6} className="about-image">
            <TrackVisibility>{({ isVisible }) =>
                
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={aboutImg} alt="About Me"/>
            }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"/>
    </section>
  );
};
