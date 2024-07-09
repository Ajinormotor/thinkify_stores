
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
<section className="flex flex-col w-[100%] md:justify-center md:items-center ">


{/* buttons */}

<div  className="flex items-center justify-center">
<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:w-[100%] 
px-1 w-[60%] items-items-center justify-items-center  gap-2 lg:gap-2 ">

   <button  className="flex  bg-[#B607A4]   md:rounded-[40px] rounded-[15px] lg:w-[280px] md:h-[120px] h-[47px] w-[109px] md:w-[100%] px-[1.5rem]
    items-center  justify-center pt-[34px] text-start pb-[34px] gap-3" onClick={()=>setFilter('NEWSALES')}>
   <img src={allicon} alt="bulk_pics" className="md:w-[99px] md:h-[88px] w-[38px] h-[33px]" />
    <h1  className="text-[#fff] font-[500] md:text-[28px]  text-[10px] leading-[10px]
    md:leading-[28px] md:w-[155px]    font-poppins">All <br /> Sales</h1>
    </button>

    {/* bulk sales */}
    <button  className="flex  bg-[#657DAC]   md:rounded-[40px] rounded-[15px] lg:w-[280px]  h-[47px] w-[109px] md:w-[100%] 
    md:h-[120px]  items-center justify-center pt-[34px] pb-[34px] gap-3"  onClick={()=>setFilter('BULK')}>
    <img src={bulk} alt="bulk_pics" className="md:w-[99px] md:h-[88px] w-[31px] h-[33px]" />
    <h1  className="text-[#fff] font-[500] md:text-[28px]  text-[10px] leading-[10px]
    md:leading-[28px] md:w-[155px]  text-start  font-poppins">Bulk <br /> Sales</h1></button>



{/* New  arrival */}
                  
<button  className="flex  bg-[#08AC9F]  md:rounded-[40px] rounded-[15px] lg:w-[280px] md:w-[100%] w-[109px] h-[47px] md:h-[120px] items-center justify-center 
pt-[34px] pb-[34px] gap-3 " onClick={()=>setFilter('SPECIAL')}>  
                  <img src={arrivalicon} alt="bulk_pics" className="md:w-[99px] md:h-[88px] h-[30px] w-[30px]" />
                  <h1  className="text-[#fff] font-[500] md:text-[28px]  text-[10px] leading-[10px]
    md:leading-[28px] md:w-[155px] text-start   font-poppins">New  <br />Arrivals</h1>
                  </button>

                   {/* discount button */}

    <button  className="flex bg-[#F59C05]  md:rounded-[40px] rounded-[15px]  md:w-[100%] lg:w-[280px] w-[109px] h-[47px] md:h-[120px]
     items-center justify-center pt-[34px] pb-[34px] gap-3 text-start"  onClick={()=>setFilter('DISCOUNT')}>  
                  <img src={discounticon} alt="bulk_pics" className="md:w-[99px] md:h-[88px] w-[24px] h-[30px]" />
                  <h1  className="text-[#fff] font-[500] md:text-[28px]  text-[10px] leading-[10px]
    md:leading-[28px] bg-[#F59C05] font-poppins">Discount <br /> Sales</h1>
                  </button>


</div>

</div>



<div>


  {/* New arrival Section */}

  {filter === 'NEWSALES' && 
<div className="max-w-[100%]">
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
</div>

</section>
  )
}

export default ProductCard