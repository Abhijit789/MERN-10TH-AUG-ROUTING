import { useLoaderData, useParams } from "react-router-dom"

function ProductById() {
    let data=useLoaderData()
    console.log("product by id",data);
    
    let{id}=useParams();

    console.log(id);
    
  return (
    <div>
        <h2>Product {id}</h2>
        {
            data?.map(user=><li>{user.name}</li>)
        }
    </div>
  )
}

export default ProductById