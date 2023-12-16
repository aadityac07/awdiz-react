import { useEffect,useState } from "react"

const Effect1 = ()=>{

    const [counter,setCounter] = useState(0)

    useEffect(()=>{alert("rendered")})
    return(
        <div>
            <h1>counter - {counter}</h1>
            <button onClick={()=>{setCounter((value)=>value+1)}}>+</button>
        </div>
    )
}

export default Effect1