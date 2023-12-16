import { createContext, useEffect, useReducer } from "react";
import api from "../Helpers/Axios.config";
import toast from "react-hot-toast";

 

 export const AuthContext = createContext()

 const ParentAuthContext = ({children})=>{

    const initialState = { user : null }

    const reducer = (state , action)=>{
        switch(action.type){
            case "LOGIN":
                return{...state , user :action.payload}

            case "LOGOUT":
                return{state ,user : null}

            default:
                return{state}
        }
    }

  
    const [state , dispatch] = useReducer(reducer , initialState)

    const Login =(data)=>{
        dispatch({type:"LOGIN",payload:data})
    }

    const Logout =()=>{
        localStorage.removeItem("my-token")
        dispatch({type:"LOGOUT"})
        toast.success("logout successful")
    }


    useEffect(()=>{

        async function currentUser (){
            try{
                const response = await api.post("/auth/currentUser" , {token})
             if(response.data.success){
                 Login(response.data.user)
             }
            }
            catch(error){
                console.log(error)
                toast.error(error.response.data.message)
            }
             
         }
 
         const token = JSON.parse(localStorage.getItem("my-token")) 
         if(token){
            currentUser()
         }
     },[])
 


    return(
        <AuthContext.Provider value = {{state , Login , Logout}}>
            {children}
        </AuthContext.Provider>
    )
 }

 export default ParentAuthContext