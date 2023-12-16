import React from "react"
import { useParams } from "react-router-dom"
function Product(){
   

const {id} = useParams()

    return(
        <div>
            <h1>{id}</h1>
            {/* <button></button> */}
        </div>
    )
}

export default Product