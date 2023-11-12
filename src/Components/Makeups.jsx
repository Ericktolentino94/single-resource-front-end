import { useState, useEffect } from "react"
import Makeup from "./Makeup";

const API = import.meta.env.VITE_API_URL;

function Makeups() {
    const [makeups, setMakeups] = useState([]);
    useEffect(()=>{
        fetch(`${API}/makeups`)
        .then(response => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);
            setMakeups(responseJSON.data.payload);
        })
        .catch((err) => {
            console.log(err)
        });
    }, []);
    return (
         <div className = "Makeups">
            <div>
                {makeups.map((makeup) => {
                    return <Makeup key ={makeup.id} makeup={makeup} index={makeup.id} />
                })}
            </div>

         </div>
    );
}

export default Makeups;