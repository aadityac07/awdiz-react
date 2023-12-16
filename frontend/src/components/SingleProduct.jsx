import axios from "axios"
import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import api from "./Helpers/Axios.config"
import { AuthContext } from "./context/AuthContext"

const SingleProduct = () => {
    const { id } = useParams()
    const {state} = useContext(AuthContext)
    const [productData, SetProductData] = useState({})
    console.log(productData)

    async function getSingleProductData() {
        try {
            const { data } = await api.get(`/product/single-product?id=${id}`)
            // const { data } = await axios.get(`http://localhost:8000/api/v1/product/single-product`)
            if (data.success) {
                SetProductData(data.product)
            }
        }
        catch (error) {
            toast.error(error.data.message)
        }
    }

    async function cart(id){
        console.log(id,"add to cart")
        if(state.user.id && id){
           try{
            const response = await api.post('/user/cart',{userId : state.user.id , productId : id})
            if(response.data.success){
                toast.success(response.data.message)
            }
           }catch(error){
            toast.error(error.data.message)
           }
        }else{
            toast.error("login first")
        }
    }


    useEffect(() => {
       
        if (id) {
            getSingleProductData()
        }
    }, [id])

    console.log(productData)
    return (
        <div className="single-product-component">
            {productData?._id ? <div className="single-product-container">
                <div className="single-product-image"><img src={productData.image} alt="" /></div>
                <div className="single-product-details">
                    <div className="s-p-title">{productData.name}</div>
                    <div className="s-p-price">Price : {productData.price} $</div>
                    <div className="s-p-description">{productData.description}</div>
                    <button onClick={()=>{cart(productData._id)}}> Add to cart </button>
                </div>
            </div> :
                <div>loading ... </div>
            }
        </div>
    )
}

export default SingleProduct