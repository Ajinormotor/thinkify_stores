import { Link } from "react-router-dom"
import logo from "../assets/img/thinkify_footerlogo.svg"

const Footer = () => {
  return (
    <section  className="bg-[#792E7A] text-[#FFFFFF] flex flex-col font-poppins">

    <div  className="w-[100%] flex flex-col md:flex-row  md:gap-6   justify-between items-start text-start p-[20px]  mt-[120px]">
    
    {/* BOX 1 */}
    

    
    <div  className="flex gap-3 l w-[272px] h-[134px] mt-[1.5rem] md:ml-[2rem] ">
    <img src={logo}  alt="logo_img"   className="w-[100%] h-[100%]" />
    </div>
    
    
 
    

    
    {/* BOX 2 */}
    
    <div>

    
    <ul  className="opacity-[75%] text-[#FFFFFF] space-y-[16px]">
    <li><Link to="#">About us</Link></li>
    <li><Link to="#">Team</Link></li>
    <li><Link to="#">Contact</Link></li>
    <li><Link to="#">Teens</Link></li>
    <li><Link to="#">Testimonies</Link></li>
  
    </ul>
    
    </div>
    
    {/* BOX 3 */}
    
    <div>

    
    <ul  className="opacity-[75%] space-y-[16px] md:pt-0 pt-[1rem]">
    <li><Link to="#">Resources</Link></li>
    <li><Link to="#">FAQ</Link></li>
    <li><Link to="#">Blog</Link></li>
   
    <li><Link to="#">Audios</Link></li>
    <li><Link to="#">Videos</Link></li>
    
    </ul>
    
    </div>

    <div>

    
<ul  className="opacity-[75%] space-y-[16px] md:pt-0 pt-[1rem]">
<li><Link to="#">A Little Extra</Link></li>
<li><Link to="#">Login</Link></li>
<li><Link to="#">A Little</Link></li>
<li><Link to="#">Books</Link></li>
<li><Link to="#">Facilatators</Link></li>

</ul>

</div>

    
 
    
    
    </div>

   
    
        
      </section>
  )
}

export default Footer