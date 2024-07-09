
import Hero from "../component/hero"

import ProductCard from "../component/productCard"
import Header from "../ui/header"
import cart2 from "../assets/img/thinkify_cart3.svg"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div  className="flex flex-col items-center justify-center w-[100%] overflow-x-hidden ">

      <div  className="hero-bg lg:mb-[2rem]">
        <Header />
        <Hero />
      </div>

      <div className="lg:mt-[1rem]">

        <div  className="fixed top-[80vh] md:top-[60vh] right-2  rounded-[50%] flex items-center 
        justify-center md:w-[150px] md:h-[150px] w-[80px] h-[80px] bg-[#792E7A]">
       <Link to="/cart"><img src={cart2} alt="bulk_pics" className="md:w-[77px] md:h-[66px] h-[60px] w-[60px]" /></Link> 
        </div>

      <ProductCard />
      </div>

     
   
    </div>
  )
}

export default Home