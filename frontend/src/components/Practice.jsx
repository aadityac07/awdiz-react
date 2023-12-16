import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Practice = () => {
  const [productInfo,getProductInfo] = useState({name: "" , price : "" , image : ""})
  const handleInfo = (event) => {
    // console.log(event.target.value)
    getProductInfo({...productInfo,[event.target.name]:event.target.value})
    console.log(productInfo)
  }

 async function submitInfo(event){
    event.preventDefault()
    if(productInfo.name && productInfo.price && productInfo.image){
      try{
      const fetchData = await axios.post('https://fakestoreapi.com/products',{title : productInfo.name, price : productInfo.price , image : productInfo.image})
      console.log(fetchData.data.id)
      toast.success(`New Product Registered with id - ${fetchData.data.id}`)
    }
    catch{
      toast.error("something went wrong")
    }
    }
    else{
      toast.error("incomplete data")
    }
  }
  return (
    <div>
      <h1>form </h1>
      <form action="" onSubmit={submitInfo}>
        <label htmlFor="">Name</label>
        <input type="text" className="text" name='name'  onChange={handleInfo} value={productInfo.name}/>
        <label htmlFor="">Price</label>
        <input type="number" name="price" id=""  onChange={handleInfo} value={productInfo.price}/>
        <label htmlFor="">Product image</label>
        <input type="url" name="image" id="" onChange={handleInfo} value={productInfo.image}/> <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Practice
