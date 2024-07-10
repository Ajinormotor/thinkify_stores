
import YouLike from "../like/youLike";
import Header from "../ui/header";
import remove from "../assets/img/delete.svg";
import { removeItem, updateQuantity,getCartTotal } from "../redux/Carts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const { data: items, totalAmounts: totalAmount} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [items, dispatch]);


  const navigate = useNavigate()

  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1);
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const checkoutclick = () =>{
    navigate('/payment')
  }

  return (
    <section className="flex flex-col">
      <div>
        <div>
          <Header />
        </div>

  
  
<div className="w-[100%] justify-center items-center flex flex-col">

        {/* search input */}
        <div  className="lg:w-[1048px] lg:h-[106px] w-[100%] h-[80px]  hidden
   lg:flex items-center justify-between rounded-[40px] border-[6px] border-[#F6F9FF] lg:my-[1rem] px-[15px]"   
    
    style={{ boxShadow: '10px 34px 74px 5px #00000014' }}>

      <input type="text"  placeholder="Search your products ..."  className="w-[100%] bg-[#fff] border-none outline-none "/>
      <button  className="md:px-[1rem] md:w-[166px] md:h-[66px] w-[150px] h-[57px]  hover:text-[#08AC9F] hover:bg-[#fff] hover:border-5
       border-[1.8px] border-[#F5F5F5] bg-[#08AC9F] text-[18px] leading-[41px] text-white lg:rounded-[65px] rounded-[31px] " >Search</button>

    </div>



        {/* Total */}
        <div className="bg-[#E9CAEA] justify-between rounded-[15px] gap-[178px]
         flex items-center md:h-[128px]  p-[20px] md:w-[636px] md:rounded-[40px]
         max-w-[845px] w-[334px] h-[44px] lg:m-[15px] mt-[2rem] lg:ml-[-22rem]">
          <h1 className="text-[#525252] font-[500] md:leading-[80px] leading-[33px]
           md:text-[48px] text-[16px] font-poppins">Subtotal</h1>
          <span className="text-[#525252] font-[500] md:leading-[80px] leading-[33px] 
          md:text-[48px] text-[16px] font-poppins">${totalAmount}</span>
        </div>

        {/* Main content */}
        <div className="flex flex-col  items-center justify-center md:items-start md:justify-start w-[100%]
         bg-[#FFFFFF80] rounded-[20px] md:rounded-[24px] p-[24px]">
          {/* Heading */}
          <div className=" flex items-start left-0 justify-start ml-[-6rem] md:ml-0 relative">
            <h1 className="text-[#B607A4] font-[500] md:text-[37px] md:leading-[33px] text-[18px] leading-[43px]">Cart ({items.length})</h1>
          </div>

          {/* Items list */}
          <div className="grid grid-cols-1 lg:grid-cols-2  w-[234px] md:w-full rounded-[24px] space-y-[10px] md:justify-around md:pt-[2rem]">
            {items.map((item) => (
              <div key={item.id} className="flex flex-row items-start   md:my-[0rem] justify-center 
              lg:w-[555px] lg:h-[281px] md:w-[100%]  w-[234px] h-[136px]
              rounded-[24px] gap-[20px] p-[15px]" style={{ boxShadow: '0px 28px 64px 6px #BDBDBD52' }}>
                <img src={item.img} alt="product-img" className="lg:w-[256px] md:w-[100%] md:h-[198px] w-[91px]
                 h-[70px] rounded-[8px] md:rounded-[32px] md:pt-[10px]" />

                {/* Text */}
                <div className="gap-[40px] pt-[10px]">
                
                  {item.title2 && <h1 className="font-[500] md:text-[20px] md:leading-[30px]  text-[9px] leading-[15px] font-poppins text-[#7E69BB]">{item.title2}</h1>}
                  {item.title3 && <h1 className="font-[500] text-[20px] leading-[30px] font-poppins text-[#70B35A]">{item.title3}</h1>}

                  <p className="font-[400] md:text-[16px] md:leading-[24px] font-poppins
                   text-[#9F9F9F] text-start text-[5px] leading-[8px]">{item.description}</p>

                  {/* Quantity controls */}
                  <ul className="flex gap-2 md:items-center items-start  w-[100%]  py-1">
                    <li>
                      <p className="font-[400] md:text-[22px] md:leading-[38px] text-[9px] leading-[15px] font-poppins text-[#9F9F9F]">{item.price}</p>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <button onClick={() => decreaseQty(item.id, item.quantity)} className="px-[0.5rem] md:w-[50px] md:h-[50px]
                        w-[23px] h-[19px] text-[11px] leading-[11px]
                         border-[1.8px] bg-[#08AC9F] md:text-[16px] 
                        md:leading-[33px] text-[#F8F8F8] rounded-[16px] items-center justify-center">
                          -
                        </button>
                        <span className="px-[0.5rem] text-[9px] leading-[15px]  md:text-[22px] md:w-[38px] text-[#9F9F9F]">{item.quantity}</span>
                        <button onClick={() => increaseQty(item.id, item.quantity)} className="px-[0.5rem] md:w-[50px] md:h-[50px] 
                        w-[23px] h-[19px]
                        border-[1.8px] bg-[#08AC9F] md:text-[16px] rounded-[5px] text-[11px] leading-[11px]
                         md:leading-[33px] text-[#F8F8F8] md:rounded-[16px] items-center justify-center">
                          +
                        </button>
                      </div>
                    </li>
                 
                  </ul>

                  <div  className="gap-[2px] flex items-start justify-start">
                  
                      <img src={remove} alt="remove_icon" className="md:w-[30px] md:h-[30px] w-[11px] h-[11px]" onClick={() => handleRemoveItem(item.id)} />
                  <h1 onClick={() => handleRemoveItem(item.id)}  className="md:text-[22px] font-[600]
                   font-poppins text-[#FF4747] md:leading-[38px] text-[10px] leading-[15px]">Remove</h1>
                  </div>
                </div>
              </div>
            ))}



          </div>

{/* continue button */}

          <div className="w-[100%] flex items-center justify-center">

          <button className="bg-[#08AC9F] border-[1px]  hover:text-[#08AC9F] hover:bg-[#fff] hover:border-[#08AC9F]
           border-[#F5F5F5] rounded-[64px] md:w-[572px]  mt-[2rem]
lg:h-[99px] h-[80px] lg:w-[637px] w-[90%] gap-[3px]  shadow-[#005D6A52] lg:text-[40px] text-[30px] text-[#FFFFFF] font-poppins font-[600]
 lg:leading-[42px] leading-[35px] "  onClick={checkoutclick}>Continue</button>

</div>
        </div>

        </div>

        {/* Likes Section */}
        <div className="my-[2rem]">
          <YouLike />
        </div>

      
      </div>
    </section>
  );
}

export default Cart;
