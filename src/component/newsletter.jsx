

const Newsletter = () => {
  return (
   <section className="flex  items-center justify-center">

    <div  className="lg:w-[836px] w-[80%] lg:h-[165px] md:items-center   px-[2rem]  p-[20px]   justify-between rounded-[40px] border-[4px] border-[#FFFFFF
    ]  bg-[#B607A4]  flex  flex-col md:flex-row">

        <div  className="gap-[8px] flex flex-col items-start   ">
        <h1  className="text-[#ffffff] font-[500]  text-[24px] leading-[28px]">Subscribe To Our newsletter</h1>
 <input type="text" placeholder="Enter Email"  className="lg:w-[454px] h-[70px] lg:rounded-[40px] rounded-[20px] p-[9px]  gap-[6px] outline-none w-[100%]  shdaow-[#00000014]"  />
        </div>

<div className="flex justify-between items-center pt-[2rem] md:pt-0">
    <button  className="shadow-[0px 30px 35px 0px #0000004A] bg-[#000000] w-[217px] h-[55px] text-[#FFFFFF] border-[2px] border-[#FFFFFF]
    text-[27px] leading-[32px] font-[700] font-poppins  rounded-[18px]">
        subscribe
    </button>

</div>

    </div>

   </section>
  )
}

export default Newsletter