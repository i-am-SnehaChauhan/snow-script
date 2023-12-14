import Card from "./Card";
import "./Project.css";

function Project()
{
    return(
        <>
        <h1 className="skill-head"> Web Development</h1>
        <div className="project-container">
        <Card image="https://i.pinimg.com/originals/bf/47/60/bf476081b660fa6d2448187d4b189568.jpg" head="XYZ Project" content="This is a webd project" link="www.google.com"/>
        <Card image="https://i.pinimg.com/originals/bf/47/60/bf476081b660fa6d2448187d4b189568.jpg" head="XYZ Project" content="This is a webd project" link="www.google.com"/>
        <Card image="https://i.pinimg.com/originals/bf/47/60/bf476081b660fa6d2448187d4b189568.jpg" head="XYZ Project" content="This is a webd project" link="www.google.com"/>
        </div>
        </>
    )
}
export default Project;