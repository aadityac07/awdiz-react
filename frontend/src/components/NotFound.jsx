import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import React from 'react'

const NotFound = ()=>{
    const navigate = useNavigate()
    const [timer , CountTimer] = useState(3)
    let countInterval
    function Countdown(){
        countInterval = setInterval(()=>{
            CountTimer((value)=> value - 1)
            if(timer === 0){
                navigate("/")
            }
        },1000)
    }
    useEffect(()=>{
        Countdown()
        return ()=>{
            clearInterval(countInterval)
        }
    })
    return(
        <div>
            <h1>Page not found redirecting to Homepage in {timer}...</h1>
        </div>
    )
}

export default NotFound