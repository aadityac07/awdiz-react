import { useEffect,useState } from "react"

const Effect3 = ()=>{

    const [counter,setCounter] = useState(0)
    const [add,addCounter] = useState(0)

    useEffect(()=>{alert("rendered")},[add])
    return(
        <div>
            <h1>counter - {counter}</h1>
            <button onClick={()=>{setCounter((value)=>value+1)}}>+</button>
            <h1>counter - {add}</h1>
            <button onClick={()=>{addCounter((value)=>value+1)}}>+</button>
        </div>
    )
}

export default Effect3