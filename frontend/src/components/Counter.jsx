import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Counter = ()=>{
    const navigate = useNavigate()
   
    // const msg = "hello there"
    let [counter , setCounter] = useState(0)

    

    // const [timer , setTimer] = useState(5)

   
    const decrement = ()=>{
        if(counter > 0){
            setCounter((prevCount)=>prevCount-1)

        }
    }

    useEffect(()=>{
        if(counter === 10){
            alert("stop")
        }
        })
    
return(
    <div>
        {/* <div>{timer}</div> */}
        <h1>counter - {counter}</h1>

        <button className="button-2"onClick={()=>{setCounter((value)=>value+1)}}>add 1</button>
        <button className="button-2"onClick={decrement} >subtract 1</button><br />
        <button className="button"onClick={()=>navigate("/")}>Homepage</button>
    </div>
)
}

export default Counter