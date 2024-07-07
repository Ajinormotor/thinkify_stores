import bulk from "../assets/img/bulk.svg"

const Categories = () => {
  return (
 <section className="bg-[#FAFAF8] rounded-[40px] md:ml-[2rem] lg:ml-[5rem] my-[2rem] p-[20px] w-[100%]">

    {/* heading */}
    <div>
        <h1  className="text-[#B607A4] font-[500] text-[48px] leading-[80px]">Categories</h1>
    </div>

    <div  className="flex flex-col my-[2rem]  relative">

        {/* first row */}
        <div  className="flex  flex-col md:flex-row items-center justify-center w-[100%] md:space-x-3 my-[1rem] space-y-3 md:space-y-0">

            {/* bulk box */}
            <div  className="flex bg-[#657DAC] gap- rounded-[40px] lg:w-[482px] h-[182px] items-center justify-center pt-[34px] w-[100%] pb-[34px] gap-3">
                <img src={bulk} alt="bulk_pics" className="w-[122px] h-[115px]" />
                <h1  className="text-[#fff] font-[500] md:text-[48px] text-[40px] leading-[60px] md:w-[155px]    font-poppins">Bulk  Sales</h1>
      
            </div>

               {/* discount box */}
               <div  className="flex bg-[#F59C05] gap- rounded-[40px] lg:w-[482px] h-[182px] items-center justify-center pt-[34px] pb-[34px] gap-3">
                <img src={bulk} alt="bulk_pics" className="w-[122px] h-[115px]" />
                <h1  className="text-[#fff] font-[500] md:text-[48px] text-[40px] leading-[60px] md:w-[155px]  font-poppins">Discount   Sales</h1>
            </div>
        </div>

            {/*second row */}
            <div  className="flex flex-col md:flex-row items-center justify-center w-[100%] md:space-x-3 my-[1rem] space-y-3 md:space-y-0">

{/* special box */}
<div  className="flex bg-[#B607A4]  rounded-[40px] lg:w-[482px] h-[182px] items-center justify-center pt-[34px] pb-[34px] gap-3 ">
    <img src={bulk} alt="bulk_pics" className="w-[122px] h-[115px]" />
    <h1  className="text-[#fff] font-[500] md:text-[48px] text-[40px] leading-[60px] md:w-[155px] w-[100%]  font-poppins">Special Sales</h1>
</div>

   {/* arrial box */}
   <div  className="flex bg-[#08AC9F] gap- rounded-[40px] lg:w-[482px] h-[182px] items-center justify-center pt-[34px] pb-[34px] gap-3">
    <img src={bulk} alt="bulk_pics" className="w-[122px] h-[115px]" />
    <h1  className="text-[#fff] font-[500] md:text-[48px] text-[40px] leading-[60px] md:w-[155px]  font-poppins">New Arrivals</h1>
</div>
</div>

    </div>


 </section>
  )
}

export default Categories