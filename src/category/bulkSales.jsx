import { Link, useNavigate } from "react-router-dom";
import { bulkdata } from "../assets/data/arrivaldata";
import PropTypes from 'prop-types';

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Carts";
import { useState } from "react";

const BulkSales = () => {
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
    <section className="flex flex-col  bg-[#FAFEFF] w-[100%]  rounded-[24px] p-[24px]  justify-center items-center mt-[2rem]">
    {/* New Arrival Section */}
    <div className="flex flex-col items-start justify-start ">
      {/* Heading */}
      <div>
        <h1 className="text-[#B607A4] font-[500] text-[48px] leading-[80px]">Bulk Sales </h1>
      </div>
      
      {/* Mapping with image slider */}
      <div className="grid grid-col-1 md:grid-cols-2 w-[100%] rounded-[24px] gap-[18px] 
       lg:grid lg:grid-cols-4 pt-[2rem]">
        {bulkdata.map((item) => (
          <div key={item.id} className="flex flex-col items-center justify-center md:w-[253px] w-[100%] 
          rounded-[24px] gap-[10px] p-[15px] bg-[#F8F8F8]">
            <img src={item.img} alt="product-img" className="w-[217px] h-[170px] rounded-[32px]" />

           
            {item.title2 && <h1 className="font-[500] text-[18px] leading-[31px] font-poppins text-[#7E69BB]"><Link to={`/${item.id}`}>{item.title2}</Link></h1>}
            {item.title3 && <h1 className="font-[500] text-[28px] leading-[42px] font-poppins text-[#70B35A]"><Link to={`/${item.id}`}>{item.title3}</Link></h1>}

            <p className="font-[400] text-[12px] leading-[18px] font-poppins text-[#9F9F9F] text-center">{item.description}</p>
            <ul className="flex gap-[55px] h-[54px] items-center md:justify-between justify-center w-[100%]">
              <li>
                <p className="font-[400]  text-[18px] leading-[31px]
                 font-poppins text-[#9F9F9F]">{item.price}</p>
              </li>
              <li>
                <button onClick={() => handleAddToCart(item)} className="md:px-[0.5rem]  hover:text-[#08AC9F] hover:bg-[#fff] hover:border-[#08AC9F]
                flex h-[49px] border-[1.8px] text-wrap w-[113px] border-[#F5F5F5] bg-[#08AC9F] text-[12px] leading-[25px]
                 text-[#F8F8F8] md:rounded-[41px] rounded-[20px] items-center justify-center">
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

BulkSales.propTypes = {
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

export default BulkSales;
