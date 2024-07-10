

import Header from "../ui/header"

import check from "../assets/img/check.svg"
import { useNavigate } from "react-router-dom"
import YouLike from "../like/youLike"

const Confirm = () => {
const navigate = useNavigate()

  const checkoutclick = () =>{
    navigate('/')
  }


  return (
    <section  className="flex flex-col items-center">

      <div  className=" flex flex-col  items-center  hero-bg">

   
      <Header />

 


{/* hero section */}
<div  className="flex flex-col items-center justify-center w-[364px] h-[359px] bg-[#FFFFFFA3] rounded-[12px] md:h-[90vh]">
 

<img src={check} alt="product-img" className="lg:w-[172px] lg:h-[172px] w-[120px] h-[120px] rounded-[32px]"  />
  <h1  className="font-popins md:text-[24px] md:leading-[36px] text-[12px] leading-[18px]  items-center flex text-center lg:w-[692px] w-[100%]
  font-[400] py-[1rem] text-[#6A6A6A]">Thank you for shopping with us. Your order is on its way!</h1>
     <button className="bg-[#08AC9F] border-[1px]  hover:text-[#08AC9F] hover:bg-[#fff] hover:border-[#08AC9F]
           border-[#F5F5F5] rounded-[64px] md:w-[572px]  mt-[2rem] text-[13px] leading-[14px]
lg:h-[99px] md:h-[80px] lg:w-[637px] w-[240px] h-[40px] gap-[3px]  shadow-[#005D6A52] lg:text-[40px] md:text-[30px] text-[#FFFFFF] font-poppins font-[600]
 lg:leading-[42px] md:leading-[35px] "  onClick={checkoutclick}>Continue</button>

</div>





<YouLike />



</div>


</section>
  )
}

export default Confirm