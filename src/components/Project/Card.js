import "./Card.css";
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
                <h4>{props.head}</h4>
                <p>{props.content}</p>
                <button onClick={redirect}>Explore Project</button>
            </div>
            
        </div>
        </>
    )
}
export default Card;