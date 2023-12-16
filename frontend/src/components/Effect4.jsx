import { useEffect,useState } from "react"

const Effect4 = ()=>{

    const [counter,setCounter] = useState(0)
    const [add,addCounter] = useState(0)
    const [grace , setGrace] = useState(0)

    useEffect(()=>{alert("rendered")},[add,counter,grace])
    return(
        <div>
            <h1>counter - {counter}</h1>
            <button onClick={()=>{setCounter((value)=>value+1)}}>+</button>
            <h1>counter - {add}</h1>
            <button onClick={()=>{addCounter((value)=>value+1)}}>+</button>
            <h1>counter  grace - {grace}</h1>
            <button onClick={()=>{setGrace((value)=>value+1)}}>+</button>
        </div>
    )
}

export default Effect4