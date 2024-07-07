import Categories from "../component/categories"
import Hero from "../component/hero"

import ProductCard from "../component/productCard"
import Header from "../ui/header"

const Home = () => {
  return (
    <div  className="flex flex-col items-center justify-center overflow-x-hidden">

      <div  className="hero-bg">
        <Header />
        <Hero />
      </div>

      <Categories />
      <ProductCard />
   


    </div>
  )
}

export default Home