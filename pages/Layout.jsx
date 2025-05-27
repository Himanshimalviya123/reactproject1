import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import TopMenu from "../component/topmenu";
import Header from "../component/header";


const Layout=()=>{
    return(
        <>
         <TopMenu/>
         
        <div id="topHeader"> 
        
     
      
         
       
           <Outlet/>
             <Footer/>
     
        </div>
          

        </>
    )
}

export default Layout;