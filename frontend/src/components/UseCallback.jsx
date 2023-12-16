import React, { useCallback, useState } from 'react'
import Todos from './Todos'
const UseCallback = () => {
    const [counter , setCounter] = useState(0)

    const [ todos , setTodos] = useState([])

    const AddToDos =useCallback(()=>{
        setTodos([...todos , "New ToDo"])
    },[todos])
    function AddCounter(){
        setCounter((value)=>value + 1)
    }
  return (
    <div>
      
      <h1>Counter - {counter}</h1>
      <button onClick={AddCounter}>Add Counter</button>
      <Todos todos={todos} AddToDos = {AddToDos}/>
    </div>
  )
}

export default UseCallback
