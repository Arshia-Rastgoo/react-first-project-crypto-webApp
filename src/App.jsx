import Fottercomponent from "./Components/UI/Fotter.component";
import Navbarcomponent from "./Components/UI/Navbar.component";
import { Routes,Route } from "react-router-dom";
import Homepage from "./Pages/Home.page";
import FAQpage from "./Pages/FAQ.page";
import AboutUspage from "./Pages/AboutUs.page";
import Contactuspage from "./Pages/Contactus.page";
import Coinpage from "./Pages/Coin.page";
function App() {
  return (
    <div >
      
      <Navbarcomponent/>
     
      <div className="wrapper">
       <Routes>
        <Route path="/Home" element={Homepage()}/>
        <Route path="/Coin/:id" element={Coinpage()}/>
        <Route path="/FAQ" element={FAQpage()}/>
        <Route path="/AboutUs" element={AboutUspage()}/>
        <Route path="/Contact-us" element={Contactuspage()}/>
       </Routes>
      </div>
      
      <Fottercomponent/>
    </div>
  );
}

export default App;
