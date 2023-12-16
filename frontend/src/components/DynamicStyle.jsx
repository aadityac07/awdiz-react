import React, { useState } from "react"
import './Dynamic.css'

const DynamicStyle = ()=>{

    const [isButtonActive,setIsButtonActive]=useState(false)
    const handleButtonClick = () => {
        setIsButtonActive(!isButtonActive)

    }
    const buttonClassName = isButtonActive ? 'Active-Button' : 'Inactive-Button'
    return(
        <div>
            <h1>Dynamic styling</h1>
            <button className={buttonClassName} onClick={handleButtonClick}>
                {isButtonActive ? 'Active' : 'Inactive'}
            </button>
        </div>
    )
}

export default DynamicStyle