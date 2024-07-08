
import Discount from "../category/discount"
import SpecialSales from "../category/specialSales"
import BulkSales from "../category/bulkSales"
import NewSales from "../category/newSales"

import bulk from "../assets/img/bulk.svg"
import { useState } from "react"

import arrivalicon from "../assets/img/arrivalicon.svg"
import discounticon from "../assets/img/discount.svg"
import allicon from "../assets/img/allicon.svg"








const ProductCard = () => {
 
  const [filter, setFilter]  = useState('NEWSALES');
  


  return (
<section className="flex flex-col w-[100%] justify-center items-center ">


{/* buttons */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[100%] 
px-1 w-[100%] items-center  gap-2 lg:gap-2">

   <button  className="flex  bg-[#B607A4]   rounded-[40px] lg:w-[260px] h-[120px] px-[1.5rem]
    items-center  justify-center pt-[34px] w-[100%] text-start pb-[34px] gap-3" onClick={()=>setFilter('NEWSALES')}>
   <img src={allicon} alt="bulk_pics" className="w-[99px] h-[88px]" />
    <h1  className="text-[#fff] font-[500] text-[28px] 
    leading-[28px] md:w-[155px]    font-poppins">All <br /> Sales</h1>
    </button>

    {/* bulk sales */}
    <button  className="flex  bg-[#657DAC]  rounded-[40px] lg:w-[280px]
     h-[120px] items-center justify-center pt-[34px] pb-[34px] gap-3"  onClick={()=>setFilter('BULK')}>
    <img src={bulk} alt="bulk_pics" className="w-[99px] h-[88px]" />
    <h1  className="text-[#fff] font-[500] text-[28px] 
    leading-[28px] md:w-[155px]  text-start  font-poppins">Bulk <br /> Sales</h1></button>



{/* New  Sales */}
                  
<button  className="flex  bg-[#08AC9F]  rounded-[40px] lg:w-[280px] h-[120px] items-center justify-center 
pt-[34px] pb-[34px] gap-3 " onClick={()=>setFilter('SPECIAL')}>  
                  <img src={arrivalicon} alt="bulk_pics" className="w-[99px] h-[88px]" />
                  <h1  className="text-[#fff] font-[500] text-[28px] 
    leading-[28px] md:w-[155px] text-start   font-poppins">New  <br />Arrivals</h1>
                  </button>

                   {/* discount button */}

    <button  className="flex bg-[#F59C05]  rounded-[40px] lg:w-[280px] h-[120px]
     items-center justify-center pt-[34px] pb-[34px] gap-3 text-start"  onClick={()=>setFilter('DISCOUNT')}>  
                  <img src={discounticon} alt="bulk_pics" className="w-[99px] h-[88px]" />
                  <h1  className="text-[#fff] font-[500] text-[25px] 
    leading-[28px] bg-[#F59C05] font-poppins">Discount <br /> Sales</h1>
                  </button>


</div>




  {/* New arrival Section */}

  {filter === 'NEWSALES' && 
<div>
<NewSales />
</div>
}





{/* Bulk Section */}
{
  filter === 'BULK' && 

<div>
<BulkSales /> 
</div>
}



{
  filter === 'DISCOUNT' && 
<div>
<Discount /> 
</div>
}


{
  filter === 'SPECIAL' && 
<div>
<SpecialSales />
</div>
}


</section>
  )
}

export default ProductCard