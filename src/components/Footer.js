import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/3.png';
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/medium.png";

export const Footer = () =>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt = "logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/mohi-mishra/"><img src={navIcon1} alt="Icon" /></a>
                        <a href="https://github.com/mishra016"><img src={navIcon2} alt="Icon" /></a>
                        <a href="https://medium.com/@mohimishra016"><img src={navIcon3} alt="Icon" /></a>
                    </div>
                    <p>Made with ❤️ by Mohi Mishra.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}