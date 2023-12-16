import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from './Helpers/Axios.config'
import toast from 'react-hot-toast'

const UpdateProduct = () => {

    const {id} = useParams()
    const router = useNavigate()

    const [ productData , setProductData] = useState({})
    console.log(productData)
    async function getProductData(){
        try{
            const response = await api.get(`/product/single-product?id=${id}`)
            if(response.data.success){
                console.log(response.data)
                setProductData(response.data.product)
            }
        }catch(error){
            toast.error(error.response.data.message)
        }
    }

    function handleChange(event){
        setProductData({...productData , [event.target.name]: event.target.value})
        console.log(productData)
    }


    async function handleSubmit(event) {
     event.preventDefault()
        try{
            const response = await api.post('/product/update-product',{productData})
            if(response.data.success){
                toast.success('product updated')
                router("/your-products")
            }
        }catch(error){
            console.log(error)
            toast.error(error.response.data.message)
        }

    }

    useEffect(()=>{
        if(id){
            getProductData()
            console.log(id)
        }

        },[id])
  return (
    <div>
      Update product

      <form onSubmit={handleSubmit} action="">
      <label htmlFor="">Name</label>
                <input type="text" name="name" id="" onChange={handleChange} value={productData.name}/>
                <label htmlFor="">Category</label>
                <input type="text" name="category" id="" onChange={handleChange} value={productData.category}/>
                <label htmlFor="">Image</label>
                <input type="url" name="image" id="" onChange={handleChange} value={productData.image}/>
                <label htmlFor="">Product Price</label>
                <input type="number" name="price" id="" onChange={handleChange} value={productData.price}/><br />
                <input type="submit" className='button' value="update Product" />
      </form>
    </div>
  )
}

export default UpdateProduct
