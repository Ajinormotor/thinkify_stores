
import YouLike from "../like/youLike"
import Header from "../ui/header"

import check from "../assets/img/check.svg"

const Confirm = () => {
  return (
    <section  className="flex flex-col items-center">

      <Header />

 


{/* hero section */}
<div  className="flex flex-col items-center justify-center h-[70vh] md:h-[90vh]">
 

<img src={check} alt="product-img" className="lg:w-[214px] lg:h-[214px] w-[130px] h-[130px] rounded-[32px]"  />
  <h1  className="font-popins lg:text-[40px] text-[25px] leaing-[72px]  items-center flex text-center lg:w-[692px] w-[100%]
  font-[400] py-[1rem] text-[#6A6A6A]">Thank you for shopping with us. Your order is on its way!</h1>
  <button className="bg-[#08AC9F] border-[1px] border-[#F5F5F5] rounded-[64px] md:w-[772px]   hover:text-[#08AC9F] hover:bg-[#fff] hover:border-[#08AC9F]
   lg:leading-[42px] leading-[35px] ">Continue Shopping</button>
</div>





<div>
<YouLike />
</div>




</section>
  )
}

export default Confirm