import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import About from "../pages/about"
import ProductDetails from "../pages/productDetails"
import Checkoutdetails from "../pages/checkoutdetails"
import Confirm from "../pages/confirm"
import Payment from "../pages/payment"
import Cart from "../pages/cart"


const Routs = () => {
  return (
   <div>
    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/:id"  element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkoutdetails />} />
        <Route path="/confirm" element={<Confirm />}  />
        <Route path="/payment"  element={<Payment />} />
        <Route path="/cart"   element={<Cart />} />

        <Route path="*"  element={<Navigate to="/"  />}   />

    </Routes>
   </div>
  )
}

export default Routs