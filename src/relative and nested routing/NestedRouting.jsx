import { createBrowserRouter } from "react-router-dom";
import ContactList from "../compoenets/contact list/ContactList";
import ProductById from "./ProductById";
import ProductDetails from "./ProductDetails";
import API from "../axios configuration/axiosConfig";
import PageNotFound from "./PageNotFound";

let nestedRouter=createBrowserRouter([
    
    {
        path:"/products",
        element:<ProductDetails/>,
        children:[
            {
                path:"productid/:id",
                element:<ProductById/>,
                loader:async ()=>{
                    try{
                        let resp=await API.get("/contacts");
                        if(resp.status===200){
                            console.log(resp.data);
                            
                        }
                        return resp.data
                    }catch(error){
                        console.error("data is not found")
                    }
                }
            }
        ]
        
    },
    {
        path:"*",
        element:<PageNotFound/>
    }
])

export default nestedRouter;