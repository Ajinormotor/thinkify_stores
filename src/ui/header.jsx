import { useEffect, useRef, useState } from "react"
import logo from "../assets/img/thinkify_logo.svg"
import homeicon from "../assets/img/thinkify_home.svg"


import {  Link} from "react-router-dom"

import cartIcon from "../assets/img/thinkify_cart.svg"

import "../styles/header.css"
import { useDispatch, useSelector } from "react-redux"
import { getCartTotal } from "../redux/Carts"


const nav_link = [
  {
    path: '/',
    display: 'Shop',
  },


  {
    path: 'cart',
    display: 'Cart',
  },




]


const Header = () => {
  const dispatch = useDispatch();
  const {totalItems} = useSelector((state) => state.cart)
  console.log(totalItems);

useEffect(()=>{
  dispatch(getCartTotal())
}, [dispatch])

// Setting Eventlister 
const headerRef = useRef(null);
const textRef = useRef(null)


  useEffect(()=>{

    const handleRef = () =>  {
      if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 80 ) {
        headerRef.current.classList.add("header__shrink", "text__shrink");
      }  else {
          headerRef.current.classList.remove("header__shrink", "text__shrink");
        }
      
  
    }

    const handleTextRef = () =>  {
      if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 80 ) {
        headerRef.current.classList.add( "text__shrink");
      }  else {
          headerRef.current.classList.remove( "text__shrink");
        }
      
  
    }

    window.addEventListener("scroll", handleRef);

    window.addEventListener("scroll",  handleTextRef);
  

  return() =>{
    window.removeEventListener("scroll", handleRef,handleTextRef)
    window.removeEventListener("scroll",handleTextRef)
  }

},[])




const [click, setClick]  = useState(false);
const handleClick = ()=>{
  setClick(!click)
}



  return (
    <section  className="bg-transparent overflow-x-hidden overflow-y-hidden 
    container  px-2"  ref={headerRef}>

    <div className="flex justify-between h-[10vh] md:h-[17vh]  items-center p-0  max-w-[1219px] 
    w-[100%] lg:p-3">
  
  <div  className="flex md:gap-5">
  {/* logo */}
  <div  className="flex gap-3  md:w-[166px] md:h-[82px] h-[41px] w-[83px] ">
   <Link to="/"> <img src={logo}  alt="logo_img"  className="w-[100%] h-[100%]" /></Link>
  </div>

  
  {/* navlinks */}
  <ul  className="flex   md:space-x-[34px] items-center justify-center md:ml-[5rem]">

      
{
  nav_link.map(item=>(
    <li  className=" font-[500] text-[24px] leading-[28px] border-0 
     p-[10px] md:p-0 hidden md:flex " key={item}  ref={textRef}><Link to={item.path}
    
    className="md:text-[#9F9F9F] hover:border-t-[#08AC9F] border-b-0 border-r-0 border-l-0 border-t-transparent   border-2 relative w-fit after:content-[''] after:absolute after:h-[3px] after:block
    after:text-[#fff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300
     after:origin-center">{item.display}</Link></li> 
  ))
}
</ul>

  </div>

 

  
  {/* side_icons */}
  
  <div  className=" flex gap-3 items-center justify-center cursor-pointer text-[22px] text-gray-700">
  {/* cart_icons */}
  <div  className="flex flex-col md:flex-row  bg-[#B607A426] md:rounded-[34px] rounded-[7px]  p-[7px] gap-[7px]
  lg:w-[182px] w-[54x]  md:w-[180px] lg:h-[82px] h-[38px] md:gap-[16px] items-center justify-center">

    <div className="flex items-center ">
    <Link to="/cart" className="flex items-center "><img src={cartIcon}  alt="cart_icon" className="md:w-[39px]  w-[24px] md:h-[39px] h-[24px]" /> 
    <span className=" items-center justify-center md:text-[20px] text-[12px]
     md:leading-[24px] text-center text-[#B607A4]">+{totalItems}</span>
    </Link>
    </div>

   

    {/* <h1 className=" items-center justify-center md:text-[20px] md:leading-[24px] leading-[19px] 
    text-center text-[#B607A4]">Cart</h1> */}


  </div>

  <div className="lg:hidden block">
   <Link to="/"><img src={homeicon}  alt="cart_icon" className="md:w-[39px]  w-[26px] md:h-[39px] h-[27px]" /> </Link>
    </div>
  
  
    <div onClick={handleClick}  className="hidden   text-[25px]  md:text-[40px]" >
    {click?  <i className="ri-close-line"></i>: <i className="ri-menu-2-line"></i> }
    </div>
  
  </div>
  
  
  
  
    </div>

  </section>
  )
}

export default Header