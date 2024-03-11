import { Col } from "react-bootstrap";


export const ProjectCard = ({title, description, imgUrl, githubLink}) =>{
    const handleProjectClick = () => {
        window.open(githubLink, "_blank"); // Open GitHub link in a new tab
      };

    return(
        <Col sm={6} md={4} onClick={handleProjectClick} style={{ cursor: "pointer" }}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="prj"/>
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>

                </div>
            </div>
        </Col>
    )
}