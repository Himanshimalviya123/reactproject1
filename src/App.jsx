import Layout from "../component/layout";
import Home from "../component/home";
 import { BrowserRouter,Routes,Route, } from "react-router-dom";
import Footer from "../component/footer";


 const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="footer" element={<Footer/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   
   


   
  )
}
export default App;


