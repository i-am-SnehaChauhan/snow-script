import "./Card.css";
import {Button} from "../ButtonElement";


const buttonStyles = {
    width : "70%",
    alignItem: "center",
    marginBottom: "0",
    TextDecoration: "none",
    backgroundColor: "#12486B",
    color: "#ffffff",
    cursor: "pointer",
    marginLeft: "40px",
};


function Card(props)
{function redirect()
    {
        window.location.href=`${props.link}`
    }
    return(
        <>
         <div class="cardproject">
            <img src={props.image} alt="image"/>
            <div class="layer"  >
                <h2>{props.head}</h2>
                <p>{props.content}</p>
                <Button style={buttonStyles} onClick={redirect}>Explore Project</Button>
            </div>
            
        </div>
        </>
    )
}
export default Card;