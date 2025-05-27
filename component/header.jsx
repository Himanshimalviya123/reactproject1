// import { FaShoppingCart } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";
// import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const cartData=useSelector(state=>state.mycart.cart);
    const navigate=useNavigate();
    const cartlength=cartData.length;
    return(
        <>
         <div id="header">
            <h1 id="title">MEESHO</h1> 
             <input type="text"   id="inp"/>
             <h6 className="h6">Become a<br/> suplier</h6>
             <h6 className="h6">Investor<br/> Relations</h6>
              {/* <CiSearch   id="Search"/> */}
             <h4> <br/>profile</h4>
             
            {/* <h4>{cartlength}onClick={()=>{navigate("/mycart")}}  <br/>cart</h4>  */}
           </div>
        </>
    )
}
export default Header;
