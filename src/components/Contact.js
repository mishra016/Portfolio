
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/icon1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_njelwkq', 'template_5owg1ge', form.current, {
        publicKey: 'hhGLS3OSSl-pOTY6f',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
            <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                     }
                    </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>Get In Touch</h2>
                        <p>I'm currently looking for new opportunities, my inbox is always open. 
                           Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" name="user_name" placeholder="Full Name" />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" name="user_email" placeholder="Email Address" />
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea rows="6" name="message" placeholder="Message"  ></textarea>
                                    <button type="submit"><span>Send</span></button>
                                </Col>
                                {/* {
                                  status.message &&
                                  <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                  </Col>
                                } */}
                            </Row>
                        </form>
                    </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
  );
};
