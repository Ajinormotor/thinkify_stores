import heroImg from "../assets/img/thinkify_hero.svg"

const Hero = () => {
    return (
  <section className=" items-center flex flex-col py-[3rem] relative">

<div  className=" overflow-x-hidden  flex flex-col md:flex-row justify-between w-[100%] ">

  {/* hero_text */}
<div className="md:pl-[2rem] pl-[1rem]">

  
<p className="lg:text-[64px] text-[40px]  font-[600] line-[20px] text-[#D3373A]">..innovative tools for </p>
<h1  className=" lg:text-[64px] font-[600]   text-[40px] ">today’s learners.</h1>
<p  className=" border-l-2 border-gray-400 opacity-[85%] w-[100%] line-[24px] md:text-[20px] text-[15px] my-[1rem] px-[2rem]">cutting-edge resources designed to inspire and empower your educational journey.</p>


{/* button */}
<div  className="flex md:gap-3  gap-1 cursor-pointer  pt-[2rem] pb-[2rem]">
<button  className="md:px-[2.5rem] md:w-[244px] w-[175px] md:h-[88px] h-[50px] border-[1.8px] border-[#F5F5F5] bg-[#08AC9F] text-[20px] text-white uppercase rounded-[65px]" >Our Services</button>
<button  className="md:px-[2.5rem] md:w-[244px] md:h-[88px] w-[175px] h-[50px] border-[1.8px] border-[#F5F5F5] bg-[#08AC9F] text-[20px] text-white uppercase rounded-[65px]" >Learn More</button>
</div>


</div>

{/* hero-img */}
<div className="lg:w-[498px] w-[100%] lg:h-[500px]  h-[250px]  py-[1rem] md:pt-0 ">
<img src={heroImg} alt="hero-pics" className="w-[100%] h-[100%]" />
</div>


    </div>


{/* search input */}
    <div  className="lg:w-[1048px] lg:h-[106px] w-[100%] h-[80px] flex items-center justify-between rounded-[40px] border-[6px] border-[#F6F9FF] lg:my-[1rem] px-[15px]">

      <input type="text"  placeholder="Search your products ..."  className="w-[100%] bg-transparent border-none outline-none "/>
      <button  className="md:px-[2.5rem] md:w-[244px] md:h-[68px] w-[170px] h-[40px] border-[1.8px] border-[#F5F5F5] bg-[#08AC9F] md:text-[20px] text-[15px] text-white uppercase rounded-[65px] " >Search</button>

    </div>


  </section>
    )
  }
  
  export default Hero