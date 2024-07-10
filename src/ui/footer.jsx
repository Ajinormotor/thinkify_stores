import { Link } from "react-router-dom"
import logo from "../assets/img/thinkify_footerlogo.svg"

const Footer = () => {
  return (
    <section  className="bg-[#792E7A] text-[#FFFFFF] flex flex-col font-poppins">

    <div  className="w-[100%] flex p-[10px]  md:gap-6 my-[1rem]  justify-between md:justify-around items-start text-start md:p-[20px]  lg:mt-[120px]">
    
    {/* BOX 1 */}
    

    
    <div  className="flex gap-3 l md:w-[272px] md:h-[134px] w-[132px] h-[64px] md:mb-[2rem] 
     md:ml-[2rem] mr-[1rem]  md:mr-0">
    <img src={logo}  alt="logo_img"   className="w-[100%] h-[100%] " />
    </div>
    
  
    
<div  className="flex gap-[28px] md:gap-[96px]">


    
    {/* BOX 2 */}
    
    <div>

    
    <ul  className="opacity-[75%] text-[#FFFFFF] font-[400] space-y-[16px]  gap-[5.36px] md:gap-[28px] md:text-[14px] text-[12px] 
    leading-[7.6px] font-inter">
    <li><Link to="#">About us</Link></li>
    <li><Link to="#">Team</Link></li>
    <li><Link to="#">Contact</Link></li>
    <li><Link to="#">Teens</Link></li>
    <li><Link to="#">Testimonies</Link></li>
  
    </ul>
    
    </div>
    
    {/* BOX 3 */}
    
    <div>

    
    <ul  className="opacity-[75%] space-y-[16px]  gap-[5.36px] md:gap-[18px] font-[400] md:text-[14px] text-[12px] leading-[7.6px] font-inter">
    <li><Link to="#">Resources</Link></li>
    <li><Link to="#">FAQ</Link></li>
    <li><Link to="#">Blog</Link></li>
   
    <li><Link to="#">Audios</Link></li>
    <li><Link to="#">Videos</Link></li>
    
    </ul>
    
    </div>

    <div>

    
<ul  className="opacity-[75%] space-y-[16px] font-[400] text-[12px]  gap-[5.36px] md:gap-[18px]  md:text-[14px] leading-[7.6px] font-inter">
<li><Link to="#">A Little Extra</Link></li>
<li><Link to="#">Login</Link></li>
<li><Link to="#">A Little</Link></li>
<li><Link to="#">Books</Link></li>
<li><Link to="#">Facilatators</Link></li>

</ul>

</div>


</div>
    
 
    
    
    </div>

   
    
        
      </section>
  )
}

export default Footer