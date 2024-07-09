import Header from "../ui/header"
import good from "../assets/img/Success.svg"
import visa from "../assets/img/CardLogo's.svg"
import card from "../assets/img/creditcard.svg"
import graygood from "../assets/img/graycheck.svg"
import CustomerLike from "../like/customerLike"
import { useNavigate } from "react-router-dom"


const Cardpayment = () => {
  const navigate = useNavigate()
  const paymentclick = () =>{
      navigate('/confirm')
    }

  return (
<section className="">

  <div className="hero-bg flex flex-col  items-center bg-[#FFFFFFA3] rounded-[40px]">
    


<Header />





<div  className="lg:mt-[5rem] mditems-center items-start justify-start md:justify-center flex flex-col bg-[#FFFFFFA3] lg:w-[1022px]
 lg:rounded-[40px] md:gap-[48px]  w-[100%] pt-[28px] pb-[98px]">



  {/* hero content */}

  <div className="items-start justify-center w-[100%] flex flex-col px-[2rem]">



      {/* Heading */}
      <h1 className="text-[#B607A4] font-poppins md:text-[40px] text-[30px] py-[0.5rem]
     font-[500] leading-[37px] lg:leading-[80px] text-start items-start justify-start">Choose Payment Method</h1>
     {/* first row */}

     <ul className="flex justify-between max-w-[100%] w-full items-center py-[0.5rem]" >

      <li  className="flex flex-row gap-3"><img src={good}  alt="good" className="w-[23px] h-[23px]" /> <h1 className="">Set as Default</h1></li>
      <li  className="flex  gap-[13px] "><img src={visa}  alt="good" className="h-[35px] md:w-[230px] w-[130px]" /></li>
      
     </ul>

     {/* second row */}

     <div  className="flex flex-col lg:flex-row lg:gap-[19px] lg:w-[978px] lg:items-center w-[100%] py-[1rem] ">

      <div className="flex flex-col gap-[6px] md:w-[384px] lg:w-[384px]  md:h-[126px] ">
        <h1 className="font-[400] md:text-[32px] text-[25px] leading-[48px] font-poppins text-[#030802]">Card Number</h1>
        <p  className="text-[#6A6A6A] font-[400] md:text-[24px] text-[19px] leading-[36px]">Enter the 16-digit card number on the card</p>

      </div>


<div className="flex items-center lg:justify-center md:h-[77px]  lg:w-[603px]    gap-[19px]  py-[1rem]">
<div  className="rounded-[13px] h-[77px]  flex bg-[#FFFFFFA3] border-[1.6px] border-[#9F9F9F]
 items-center p-1 justify-center  lg:w-[430px]">

<img src={card}  alt="good" className="h-[35px] w-[23px]" />
  <input type="text"  placeholder="" className=" bg-transparent border-0 outline-none w-full " />


</div>


{/* goood */}
<div className="h-[77px] w-[51px]">
    <img src={graygood}  alt="good" className="w-full h-full object-contain hover:bg-green-500" />
</div>

</div>


     </div>

     {/* third row */}

     <div  className="flex flex-col lg:flex-row justify-between lg:gap-[28px] lg:w-[978px] w-[100%] py-[0.5rem]">

<div className="flex flex-col gap-[6px] md:w-[384px] md:h-[126px] lg:w-[384px]">
  <h1 className="font-[400] md:text-[32px] text-[25px] leading-[48px] font-poppins text-[#030802]">Card Number</h1>
  <p  className="text-[#6A6A6A] font-[400] md:text-[24px] text-[19px] leading-[36px]">Enter the 16-digit card number on the card</p>

</div>


{/* input */}
<div  className="rounded-[13px] h-[77px] md:w-[538px]  w-[100%] flex bg-[#FFFFFFA3] border-[1.6px] border-[#9F9F9F]
items-center justify-center">

<input type="text"  placeholder="" className=" bg-transparent border-0 outline-none w-full  p-[5px] "/>

</div>




</div>

{/* fourth */}

<div  className="flex flex-col lg:flex-row justify-between lg:w-[978px]  lg:gap-[56px] w-[100%] my-[0.5rem]">

<div className="flex flex-col md:gap-[6px] w-[384px] md:w-[100%] md:h-[126px] lg:w-[324px]">
  <h1 className="font-[400] md:text-[32px] text-[25px] leading-[48px] font-poppins text-[#030802]">Expiry date</h1>
  <p  className="text-[#6A6A6A] font-[400] md:text-[24px] text-[19px] leading-[36px]">Enter the expration date of the card</p>

</div>


{/* input */}
<div  className=" lg:h-[77px] py-[1rem]  lg:w-[534px]  flex 
items-start justify-start gap-[5px] md:gap-[30px]">

<input type="text"  placeholder="" className="rounded-[13px] bg-[#FFFFFFA3] border-[1.5px] border-[#9F9F9F]
 outline-none md:w-[87px] md:h-[78px] w-[50px] h-[50px] p-[5px] "/>

<h1 className=" md:w-[19px] w-[20px] h-[46px] text-[30px] pl-[0.3rem]  md:text-[45px] text-[#030802]">/</h1>

<input type="text"  placeholder="" className="rounded-[13px] bg-[#FFFFFFA3] border-[1.5px] border-[#9F9F9F]
 outline-none md:w-[87px] md:h-[78px] w-[50px] h-[50px]  p-[5px] "/>

<div  className="flex justify-between px-[1rem] md:px-0 ">

<div className="flex flex-col gap-[6px] md:w-[106px] ">
  <h1 className="font-[400] md:text-[24px] text-[16px] md:leading-[36px] leading-[20px] font-poppins text-[#030802]">CVV2</h1>
  <p  className="text-[#6A6A6A] md:text-[20px] text-[12px] font-[300] md:leading-[30px] leading-[20px] font-poppins flex lg:w-[140px]">Security code</p>

</div>

<input type="text"  placeholder="" className="rounded-[13px] bg-[#FFFFFFA3] border-[1.5px] border-[#9F9F9F]
 outline-none md:w-[100px] md:h-[72px] w-[50px] h-[50px]  p-[5px] lg:ml-[3rem]"/>

</div>


</div>




</div>


 

  </div>


  <div  className="items-center flex justify-center w-[100%]">
  <button onClick={paymentclick} className="bg-[#08AC9F] border-[1px] border-[#F5F5F5] rounded-[64px] md:w-[772px] hover:text-[#08AC9F] hover:bg-[#fff] hover:border-[#08AC9F]
lg:h-[136px] h-[80px] w-[90%] gap-[3px]  shadow-[#005D6A52] lg:text-[56px] tex-[30px] text-[#FFFFFF] font-poppins font-[600]
 lg:leading-[42px] leading-[35px] ">Checkout </button>
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