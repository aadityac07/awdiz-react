import { useNavigate } from "react-router-dom";
import React from "react";

function Params (){
    const router = useNavigate()

    return(
        <div>
            <button onClick={()=>router("/Product/123123")}>go to product</button>
        </div>
    )
}

export default Params

