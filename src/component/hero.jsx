import heroImg from "../assets/img/thinkify_hero2.svg"

const Hero = () => {
    return (
  <section className=" items-center flex flex-col py-[3rem] relative">

<div  className=" overflow-x-hidden items-center flex flex-col md:flex-row justify-center w-[100%] ">

  {/* hero_text */}
<div className="md:pl-[2rem] pl-[1rem]">

  
<h1 className="lg:text-[44px] text-[30px]  leading-[40px] font-[600] lg:leading-[56px] text-[#B607A4]">..innovative tools  </h1>
<h1  className=" lg:text-[44px] font-[600]   text-[30px] leading-[40px] lg:leading-[56px] "> for today’s learners.</h1>
<p  className=" lg:w-[552px] leading-[29px] md:text-[20px] md:leading-[42px] md:my-[1rem] my-[0.5rem] text-[20px] text-[#8B8B8B] ">cutting-edge resources designed to inspire and empower your educational journey.</p>


{/* button */}
<div  className="hidden  md:gap-3  gap-1 cursor-pointer pt-[1.5rem]  md:pt-[2rem] pb-[2rem]">
<button  className="md:px-[2.5rem] md:w-[244px] w-[175px] md:h-[86px] h-[50px] border-[1.8px] bg-[#08AC9F]  hover:text-[#08AC9F] hover:bg-[#fff] hover:border-[#08AC9F]
font-[700] text-[#F5F5F5] text-[24px] rounded-[40px]  lg:rounded-[65px]" >Shop Now </button>

</div>


</div>

{/* hero-img */}
<div className="lg:w-[498px] w-[100%] lg:h-[500px]  h-[250px] hero-bg2  py-[1rem] md:pt-0 ">
<img src={heroImg} alt="hero-pics" className="w-[100%] h-[100%]" />
</div>


    </div>


{/* search input */}
    <div  className="lg:w-[1048px] lg:h-[106px] w-[100%] h-[80px]  hidden
   md:flex items-center justify-between rounded-[40px] border-[6px] border-[#F6F9FF] lg:my-[1rem] px-[15px]"   
    
    style={{ boxShadow: '10px 34px 74px 5px #00000014' }}>

      <input type="text"  placeholder="Search your products ..."  className="w-[100%] bg-[#fff] border-none outline-none "/>
      <button  className="md:px-[2.5rem] md:w-[166px] md:h-[68px] w-[170px] h-[40px] hover:text-[#08AC9F] hover:bg-[#fff] hover:border-5
       border-[1.8px] border-[#F5F5F5] bg-[#08AC9F] text-[18px] leading-[41px] text-white rounded-[65px] " >Search</button>

    </div>


  </section>
    )
  }
  
  export default Hero