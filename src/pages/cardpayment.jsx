import Header from "../ui/header"

import visa from "../assets/img/CardLogo's.svg"
import card from "../assets/img/creditcard.svg"
import graygood from "../assets/img/thinkify_tick.svg"
import CustomerLike from "../like/customerLike"
// import { useNavigate } from "react-router-dom"




const Cardpayment = () => {


  // const navigate = useNavigate()

  //   const checkoutclick = () => {
  //     navigate('/confirm');
  //   };

  return (
<section className="">

  <div className="hero-bg flex flex-col  items-center bg-[#FFFFFFA3] rounded-[40px]">
    


<Header />





<div  className="lg:mt-[5rem] mditems-center items-start justify-start md:justify-center flex flex-col
 bg-[#FFFFFFA3] lg:w-[1022px] rounded-[12px]
 lg:rounded-[40px] md:gap-[48px]  w-[364px] h-[392px] pt-[28px] pb-[98px]">



  {/* hero content */}

  <div className="items-start justify-center w-[100%] flex flex-col px-[2rem]">



      {/* Heading */}
      <h1 className="text-[#B607A4] font-poppins md:text-[40px] text-[18px] py-[0.4rem]
     font-[500] leading-[47px] lg:leading-[80px] text-start items-start justify-start">Choose Payment Method</h1>
     {/* first row */}

     <ul className="flex justify-end max-w-[100%] w-full items-end md:py-[0.4rem]" >

      <li  className="flex  gap-[13px] "><img src={visa}  alt="good" className="h-[30px] md:w-[230px] w-[70px]" /></li>
      
     </ul>

     {/* second row */}

     <div  className="flex flex-row gap-[5px] lg:gap-[19px] lg:w-[978px] lg:items-center w-[100%] py-[1rem] ">

      <div className="flex flex-col gap-[6px] md:w-[384px] lg:w-[384px]  md:h-[126px] ">
        <h1 className="font-[400] md:text-[32px] text-[10px] leading-[15px] md:leading-[48px] 
        font-poppins text-[#030802]">Card Number</h1>
        <p  className="text-[#6A6A6A] font-[400] md:text-[24px] 
        text-[8px] leading-[12px] md:leading-[36px]">Enter the 16-digit card number on the card</p>

      </div>


<div className="flex items-center lg:justify-center md:h-[77px]  lg:w-[603px] w-[164px] h-[23px]   gap-[19px]  py-[1rem]">

<div  className="md:rounded-[13px] h-[23px] rounded-[3px] gap-3 flex bg-[#FFFFFFA3] border-[1.6px] border-[#9F9F9F]
 items-center p-1 justify-center  lg:w-[430px]">

<img src={card}  alt="good" className="md:h-[35px] md:w-[23px] w-[12px] h-[12px]" />
  <input type="text"  placeholder="" className=" bg-transparent border-0 outline-none w-full " />


</div>


{/* goood */}
<div className="md:h-[77px] md:w-[51px] w-[26px] h-[23px]">
    <img src={graygood}  alt="good" className="w-full h-full object-fill hover:bg-green-500" />
</div>

</div>


     </div>

     {/* third row */}

     <div  className="flex flex-row justify-between gap-[5px] lg:gap-[28px] lg:w-[978px] w-[100%] py-[0.5rem]">

<div className="flex flex-col gap-[6px] md:w-[384px] md:h-[126px] lg:w-[384px]">
  <h1 className="font-[400] md:text-[32px] text-[10px] leading-[15px] md:leading-[48px] font-poppins text-[#030802]">Card number</h1>
  <p  className="text-[#6A6A6A] font-[400] md:text-[24px] text-[8px] leading-[12px] md:leading-[36px]">Enter the 16-digit card number on the card</p>

</div>


{/* input */}
<div  className="md:rounded-[13px] gap-[5px] md:h-[77px] md:w-[538px]  w-[164px] h-[24px] flex bg-[#FFFFFFA3] border-[1.6px] border-[#9F9F9F]
items-center justify-center">

<input type="text"  placeholder="" className=" bg-transparent border-0 outline-none w-full full  p-[5px] "/>

</div>




</div>

{/* fourth */}

<div  className="flex  justify-between lg:w-[978px]  lg:gap-[56px] w-[294px] h-[40px] my-[0.4rem]">

<div className="flex flex-col md:gap-[6px]  md:w-[100%] md:h-[126px] lg:w-[324px]">
  <h1 className="font-[400] md:text-[32px] text-[10px] leading-[15px] font-poppins text-[#030802]">Expiry date</h1>
  <p  className="text-[#6A6A6A] font-[400] md:text-[24px] text-[8px] leading-[12px]">Enter the expration date of the card</p>

</div>


{/* input */}
<div  className=" lg:h-[77px] py-[1rem] w-[163px] h-[27px]  lg:w-[534px]  flex 
items-start justify-start gap-[5px] md:gap-[30px]">

<input type="text"  placeholder="" className="md:rounded-[13px] rounded-[3px] bg-[#FFFFFFA3] border-[1.5px] border-[#9F9F9F]
 outline-none md:w-[87px] md:h-[78px] w-[27px] h-[24px] md:p-[5px] "/>

<h1 className=" md:w-[19px] w-[12px] h-[14px] px-[0.3rem] text-[15px] md:text-[45px] text-[#030802]">/</h1>

<input type="text"  placeholder="" className="md:rounded-[13px] rounded-[3px] bg-[#FFFFFFA3] border-[1.5px] border-[#9F9F9F]
 outline-none md:w-[87px] md:h-[78px] w-[27px] h-[24px]  p-[5px] "/>

<div  className="flex items-center justify-center  ">

<div className="flex flex-col md:gap-[6px] md:w-[106px] ">
  <h1 className="font-[400] md:text-[24px] text-[8px] md:leading-[36px] leading-[12px] font-poppins text-[#030802]">CVV2</h1>
  <p  className="text-[#6A6A6A] md:text-[20px] text-[6px] font-[300] md:leading-[30px] leading-[9px] font-poppins flex lg:w-[140px]">Security code</p>

</div>

<input type="text"  placeholder="" className="md:rounded-[13px] rounded-[3px] bg-[#FFFFFFA3] border-[1.5px] border-[#9F9F9F]
 outline-none md:w-[100px] md:h-[72px] w-[31px] h-[22px]  md:p-[5px] lg:ml-[3rem]"/>

</div>


</div>




</div>


 

  </div>


  <div  className="items-center flex justify-center w-[100%]">
  <button className="bg-[#08AC9F] border-[1px]  hover:text-[#08AC9F] hover:bg-[#fff] hover:border-[#08AC9F]
           border-[#F5F5F5] rounded-[64px] md:w-[572px]  mt-[2rem] text-[13px] leading-[14px]
lg:h-[99px] md:h-[80px] lg:w-[637px] w-[240px] h-[40px] gap-[3px]  shadow-[#005D6A52] lg:text-[40px] md:text-[30px] text-[#FFFFFF] font-poppins font-[600]
 lg:leading-[42px] md:leading-[35px] " >Continue</button>
  </div>

</div>

</div>

<div className="">
<CustomerLike />
</div>



</section>
  )
}

export default Cardpayment