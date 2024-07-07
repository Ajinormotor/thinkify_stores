import { useParams } from "react-router-dom"
import Header from "../ui/header"
import { bulkdata } from "../assets/data/arrivaldata"

import star from "../assets/img/tstar.svg"
import MoreLike from "../category/moreLike"


const ProductDetails = () => {

const {id} = useParams()


const item = bulkdata.find(item => item.id === id)

if (!item) {
  return <div>No Information found with ID: {id}</div>;
}

const {title1,title2, title3, img, price} = item



  return (
   <section  className="flex flex-col">

    <div className="md:items-center flex flex-col">

    
      <Header />
      


  {/* search input */}
<div className="flex items-center justify-center mb-[6rem]">
   
     <div  className="lg:w-[1000px] lg:h-[106px] w-[100%] h-[80px] flex items-center justify-between
      rounded-[40px] border-[6px] border-[#F6F9FF] lg:my-[1rem] px-[15px]">
<input type="text"  placeholder="Search your products ..."  className="w-[100%] bg-transparent border-none outline-none "/>
<button  className="md:px-[2.5rem] md:w-[244px] md:h-[68px] w-[170px] h-[40px] border-[1.8px] border-[#F5F5F5] bg-[#08AC9F] md:text-[20px] text-[15px] text-white uppercase rounded-[65px] " >Search</button>
</div>
</div>
 

{/* main content */}
<div  className="flex flex-col items-center justify-center w-[100%] max-w-[1351px] 
lg:mx-2 rounded-[40px] bg-[#F8F8F8] p-4"
style={{ boxShadow: '0px 28px 64px 6px #BDBDBD52' }}
>

<div  className="max-w-[1182px] w-full flex flex-col items-start justify-center">

 
  <img src={img} alt="product-img" className="w-full h-[527px] object-fit rounded-[32px] object-fill"  />



{/* text and price */}
  <div className="flex justify-between items-center py-[2rem]  w-[100%] ">
  {title1 &&   <h1  className="font-[500] text-[28px] leading-[42px] md:text-[50px] font-poppins text-[#CF6F75]">{title1} </h1> }
              {title2 &&   <h1  className="font-[500] text-[28px] md:text-[50px] leading-[42px] font-poppins text-[#7E69BB]">{title2}</h1> }
              {title3 &&   <h1  className="font-[500] text-[28px] md:text-[50px] leading-[42px] font-poppins text-[#70B35A]">{title3}</h1> }
    <p  className="font-[400] md:text-[45px] text-[24px] leading-[42px] font-poppins text-[#9F9F9F]">{price}</p>
  
  </div>


  
  <p  className="font-[400] md:text-[32px] text-[20px] leading-[56px] font-poppins text-[#9F9F9F]">Fiction books for your everyday read. Improve Your <br  className="md:block hidden"/> knowledge of the World!</p>

  {/* first list */}

  <div  className="flex flex-col  ">

  <h1 className=" font-poppins font-[400] text-[32px] leading-[56px] text-[#6A6A6A]">Features: </h1>
  <ul className="flex flex-col pl-[2rem] list-disc">
    
  <li  className=" font-poppins font-[400] md:text-[32px] text-[20px] leading-[56px] text-[#6A6A6A]">Four Books Per Pack</li>
  <li  className=" font-poppins font-[400] md:text-[32px] text-[20px] leading-[56px] text-[#6A6A6A]">Bulk Sale</li>
  <li  className=" font-poppins font-[400] md:text-[32px] text-[20px] leading-[56px] text-[#6A6A6A]">Publisher: Adventure Publishing</li>
  <li  className=" font-poppins font-[400] md:text-[32px] text-[20px] leading-[56px] text-[#6A6A6A]">Publication Date: January 2023</li>
  <li  className=" font-poppins font-[400] md:text-[32px] text-[20px] leading-[56px] text-[#6A6A6A]">Pages: 350</li>
  <li  className=" font-poppins font-[400] md:text-[32px] text-[20px] leading-[56px] text-[#6A6A6A]">Language: English</li>
  <li  className=" font-poppins font-[400] md:text-[32px] text-[20px] leading-[56px] text-[#6A6A6A]">ISBN: 978-1-234567-89-0</li>
   
  </ul>

  </div>

    {/* second list */}

    <div  className="flex flex-col  ">

<h1 className=" font-poppins font-[400] text-[32px] leading-[56px] text-[#6A6A6A]">Highlights: </h1>
<ul className="flex flex-col pl-[2rem]  list-disc ">
  
  <li  className=" font-poppins font-[400] md:text-[32px] text-[20px] leading-[56px] text-[#6A6A6A]">Engaging Plot: A riveting storyline that keeps you on the edge of your seat.</li>
  <li  className=" font-poppins font-[400] md:text-[32px] text-[20px] leading-[56px] text-[#6A6A6A]">Rich Characters: Well-developed characters with relatable emotions and motives.</li>
  <li  className=" font-poppins font-[400] md:text-[32px] text-[20px] leading-[56px] text-[#6A6A6A]">Beautiful Prose: Stunning descriptions and vivid imagery that bring the story to life.</li>
  <li  className=" font-poppins font-[400] md:text-[32px] text-[20px] leading-[56px] text-[#6A6A6A]">Critical Acclaim: Praised by critics and readers alike for its imaginative and immersive narrative.</li>

</ul>

</div>



</div>



{/* review button section */}
<div className="flex flex-col items-start md:w-[90%] w-[100%] pt-[2rem]">


{/* first div */}
  <div className="flex   justify-between items-center gap-2 w-[100%] mb-[4rem] md:mb-[2rem]">

    <div  className="h-[58px] lg:gap-[32px] gap-1 flex  flex-col md:flex-row md:items-center ">
      <div  className="flex gap-1">
      <h1 className="font-poppins font-[500] md:text-[32px] text-[25px] leading-[56px] text-[#792E7A]">Reviews</h1>
      <span className="font-poppins font-[400] md:text-[32px] leading-[56px] text-[25px] text-[#6A6A6A]">2.5k </span>
      </div>

      <div  className="flex gap-1">
      <ul className="flex items-center">
      <li><img src={star} alt="" className="md:w-[48px] lg:h-[48px] w-[30px] h-[30px]" /></li>
      <li><img src={star} alt="" className="md:w-[48px] lg:h-[48px] w-[30px] h-[30px]" /></li>
      <li><img src={star} alt="" className="md:w-[48px] lg:h-[48px] w-[30px] h-[30px]" /></li>
      <li><img src={star} alt="" className="md:w-[48px] lg:h-[48px] w-[30px] h-[30px]" /></li>
      <li><img src={star} alt="" className="md:w-[48px] lg:h-[48px] w-[30px] h-[30px]" /></li>
    </ul>

    <span className="font-poppins font-[400] md:text-[32px] text-[25px] leading-[56px] text-[#6A6A6A]">2.5k </span>

      </div>



    </div>

<div>
<h1 className="font-poppins font-[400] md:text-[32px] text-[25px] lg:leading-[56px] leading-[35px] text-[#6A6A6A]">See All </h1>
</div>


  
 
  </div>


{/* second div */}
  <div className="flex flex-col md:flex-row justify-between md:items-center items-start w-[100%] py-[1rem]  ">

    <div className="shadow-[#BDBDBD52] bg-[#fff] rounded-[24px] p-[24px] h-[105px] md:w-[45%] w-[100%]  flex flex-col"
       style={{ boxShadow: '0px 28px 64px 6px #BDBDBD52' }}
    
    >
      <h1 className="text-[#7E69BB] font-poppins font-[400] text-[16px] leading-[24px]">Sarah</h1>

      <p className="text-[#9F9F9F] font-poppins font-[400] text-[16px] leading-[24px]">Very educating, My kids love them</p>

    </div>

    <div className="shadow-[#BDBDBD52] bg-[#fff] rounded-[24px] mt-[2rem] p-[24px] h-[105px] md:w-[45%] w-[100%]  flex flex-col" 
    
    style={{ boxShadow: '0px 28px 64px 6px #BDBDBD52' }}>
      <h1 className="text-[#7E69BB] font-poppins font-[400] text-[16px] leading-[24px]">Sarah</h1>

      <p className="text-[#9F9F9F] font-poppins font-[400] text-[16px] leading-[24px]">Very educating, My kids love them</p>

    </div>

  </div>

  {/* third div */}
  <div className="flex flex-col md:flex-row justify-between md:items-center items-start w-[100%] py-[1rem]">

    <div className="shadow-[#BDBDBD52] bg-[#fff] rounded-[24px] p-[24px] h-[105px] md:w-[45%] w-[100%]  flex flex-col"
    
    style={{ boxShadow: '0px 28px 64px 6px #BDBDBD52' }}>
      <h1 className="text-[#7E69BB] font-poppins font-[400] text-[16px] leading-[24px]">Sarah</h1>

      <p className="text-[#9F9F9F] font-poppins font-[400] text-[16px] leading-[24px]">Very educating, My kids love them</p>

    </div>

    <div className="shadow-[#BDBDBD52] bg-[#fff] rounded-[24px] p-[24px] h-[105px] md:w-[45%] w-[100%] mt-[2rem]  flex flex-col"
      style={{ boxShadow: '0px 28px 64px 6px #BDBDBD52' }}>
      <h1 className="text-[#7E69BB] font-poppins font-[400] text-[16px] leading-[24px]">Sarah</h1>

      <p className="text-[#9F9F9F] font-poppins font-[400] text-[16px] leading-[24px]">Very educating, My kids love them</p>

    </div>

  </div>

</div>

{/* buy and add cart button */}
<div className="md:items-center items-start md:justify-center justify-between flex lg:gap-[48px] w-[100%] gap-2  py-[1rem]">

  <button className="bg-[#08AC9F] lg:rounded-[96px] rounded-[8px] border-[3px] lg:w-[440px] md:h-[158px] h-[70px] w-[170px]
    border-[#D9D9D9] shadow-[#005D6A52] gap-[6px]
  font-[700] lg:text-[48px] text-[25px] text-[#F8F8F8] font-poppins
  
  ">Buy Now</button>

  <button className="text-[#08AC9F] lg:rounded-[96px] rounded-[8px] border-[3px] lg:w-[440px] md:h-[158px] h-[70px] w-[170px] 
   border-[#08AC9F] shadow-[#005D6A52] gap-[6px]
  font-[700] lg:text-[48px] text-[25px] bg-[#F8F8F8] font-poppins
  
  ">Add To Cart</button>


</div>

</div>



{/* More Like Section */}
<div  className="pt-[2rem]">
  <MoreLike/>
</div>


    </div>

   </section>
  )
}

export default ProductDetails














