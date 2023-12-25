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
        <Card image={WebDimage} head="Web Development" content="Web development projects to explore a diverse tech stack and refine your coding prowess. Contribute to cutting-edge frameworks, libraries, and web applications" link="/projects/webD"/>
        <Card image={ARVRimage} head="AR/VR" content="This is a webd project" link="www.google.com"/>
        <Card image={AppDimage} head="App Development" content="App development projects. Immerse yourself in a rich tech stack, and contribute to building innovative mobile applications. Elevate your skills while leaving a lasting impact on the world of mobile technology." link="/projects/appD"/>
        </div>
        <div className="project-container">
        <Card image={DSA} head="DSA" content="Delve into open-source projects focused on data structures and algorithms. Collaborate with like-minded developers to optimize algorithms, enhance efficiency, and contribute to foundational
           coding paradigms." link="www.google.com"/>
        <Card image={ML} head="Machnine Learning" content="Advancing the field of machine learning. Contribute to projects gain hands-on experience in shaping the future of artificial intelligence. Make your mark on cutting-edge ML solutions and foster collaborative learning." link="www.google.com"/>
        <Card image={UIUX} head="UI/UX" content="This is a webd project" link="www.google.com"/>
        </div>
        </>
    )
}
export default Project;