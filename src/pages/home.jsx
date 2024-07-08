
import Hero from "../component/hero"

import ProductCard from "../component/productCard"
import Header from "../ui/header"

const Home = () => {
  return (
    <div  className="flex flex-col items-center justify-center w-[100%] overflow-x-hidden ">

      <div  className="hero-bg lg:mb-[2rem]">
        <Header />
        <Hero />
      </div>

      <div className="lg:mt-[1rem]">

      <ProductCard />
      </div>

     
   
    </div>
  )
}

export default Home