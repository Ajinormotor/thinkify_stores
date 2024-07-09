import { Navigate, Route,  Routes } from "react-router-dom"
import Home from "../pages/home"
import ProductDetails from "../pages/productDetails"
import Checkoutdetails from "../pages/checkoutdetails"
import Confirm from "../pages/confirm"
import Payment from "../pages/payment"
import Cart from "../pages/cart"
import Cardpayment from "../pages/cardpayment"
import ScrollTop from "../ui/scrollTop"


const Routs = () => {
  return (
   <div>

<ScrollTop />
    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/:id"  element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkoutdetails />} />
        <Route path="/confirm" element={<Confirm />}  />
        <Route path="/payment"  element={<Payment />} />
        <Route path="/cart"   element={<Cart />} />
        <Route path="/card"   element={<Cardpayment />} />

        <Route path="*"  element={<Navigate to="/"  />}   />


    </Routes>
 
   </div>
  )
}

export default Routs