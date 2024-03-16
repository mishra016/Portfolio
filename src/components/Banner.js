
import {ParticlesComponent} from './Design';
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Software Developer", "Technical Writer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100); //speed of the next letter when first one is typed
    const period = 200; //transition between each words

    useEffect(() => {
        let ticker = setInterval(() =>{
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(200);
        }
    }

    return (
        
        <section className="banner" id="home">
            <Container>
            
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <ParticlesComponent/>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__bounce": ""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi, I'm Mohi Mishra `}<span className="wrap">{text}</span></h1>
                        <p>

                        </p>
                        <button onClick={() => window.location.href = '#connect'}>Let's Connect<ArrowRightCircle size={25} /></button>
                        </div>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}