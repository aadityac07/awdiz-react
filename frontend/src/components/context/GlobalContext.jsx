import React, { useReducer } from 'react'
import { createContext } from 'react'

export const MyContext = createContext()

const reducer = (state , action) =>{
    switch(action.type) {
        case 'INCREMENT' :
            return {...state , counter : state.counter + 1}
            
        case 'DECREMENT' :
            if(state.counter > 0){
                return {...state , counter : state.counter - 1}
            }
            
        case 'RESET' :
            return {...state , counter : 0}
        default :
        return state;
    }
}

const GlobalContext = ({children}) => {
    const initialState ={counter : 0}
    const [state , dispatch] = useReducer(reducer , initialState )
  return (
    <MyContext.Provider value = {{state , dispatch}}>
      {children}
    </MyContext.Provider>
  )
}

export default GlobalContext
