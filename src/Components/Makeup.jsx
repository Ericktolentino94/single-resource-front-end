import { Link } from "react-router-dom";

function Makeup({ makeup }) {
    return(
        <div>
    <img scr={makeup.image} />
    <h1>{makeup.name}</h1>
    </div>
    )
}

export default Makeup;