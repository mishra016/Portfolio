import projImg1 from "../assets/img/TerminalPortfolio.png";
import projImg2 from "../assets/img/sensor.jpg";
import projImg3 from "../assets/img/SocialMedia.jpg";
import projImg4 from "../assets/img/netflix.png";
import projImg5 from "../assets/img/course.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


export const Projects = () =>{
    
    const projects = [
        {
          title: "Terminal Portfolio",
          description: "Coded a portfolio website with a unique terminal design.",
          imgUrl: projImg1,
          githubLink: "https://github.com/mishra016/terminal-portfolio"
        },

        {
          title: "Sensor Data",
          description: "Crafted a web application using MERN, to improve metadata accessibility through advanced sensor data search features.",
          imgUrl: projImg2,
          githubLink: "https://github.com/mmishra1bing/i544"
        },
        {
          title: "Social Media Analysis for the 2024 Elections",
          description: "Crafted a robust data science pipeline for election analysis, specifically targeting Reddit and 4chan data.",
          imgUrl: projImg3,
          githubLink: ""
        },

        {
          title: "Netflix Data Analysis",
          description: "Extracted and refined data using MongoDB, implemented advanced algorithms like KNN and time series analysis.",
          imgUrl: projImg4,
          githubLink: ""
        },
        
        {
          title: "Course Allocator",
          description: "Developed a course allocation program to optimize capacity and duration conflicts, reducing overall conflicts. ",
          imgUrl: projImg5,
          githubLink: "https://github.com/mishra016/CS542-DesignPatterns"
        },
    ];

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h2>Projects</h2>
                        </div>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Web Development</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Others</Nav.Link>
                            </Nav.Item>
                        </Nav> */}
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                       return(
                                        <ProjectCard
                                        key={index}
                                        {...project}/>
                                       ) 
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="second">Loreum Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Loreum Ipsum</Tab.Pane> */}
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="img"/>
        </section>

    )

}