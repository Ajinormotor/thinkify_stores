import CustomerLike from "../like/customerLike"
import YouLike from "../like/youLike"
import Header from "../ui/header"

import paycard from "../assets/img/paycard.svg"




const Payment = () => {
  return (
    <section  className="flex flex-col  w-[100%]">

    <Header />

<div>

    <div  className="p-[10px]">
    <h1 className="text-[#B607A4] font-poppins lg:text-[48px] text-[32px]
     font-[500] leading-[37px] lg:leading-[80px] ">Choose Payment Method</h1>
    </div>


{/* hero section */}
<div  className="flex flex-col items-center justify-center ">


<div  className="flex flex-col my-[2rem]  relative">

{/* first row */}
<div  className="flex  flex-col md:flex-row items-center justify-between
 w-[100%] md:space-x-3 my-[1rem] space-y-3 md:space-y-0">

    {/* bulk box */}
    <div  className="flex bg-[#F8F8F8] gap- rounded-[24px] lg:w-[482px] h-[182px] shadow-[#BDBDBD52]
     items-center justify-around  w-[100%]  gap-[2rem] px-[2rem]">
        <img src={paycard} alt="bulk_pics" className="md:w-[177px] md:h-[135px] " />
        <h1  className="text-[#9F9F9F] font-[500] md:text-[48px] 
        text-[35px] leading-[60px] md:w-[295px]  font-poppins">Pay with Card</h1>

    </div>

       {/* discount box */}
       <div  className="flex bg-[#F8F8F8] gap- rounded-[24px] lg:w-[482px] h-[182px] shadow-[#BDBDBD52]
     items-center justify-around  w-[100%]  gap-[2rem] px-[2rem]">
        <img src={paycard} alt="bulk_pics" className="md:w-[177px] md:h-[135px] " />
        <h1  className="text-[#9F9F9F] font-[500] md:text-[48px] 
        text-[35px] leading-[60px] md:w-[295px]  font-poppins">Pay with Card</h1>

    </div>


</div>

    {/*second row */}
    <div  className="flex flex-col md:flex-row items-center justify-center w-[100%] md:space-x-3 my-[1rem] space-y-3 md:space-y-0">

{/* special box */}
<div  className="flex bg-[#F8F8F8] gap- rounded-[24px] lg:w-[482px] h-[182px] shadow-[#BDBDBD52]
     items-center justify-around  w-[100%]  gap-[2rem] px-[2rem]">
        <img src={paycard} alt="bulk_pics" className="md:w-[177px] md:h-[135px] " />
        <h1  className="text-[#9F9F9F] font-[500] md:text-[48px] 
        text-[35px] leading-[60px] md:w-[295px]  font-poppins">Pay with Card</h1>

    </div>


{/* arrial box */}
<div  className="flex bg-[#F8F8F8] gap- rounded-[24px] lg:w-[482px] h-[182px] shadow-[#BDBDBD52]
     items-center justify-around  w-[100%]  gap-[2rem] px-[2rem]">
        <img src={paycard} alt="bulk_pics" className="md:w-[177px] md:h-[135px] " />
        <h1  className="text-[#9F9F9F] font-[500] md:text-[48px] 
        text-[35px] leading-[60px] md:w-[295px]  font-poppins">Pay with Card</h1>

    </div>


</div>

</div>



<button className="bg-[#08AC9F] border-[1px] border-[#F5F5F5] rounded-[64px] md:w-[772px] 
lg:h-[136px] h-[80px] w-[90%] gap-[3px]  shadow-[#005D6A52] lg:text-[56px] tex-[30px] text-[#FFFFFF] font-poppins font-[600]
 lg:leading-[42px] leading-[35px] ">Continue Shopping</button>
</div>





<div>
<YouLike />
</div>

<div>
<CustomerLike />
</div>


</div>

</section>
  )
}

export default Payment