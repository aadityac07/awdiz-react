import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthContext'
import toast from 'react-hot-toast'
import api from './Helpers/Axios.config'
import { useNavigate } from 'react-router-dom'

const YourProducts = () => {
    const router = useNavigate()
    const {state} = useContext(AuthContext)
    // console.log(state)
    const [yourProducts , setYourProduct] = useState([])
    console.log(yourProducts,"all your products ")

    async function getYourProduct(){
        try{
            const response = await api.post('/product/your-products', { id: state?.user?.id })
            if(response.data.success){
                console.log(response.data)
                setYourProduct(response.data.allProducts)
            }
        }catch(error){
            console.log(error)
            toast.error(error?.response.data.message)
        }
    }
   

    async function deleteProduct(id){
        try{
            const response = await api.delete('/product/delete-product',{params : {id}})
            if(response.data.success){
                getYourProduct()
                toast.success("product deleted successfully")
            }
        }
        catch(error){
            toast.error(error.response.data.message)
        }
    }

    useEffect(()=>{
        if(state?.user && state?.user?.name === undefined){
            toast.error("user not found")
            router('/login')
        }
        if (state?.user && state?.user?.name !== undefined) {
            // console.log("state?.user?.id", state)
            getYourProduct()
        }
    },[state])
  return (
    <div>
        <h1>your Products</h1>
       <div >
       {yourProducts?.length ? <div style={{display:'flex'}}>
        {yourProducts.map((pro)=>(
            <div style={{height:'400px' ,margin:"50px"}} key={pro._id}>
                <div style={{height:"300px"}}>
                    <img src={pro.image} alt="" />
                </div>
                <div style={{color:'black'}}>{pro.name}</div>
                <div style={{color:'black'}}> $ {pro.price}</div>
                <button onClick={()=>router(`/update-product/${pro._id}`)}>Update</button>
                <button onClick={()=>deleteProduct(pro._id)}>delete</button>

            </div>
            
        ))}
       </div> : <div> loading.... </div> }
       </div>
    </div>
  )
}

export default YourProducts


