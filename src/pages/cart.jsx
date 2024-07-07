import CustomerLike from "../like/customerLike"
import YouLike from "../like/youLike"
import Header from "../ui/header"
import {  bulkdata } from "../assets/data/arrivaldata"

import remove from "../assets/img/delete.svg"




const Cart = () => {
  return (


<section  className="flex flex-col">

<div>

  <div>
  <Header />
  </div>


{/* search input */}
<div className="flex items-center justify-center mb-[6rem] mt-[3rem]">

 <div  className="lg:w-[1000px] lg:h-[106px] w-[100%] h-[80px] flex items-center justify-between
  rounded-[40px] border-[6px] border-[#F6F9FF] lg:my-[1rem] px-[15px]">
<input type="text"  placeholder="Search your products ..."  className="w-[100%] bg-transparent border-none outline-none "/>
<button  className="md:px-[2.5rem] md:w-[244px] md:h-[68px] w-[170px] h-[40px] border-[1.8px] border-[#F5F5F5] bg-[#08AC9F] md:text-[20px] text-[15px] text-white uppercase rounded-[65px] " >Search</button>
</div>

</div>


{/* totol */}
<div className="bg-[#E9CAEA] justify-between flex items-center 
h-[128px] rounded-[40px] p-[20px] max-w-[845px] w-full lg:m-[15px]">
<h1 className="text-[#525252] font-[500] md:leading-[80px] leading-[50px] md:text-[48px] text-[38px] font-poppins">Subtotal</h1>
<span className="text-[#525252] font-[500] md:leading-[80px] leading-[50px] md:text-[48px] text-[38px] font-poppins">$200</span>
</div>


{/* main content */}

 <div  className="flex flex-col items-start justify-start  w-[100%] 
  rounded-[24px] p-[24px] ">
            {/* heading */}
            <div>
            <h1  className="text-[#B607A4] font-[500] text-[48px] leading-[80px]">Cart (4)</h1>
        </div>
    
        {/* mappping with img slider */}
    
        <div className=" grid grid-cols-1 lg:grid-cols-2 w-[100%]  
         rounded-[24px] space-y-[10px] md:justify-around ">
    
     
    
    {
            bulkdata.map((item)=>(
    
              <div  key={item.id}  className="flex flex-col md:flex-row items-start justify-center lg:w-[555px] lg:h-[281px] w-[100%]
               rounded-[24px] gap-[20px] p-[15px]  " style={{ boxShadow: '0px 28px 64px 6px #BDBDBD52' }}>

              

       
    
 
    <img src={item.img} alt="product-img" className="lg:w-[256px]  w-[100%] h-[198px] rounded-[32px] pt-[10px]"  />
    
         
            
{/* text */}
              <div className="gap-[40px]  pt-[10px]">
              {item.title1 &&   <h1  className="font-[500] text-[28px] leading-[40px] font-poppins text-[#CF6F75]">{item.title1}</h1> }
              {item.title2 &&   <h1  className="font-[500] text-[28px] leading-[42px] font-poppins text-[#7E69BB]">{item.title2}</h1> }
              {item.title3 &&   <h1  className="font-[500] text-[28px] leading-[42px] font-poppins text-[#70B35A]">{item.title3}</h1> }

              <p  className="font-[400] text-[16px] leading-[24px] font-poppins text-[#9F9F9F] pt-[10px]">{item.description}</p>
    
              <ul  className="flex gap-[24px]  h-[54px] items-center justify-start w-[100%] pt-[10px]">
                <li>
                <p  className="font-[400] md:text-[28px] text-[24px] leading-[42px] font-poppins text-[#9F9F9F]">{item.price}</p>
                </li>
    
                <li>
                <button  className="md:px-[0.5rem] w-[65px] flex  h-[54px] border-[1.8px]  text-wrap 
                 border-[#F5F5F5] bg-[#08AC9F] text-[16px] leading-[33px] text-[#F8F8F8]  rounded-[16px] 
                 items-center justify-center" >+1</button>
                </li>

                <li>
                <p  className="font-[400] md:text-[28px] text-[24px] leading-[42px] font-poppins text-[#9F9F9F]">1</p>
                </li>
    
                <li>
                <button  className="md:px-[0.5rem] w-[65px] flex  h-[54px] border-[1.8px]  text-wrap 
                 border-[#F5F5F5] bg-[#9CD6D2] text-[16px] leading-[33px] text-[#F8F8F8]  rounded-[16px] items-center justify-center" >-1</button>
                </li>
    
              </ul>

              <div className="flex gap-[8px]  items-center pt-[10px]">

              <img src={remove} alt="product-img" className="w-[32px]  h-[32px] top-0"  />
              <h1 className="text-[#FF4747] font-poppins font-[500] text-[28px] leading-[42px]">Remove</h1>
            
              </div>
      
              </div>
      
              

              
                 
    
              </div>
    
    ))
    
    }
    </div>

    
      
    </div>

    {/* submit button */}

    <div  className="flex items-center justify-center md:mt-[5rem] mb-[5rem] ">
    <button className="bg-[#08AC9F] border-[1px] border-[#F5F5F5] rounded-[64px] md:w-[772px] 
  lg:h-[136px] h-[80px] w-[90%] gap-[3px]  shadow-[#005D6A52] lg:text-[56px] tex-[30px] text-[#FFFFFF] font-poppins font-[600]
   lg:leading-[42px] leading-[35px] ">Continue Shopping</button>
    </div>
    



{/* you like section */}
<div>
<YouLike />
</div>


{/* customer like */}
<div>
<CustomerLike />
</div>



</div>


 </section>
  )
}

export default Cart