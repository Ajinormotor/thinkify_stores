import CustomerLike from "../like/customerLike"

import Header from "../ui/header"

import paycard from  "../assets/img/card.svg"
import usdt from "../assets/img/usdt.svg"
import paypal from "../assets/img/paypal.svg"
import ussd from "../assets/img/ussd.svg"
import { useNavigate } from "react-router-dom"




const Payment = () => {
 const navigate = useNavigate()
    const paymentclick = () =>{
        navigate('/card')
      }

  return (
    <section  className=" flex flex-col">

 

        <div className="hero-bg  flex flex-col w-[100%]">

            <div>
            <Header />
            </div>




<div className="w-[100%] lg:w-[1222px] bg-[#FFFFFFA3] lg:rounded-[40px] 
gap-[6px] flex flex-col pt-[1rem] md:pt-[3rem]  items-start">



    
{/* heading */}
    <div  className="items-start justify-center flex  w-[100%]">
    <h1 className="text-[#B607A4] font-poppins text-[40px]
     font-[500] leading-[37px] lg:leading-[80px] text-start items-start justify-start">Choose Payment Method</h1>
    </div>


{/* hero section */}
<div  className="flex flex-col items-center w-[100%] ">


<div  className="flex flex-col my-[2rem]  relative">

{/* first row */}
<div  className="flex  flex-col md:flex-row items-center justify-between
 w-[100%] md:space-x-3 my-[1rem] space-y-3 md:space-y-0">

    {/* card box */}
    <div  className="flex bg-[#F8F8F8] gap- rounded-[24px] lg:w-[410px] h-[192px] shadow-[#BDBDBD52]
     items-center justify-around  w-[100%]  gap-[2rem] px-[2rem]">
        <img src={paycard} alt="bulk_pics" className="w-[100px] h-[99px] " />
        <h1  className="text-[#9F9F9F] font-[500] text-[32px] 
        leading-[36px] md:w-[295px]  font-poppins">Pay with<br /> card </h1>

    </div>

       {/* paypal box */}
       <div  className="flex bg-[#F8F8F8] gap- rounded-[24px] lg:w-[410px] h-[192px] shadow-[#BDBDBD52]
     items-center justify-around  w-[100%]  gap-[2rem] px-[2rem]">
        <img src={paypal} alt="bulk_pics" className="w-[100px] h-[99px] " />
        <h1  className="text-[#9F9F9F] font-[500]
        text-[32px] leading-[36px] md:w-[295px]  font-poppins">Pay with <br /> paypal</h1>

    </div>


</div>

    {/*second row */}
    <div  className="flex flex-col md:flex-row items-center justify-center w-[100%] md:space-x-3 my-[1rem] space-y-3 md:space-y-0">

{/* usdt box */}
<div  className="flex bg-[#F8F8F8] gap- rounded-[24px] lg:w-[410px] h-[192px] shadow-[#BDBDBD52]
     items-center justify-around  w-[100%]  gap-[2rem] px-[2rem]">
        <img src={usdt} alt="bulk_pics" className="mw-[100px] h-[100px] " />
        <h1  className="text-[#9F9F9F] font-[500] 
        text-[32px] leading-[36px] md:w-[295px]  font-poppins">Pay with <br />usdt</h1>

    </div>



{/* arrial box */}
<div  className="flex bg-[#F8F8F8] gap- rounded-[24px] lg:w-[482px] h-[182px] shadow-[#BDBDBD52]
     items-center justify-around  w-[100%]  gap-[2rem] px-[2rem]">
        <img src={ussd} alt="bulk_pics" className="w-[100px] h-[99px] " />
        <h1  className="text-[#9F9F9F] font-[500] 
        text-[32px] leading-[36px] md:w-[295px]  font-poppins">Pay with <br />ussd</h1>

    </div>


</div>

</div>




<button onClick={paymentclick} className="bg-[#08AC9F] border-[1px] border-[#F5F5F5] rounded-[64px] md:w-[772px] 
lg:h-[136px] h-[80px] w-[90%] gap-[3px]  shadow-[#005D6A52] lg:text-[56px] tex-[30px] text-[#FFFFFF] font-poppins font-[600]
 lg:leading-[42px] leading-[35px] ">Continue </button>
</div>



</div>


</div>


<div  className=" ">
<CustomerLike />
</div>


</section>
  )
}

export default Payment