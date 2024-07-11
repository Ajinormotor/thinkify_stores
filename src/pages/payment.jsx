import CustomerLike from "../like/customerLike"

import Header from "../ui/header"

import paycard from  "../assets/img/card.svg"
import usdt from "../assets/img/usdt.svg"
import paypal from "../assets/img/paypal.svg"
import ussd from "../assets/img/ussd.svg"
import { useNavigate } from "react-router-dom"
import {  } from "react"
import { useDispatch } from "react-redux"
import { removeItem } from "../redux/Carts"




const Payment = () => {
 const navigate = useNavigate()

 const dispatch = useDispatch()




    const handleRemoveItem = (itemId) => {
        dispatch(removeItem({ id: itemId }));
      };
    
        const paymentclick = () =>{
            if(handleRemoveItem){
navigate('/card')
            } else{
                navigate('/')
            }
    
          }





  return (
    <section  className=" flex flex-col">

 

        <div className="hero-bg  flex flex-col w-[100%]">

            <div>
            <Header />
            </div>




<div className="w-[100%] lg:w-[1222px] bg-[#FFFFFFA3] lg:rounded-[40px] 
gap-[6px] flex flex-col pt-[3rem]  items-start">



    
{/* heading */}
    <div  className="items-start justify-center ml-[-3rem] flex  w-[100%]">
    <h1 className="text-[#B607A4] font-poppins md:text-[40px] text-[11px] leading-[12px]
     font-[500] md:leading-[37px] lg:leading-[80px] text-start items-start justify-start">Choose Payment Method</h1>
    </div>


{/* hero section */}
<div  className="flex flex-col items-center w-[100%] ">


<div  className="flex flex-col md:my-[2rem] gap-[10px]  relative">

{/* first row */}
<div  className="grid grid-cols-2 justify-items-center  items-center 
 w-[100%] space-x-3 my-[1rem]  md:space-y-0">

    {/* card box */}
    <div  className="flex bg-[#F8F8F8]  md:h-[140px]  md:w-[299px]
     items-center justify-center  w-[130px] h-[60px] md:rounded-[24px]  gap-[5px] rounded-[7px]  md:gap-[2rem] md:px-[2rem]"
     style={{boxShadow: ' 0px 9px 20.58px 1.93px #BDBDBD52'}}>
        <img src={paycard} alt="bulk_pics" className="md:w-[88px] md:h-[88px] w-[31px] h-[31px]" />
        <h1  className="text-[#9F9F9F] font-[500] md:text-[24px]  text-[10px] leading-[11px]
        md:leading-[26px] md:w-[295px]  font-poppins">Pay with<br /> card </h1>

    </div>

       {/* paypal box */}
       <div  className="flex bg-[#F8F8F8] md:h-[140px]  md:w-[299px]
     items-center justify-center   w-[130px] h-[60px] md:rounded-[24px]  gap-[5px] rounded-[7px]  md:gap-[2rem] md:px-[2rem]">
        <img src={paypal} alt="bulk_pics" className="md:w-[88px] md:h-[88px] w-[31px] h-[31px] " />
        <h1  className="text-[#9F9F9F] font-[500] text-[10px] leading-[11px]
        md:text-[24px] md:leading-[26px] md:w-[295px]  font-poppins">Pay with <br  /> paypal</h1>

    </div>


</div>

    {/*second row */}
    <div  className="grid grid-cols-2 items-center justify-center w-[100%] space-x-3   md:space-y-0">

{/* usdt box */}
<div  className="flex bg-[#F8F8F8]  md:h-[140px]  md:w-[299px]
     items-center justify-center  w-[130px] h-[60px] md:rounded-[24px]  gap-[5px] rounded-[7px]  md:gap-[2rem] md:px-[2rem]">
        <img src={usdt} alt="bulk_pics" className="md:w-[88px] md:h-[88px] w-[31px] h-[31px]" />
        <h1  className="text-[#9F9F9F] font-[500]  text-[10px] leading-[11px]
        md:text-[24px] md:leading-[26px] md:w-[295px]  font-poppins">Pay with <br />usdt</h1>

    </div>



{/* arrial box */}
<div  className="flex bg-[#F8F8F8]  md:h-[140px]  md:w-[299px]
     items-center justify-center  w-[130px] h-[60px] md:rounded-[24px]  gap-[5px] rounded-[7px]  md:gap-[2rem] md:px-[2rem]">
        <img src={ussd} alt="bulk_pics" className="md:w-[88px] md:h-[88px]  w-[31px] h-[31px]" />
        <h1  className="text-[#9F9F9F] font-[500]  text-[10px] leading-[11px]
        md:text-[24px] md:leading-[26px] md:w-[295px]  font-poppins">Pay with <br />ussd</h1>

    </div>


</div>

</div>




<button onClick={paymentclick} className="bg-[#08AC9F] border-[1px] border-[#F5F5F5] rounded-[64px] md:w-[637px] mt-[1rem]
lg:h-[99px] h-[40px] w-[240px] gap-[3px]  shadow-[#005D6A52] lg:text-[56px] md:text-[40px] text-[14px] text-[#FFFFFF] font-poppins font-[600]
 lg:leading-[42px] md:leading-[36px] leading-[13px] ">Continue </button>
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