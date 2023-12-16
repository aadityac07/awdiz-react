import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const router = useNavigate()
    const { state, Logout } = useContext(AuthContext)

    return (
        <div style={{ display: "flex", justifyContent: 'space-around',width: "100vw", height: "40px",backgroundColor:"grey",color:'white', fontSize: "20px" ,position:'absolute',top:'0px',left:"0px"}}>
            <div onClick={() => router('/')} style={{ width: '20%'}}>Home</div>
            <div style={{ width: '50%', display: "flex", justifyContent: 'space-around' }}>
                <div onClick={() => router('/products')}>Products</div>
                {state?.user?.id &&
                    <div style={{ display: "flex", justifyContent: 'space-around' }}>
                        <div onClick={() => router('/addProduct')}>Add Product </div>
                        <div onClick={() => router('/your-products')}>Your Products</div>
                    </div>
                }
            </div>
            <div style={{ width: '20%', display: "flex", justifyContent: 'space-around' }}>
                {state?.user?.id ? <>
                    <div onClick={() => router('/profile')}>Profile</div>
                    <div onClick={() => router('/cart')}>Cart</div>
                    <div onClick={Logout}>Logout</div>
                </> : <div onClick={() => router('/login')}>Login</div>}
            </div>
        </div >
    )
}

export default Navbar
