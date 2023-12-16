import React, { useReducer } from 'react'

const reducer = (state , action) => {
  console.log(state , action)
  switch (action.type) {
    case "INCREMENT" :
      return {...state,count : state.count + 1}
    case "DECREMENT" :
      return {...state,count : state.count - 1}
    case "RESET" :
      return {...state,count : 0}
      default :
      return state
    }
  }
  const UseReducer = () => {
  const initailState = {count : 0}
    const [state , dispatch] = useReducer(reducer,initailState)

    function Increment(){
      dispatch({type : "INCREMENT"})
    }

    function Decrement (){
      dispatch({type : "DECREMENT"})
    }

    function Reset(){
      dispatch({type : "RESET"})
    }
  return (
    <div>
      <div>Counter : {state.count}</div>
      <button onClick={Increment} className='button'>+</button>
      <button onClick={Decrement}className='button'>-</button>
      <button onClick={Reset} className='button'>Reset</button>
    </div>
  )
}

export default UseReducer
