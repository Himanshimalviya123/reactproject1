import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";

import MenWatches from "../pages/MenWatches";
import WoMenWatches from "../pages/WoMenWatches";
import KidsWatches from "../pages/KidsWatches";

const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
         
          <Route path="home" element={<Home/>} />
          <Route path="menwatches" element={<MenWatches/>}/>
          <Route path="womenwatches" element={<WoMenWatches/>}/>
          <Route path="kidswatches" element={<KidsWatches/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;