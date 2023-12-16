import React ,{ useEffect ,useState} from "react"
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
// import axios from "axios"
import './Dynamic.css'
import api from "./Helpers/Axios.config";

function Products(){
    const [products, setProducts] = useState([]);
    console.log(products)
    const router = useNavigate();
    useEffect(() => {
        // toast.success("Page rendered on browser..")
        async function getProducts() {
            try {
                const { data } = await api.get('/product/Allproducts');
                // console.log(data, "data here")
                if(data.success){
                    setProducts(data.products)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
        getProducts()
    }, [])
    return (
        <div >
            {products?.length ? <div style={{display:"flex",flexWrap:'wrap',justifyContent:'space-around',paddingBottom:'50px'}} >{products.map((pro)=>(
                // <div onClick={()=> router(`/singleProcuct/${pro.id}`)} style={{width:'23%',height:'400px'}} className="Product-container">
                <div key={pro._id} onClick={()=> router(`/singleProduct/${pro._id}`)}  style={{width:'23%',height:'400px'}} className="Product-container">
                    
                    <div style={{width:"100%",height:'300px'}}><img style={{width:'100%',height:'100%',objectFit:'contain'}} src={pro.image} alt="" /></div>
                    <div className="product-name">{pro.name}</div>
                    <div className="product-price">{pro.price}$</div>
                    <div><input type="button" value="view" /></div>
                    {/* <div>{pro.description}</div> */}
                </div>
            ))}</div> : <div>Loading...</div>}
           
        </div>
    )
}

export default Products