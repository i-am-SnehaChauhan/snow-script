import Card from "./Card";
import "./Project.css";
import WebDimage from "../../assets/WebD.jpg";
import ARVRimage from "../../assets/ARVR.jpg";
import AppDimage from "../../assets/AppD.jpg";
import DSA from "../../assets/DSA.jpg";
import ML from "../../assets/ML.jpg";
import UIUX from "../../assets/UIUX.jpg";


function Project()
{
    return(
        <>
        <h1 className="skill-head"> Projects</h1>
        <div className="project-container">
        <Card image={WebDimage} head="Web Development" content="web development projects to explore a diverse tech stack and refine your coding prowess. Contribute to cutting-edge frameworks, libraries, and web applications" link="www.google.com"/>
        <Card image={ARVRimage} head="AR/VR" content="This is a webd project" link="www.google.com"/>
        <Card image={AppDimage} head="App Development" content="This is a webd project" link="www.google.com"/>
        </div>
        <div className="project-container">
        <Card image={DSA} head="XYZ Project" content="This is a webd project" link="www.google.com"/>
        <Card image={ML} head="XYZ Project" content="This is a webd project" link="www.google.com"/>
        <Card image={UIUX} head="XYZ Project" content="This is a webd project" link="www.google.com"/>
        </div>
        </>
    )
}
export default Project;