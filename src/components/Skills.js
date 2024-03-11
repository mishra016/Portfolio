import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import html from "../assets/img/skills/html.svg";
import css from "../assets/img/skills/css.svg";
import js from "../assets/img/skills/js.svg";
import react from "../assets/img/skills/react.svg";
import redux from "../assets/img/skills/redux.svg";
import ts from "../assets/img/skills/ts.svg";
import node from "../assets/img/skills/node.svg";
import mongo from "../assets/img/skills/mongodb.svg";
import python from "../assets/img/skills/python.svg";
import java from "../assets/img/skills/java.svg";
import mysql from "../assets/img/skills/mysql.svg";
import npm from "../assets/img/skills/npm.svg";
import docker from "../assets/img/skills/docker.svg";
import figma from "../assets/img/skills/figma.svg";
import gcp from "../assets/img/skills/gcp.svg";
import csharp from "../assets/img/skills/csharp.svg";


export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className = "skill" id="skills">
            <Container>
                <Row>
                    <Col>
                      <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>
                        Crafting captivating user experiences and dynamic interfaces is my specialty.
                        <br></br> 
                        I specialize in developing highly interactive front-end solutions for web applications. 
                        From Progressive Web Applications (PWAs) and Single Page Application (SPA) stacks
                        to seamlessly integrating third-party services like Firebase. 
                        I bring innovation and functionality to every project. 
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            
                            <div className="item">
                                <img src={js} alt="img" />
                                <div className="text">JavaScript</div>
                            </div>
                            <div className="item">
                                <img src={react} alt="img" />
                                <div className="text">React</div>
                            </div>
                            <div className="item">
                                <img src={java} alt="img" />
                                <div className="text">Java</div>
                            </div>
                            <div className="item">
                                <img src={html} alt="Img" />
                                <div className="text">Html</div>
                            </div>
                            <div className="item">
                                <img src={css} alt="img" />
                                <div className="text">Css</div>
                            </div>
                            <div className="item">
                                <img src={ts} alt="img" />
                                <div className="text">Typescript</div>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="img" />
                                <div className="text">Mongodb</div>
                            </div>
                            <div className="item">
                                <img src={redux} alt="img" />
                                <div className="text">Redux</div>
                            </div>
                            <div className="item">
                                <img src={node} alt="Img" />
                                <div className="text">Node.js</div>
                            </div>
                            <div className="item">
                                <img src={python} alt="img" />
                                <div className="text">Python</div>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Img" />
                                <div className="text">MySQL</div>
                            </div>
                            <div className="item">
                                <img src={npm} alt="img" />
                                <div className="text">npm</div>
                            </div>
                            <div className="item">
                                <img src={docker} alt="img" />
                                <div className="text">Docker</div>
                            </div>
                            <div className="item">
                                <img src={figma} alt="img" />
                                <div className="text">Figma</div>
                            </div>
                            <div className="item">
                                <img src={gcp} alt="img" />
                                <div className="text">GCP</div>
                            </div>
                            <div className="item">
                                <img src={csharp} alt="img" />
                                <div className="text">C#</div>
                            </div>
                          
                        </Carousel>
                      </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src = {colorSharp} alt="img"/>
        </section>
      )

}