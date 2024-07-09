import { Link, useNavigate } from "react-router-dom";
import { newdata } from "../assets/data/arrivaldata";
import PropTypes from 'prop-types';

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Carts";
import { useState } from "react";

const SpecialSales = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const handleAddToCart = (product) => {
    setQty(qty);
    let totalPrice = qty * product.price;
    const tempProduct = { ...product, quantity: qty, totalPrice };
    dispatch(addToCart(tempProduct));
    navigate('/');
  };

  return (
    <section className="flex flex-col  bg-[#FAFEFF] w-[100%]  rounded-[24px] p-[24px] 
     justify-center items-center mt-[2rem]">
    {/* New Arrival Section */}
    <div className="flex flex-col items-start justify-start w-[368px] md:w-[100%]">
      {/* Heading */}
      <div>
        <h1 className="text-[#B607A4] font-[500] md:text-[48px] p-2 text-[16px] leading-[15px] md:leading-[80px]">New Arrivals </h1>
      </div>
      
      {/* Mapping with image slider */}
      <div className="grid grid-cols-2 md:grid-cols-3  rounded-[24px] md:gap-[18px]  
       lg:grid-cols-4 pt-[2rem] space-x-3  ">
        {newdata.map((item) => (
          <div key={item.id} className="flex flex-col items-center justify-center md:w-[253px] w-[169px]  h-[238px] md:h-[365px]
          md:rounded-[24px] rounded-[12px] gap-[12px]  my-[1rem] md:gap-[10px] p-[15px] bg-[#F8F8F8]">
            <img src={item.img} alt="product-img" className="w-[217px] h-[170px] rounded-[32px]" />

           
            {item.title2 && <h1 className="font-[500] md:text-[18px] text-[12px] leading-[21px] md:leading-[31px] font-poppins text-[#7E69BB]"><Link to={`/${item.id}`}>{item.title2}</Link></h1>}
            {item.title3 && <h1 className="font-[500] text-[28px] leading-[42px] font-poppins text-[#70B35A]"><Link to={`/${item.id}`}>{item.title3}</Link></h1>}

            <p className="font-[400] md:text-[12px] text-[8px] leading-[12px] md:leading-[18px] font-poppins text-[#9F9F9F] text-center">{item.description}</p>
            <ul className="flex md:gap-[55px] gap-[36px] h-[54px] items-center md:justify-between justify-center w-[100%]">
              <li>
                <p className="font-[400]  md:text-[18px] text-[12px] leading-[21px] md:leading-[31px]
                 font-poppins text-[#9F9F9F]">{item.price}</p>
              </li>
              <li>
                <button onClick={() => handleAddToCart(item)} className="md:px-[0.5rem]  hover:text-[#08AC9F] hover:bg-[#fff] hover:border-[#08AC9F]
                flex w-[76px] h-[27px] border-[1.8px] text-wrap  border-[#F5F5F5] bg-[#08AC9F] text-[12px] leading-[25px] md:w-[113px] md:h-[43px] 
                 text-[#F8F8F8] md:rounded-[33px] rounded-[20px] items-center justify-center">
                  Add Cart
                </button>
              </li>
             
            </ul>
          </div>
        ))}
      </div>
    </div>

  </section>
  );
}

SpecialSales.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })
};

export default SpecialSales;
