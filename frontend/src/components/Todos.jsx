import React, { memo } from 'react'

const Todos = ({todos , AddToDos}) => {
    alert("Alert inside from todos Component")
  return (
    <div>
    <h1>ToDos</h1>
    <button onClick={AddToDos}>Add ToDo</button>
    {todos.map((todo)=>(<div>{todo}</div>))}
    </div>
  )
}

export default memo(Todos)
