
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

        {/* Search input */}
        <div className="flex items-center justify-center mb-[6rem] mt-[3rem]">
          <div className="lg:w-[1000px] lg:h-[106px] w-[100%] h-[80px] flex items-center justify-between rounded-[40px] border-[6px] border-[#F6F9FF] lg:my-[1rem] px-[15px]">
            <input type="text" placeholder="Search your products ..." className="w-[100%] bg-transparent border-none outline-none" />
            <button className="md:px-[2.5rem] md:w-[244px] md:h-[68px] w-[170px] h-[40px] border-[1.8px] border-[#F5F5F5] bg-[#08AC9F] md:text-[20px] text-[15px] text-white uppercase rounded-[65px]">
              Search
            </button>
          </div>
        </div>

        {/* Total */}
        <div className="bg-[#E9CAEA] justify-between flex items-center h-[128px] rounded-[40px] p-[20px] max-w-[845px] w-full lg:m-[15px]">
          <h1 className="text-[#525252] font-[500] md:leading-[80px] leading-[50px] md:text-[48px] text-[38px] font-poppins">Subtotal</h1>
          <span className="text-[#525252] font-[500] md:leading-[80px] leading-[50px] md:text-[48px] text-[38px] font-poppins">${totalAmount}</span>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-start justify-start w-[100%] rounded-[24px] p-[24px]">
          {/* Heading */}
          <div>
            <h1 className="text-[#B607A4] font-[500] text-[48px] leading-[80px]">Cart ({items.length})</h1>
          </div>

          {/* Items list */}
          <div className="grid grid-cols-1 lg:grid-cols-2 w-[100%] rounded-[24px] space-y-[10px] md:justify-around">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-start justify-center lg:w-[555px] lg:h-[281px] w-[100%] rounded-[24px] gap-[20px] p-[15px]" style={{ boxShadow: '0px 28px 64px 6px #BDBDBD52' }}>
                <img src={item.img} alt="product-img" className="lg:w-[256px] w-[100%] h-[198px] rounded-[32px] pt-[10px]" />

                {/* Text */}
                <div className="gap-[40px] pt-[10px]">
                  {item.title1 && <h1 className="font-[500] text-[20px] leading-[30px] font-poppins text-[#CF6F75]">{item.title1}</h1>}
                  {item.title2 && <h1 className="font-[500] text-[20px] leading-[30px] font-poppins text-[#7E69BB]">{item.title2}</h1>}
                  {item.title3 && <h1 className="font-[500] text-[20px] leading-[30px] font-poppins text-[#70B35A]">{item.title3}</h1>}

                  <p className="font-[400] text-[16px] leading-[24px] font-poppins text-[#9F9F9F] text-start">{item.description}</p>

                  {/* Quantity controls */}
                  <ul className="flex gap-2 items-center justify-center w-[100%]">
                    <li>
                      <p className="font-[400] md:text-[28px] text-[24px] leading-[42px] font-poppins text-[#9F9F9F]">{item.price}</p>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <button onClick={() => decreaseQty(item.id, item.quantity)} className="px-[0.5rem] w-[50px] h-[50px] border-[1.8px] bg-[#08AC9F] text-[16px] leading-[33px] text-[#F8F8F8] rounded-[41px] items-center justify-center">
                          -
                        </button>
                        <span className="px-[0.5rem]">{item.quantity}</span>
                        <button onClick={() => increaseQty(item.id, item.quantity)} className="px-[0.5rem] w-[50px] h-[50px] border-[1.8px] bg-[#08AC9F] text-[16px] leading-[33px] text-[#F8F8F8] rounded-[41px] items-center justify-center">
                          +
                        </button>
                      </div>
                    </li>
                    <li>
                      <img src={remove} alt="remove_icon" className="w-[40px] h-[40px]" onClick={() => handleRemoveItem(item.id)} />
                    </li>
                  </ul>
                </div>
              </div>
            ))}



          </div>

{/* continue button */}

          <div className="w-[100%] flex items-center justify-center">

          <button className="bg-[#08AC9F] border-[1px] border-[#F5F5F5] rounded-[64px] md:w-[572px]  mt-[2rem]
lg:h-[136px] h-[80px] w-[90%] gap-[3px]  shadow-[#005D6A52] lg:text-[56px] tex-[30px] text-[#FFFFFF] font-poppins font-[600]
 lg:leading-[42px] leading-[35px] "  onClick={checkoutclick}>Checkout</button>

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
