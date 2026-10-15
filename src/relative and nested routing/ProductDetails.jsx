import { Outlet } from "react-router-dom"

function ProductDetails() {

  return (
    <div>

        <h3>All Products</h3>
        <Outlet/>
    </div>
  )
}

export default ProductDetails