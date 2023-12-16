// import axios from "axios"
import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"
import api from "./Helpers/Axios.config"
import { AuthContext } from "./context/AuthContext"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {
    const navigate = useNavigate()
    const  {state} = useContext(AuthContext)
    const [productDetails ,SetProductDetails] = useState({name : "", image : "" , price : "",category : ""})
    
    const handleChange = (event) =>{
        
        SetProductDetails({...productDetails ,[event.target.name]:event.target.value})
        // console.log(productDetails)
    
    }
   
   
   
    async function AddNewProduct(event){
        event.preventDefault()
        if(productDetails.name && productDetails.category && productDetails.price && productDetails.image && productDetails.price>0){
           try{
            const response = await api.post('/product/Add-product',{name : productDetails.name,price : productDetails.price,image : productDetails.image,category :productDetails.category,id : state?.user?.id})
            console.log(response.data)
            if(response.data.success){
                toast.success(`Registered with Product id - ${response.data.id}`)
                SetProductDetails({name : "",category : "", image : "" , price : ""})
                navigate("/your-products")
            }
           
        }
        catch(error){
            toast.error(error.response.data.message)
        }
        }
        else{
            toast.error("all fields are mandatory")
        }
        console.log(productDetails)
    }
    

    useEffect(()=>{
        console.log(state.user)
        if(state?.user && state?.user?.name === undefined || state?.user && state?.user?.name === null){
            // setTimeout(
                // ()=>{
                    navigate("/login")
                // },2000
            // )
           
            toast.error("login required")
        }
       
        
       },[state]
    )
    return(
        <div>
            <h1>Add new Product</h1>
            <form action=""onSubmit={AddNewProduct}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="" onChange={handleChange} value={productDetails.name}/>
                <label htmlFor="">Category</label>
                <input type="text" name="category" id="" onChange={handleChange} value={productDetails.category}/>
                <label htmlFor="">Image</label>
                <input type="url" name="image" id="" onChange={handleChange} value={productDetails.image}/>
                <label htmlFor="">Product Price</label>
                <input type="number" name="price" id="" onChange={handleChange} value={productDetails.price}/><br />
                <input type="submit" value="Add Product" />
                
            </form>
        </div>
    )
}

export default AddProduct