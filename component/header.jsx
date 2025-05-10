import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header=()=>{
const cartData = useSelector(state=>state.mycart.cart);
const cartLength= cartData.length;
const navigate= useNavigate();
  return(
        <>
          <div id="header"> 
            {cartLength}
          <FaShoppingCart  onClick={()=>{navigate("/mycart")}}  style={{cursor:"pointer"}}/>
          </div>
        </>
    )
}

export default Header;