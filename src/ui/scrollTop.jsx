import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollTop = () => {


    const { cart,payment,confirm,checkout,card } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [cart,confirm,payment, card,checkout]);
  
    return null;
  
}

export default ScrollTop
