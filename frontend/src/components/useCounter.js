import { useState } from "react"


function useCounter (initialValue = 0) {
    const[counter , setCounter] = useState(initialValue)

    function Increment(){
        setCounter((value)=>value + 1)
    }
    function Decrement(){
        
            setCounter((value)=>value - 1)
        
        
    }
    function Reset(){
        setCounter(0)
    }
  return [counter , Increment, Decrement, Reset]
}

export default useCounter
