
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
// import Contact from "./components/Contact/Contact";
import Neorology from "./components/Department/Neurology/Neorology";
import Departments from "./components/Departments/Departments";
import Doctor from "./components/Doctors/Doctor";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Package from "./components/Package/Package";

import Services from "./components/Shared/Services/Services";
 


function App() {
  return (
    <div className="App">




      <BrowserRouter>
        <Header></Header>
      <Routes>
          {/* 
          <Route path="department" element={<Departments />}></Route>
<Route path="clients" element={<Clients />}></Route>
          <Route path="blogs" element={<Blogs />}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="contact" element={<Contact/>}></Route>

        </Routes>  
        
        {/* <Services/>  */}
        {/* <Footer></Footer>  */}
        
      
        
      </BrowserRouter>


    </div>
  );
}

export default App;
