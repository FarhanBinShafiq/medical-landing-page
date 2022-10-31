import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Neorology from "./components/Department/Neurology/Neorology";
import Departments from "./components/Departments/Departments";
import Doctor from "./components/Doctors/Doctor";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Package from "./components/Package/Package";

 

function App() {
  return (
    <div className="App">
         <Header></Header>
          {/* <Home/>
        <Clients></Clients>
         <Package/>
        <Doctor></Doctor>  
  <Departments></Departments>  */}
        

        <Contact></Contact> 
      <Footer></Footer>
       
    </div>
  );
}

export default App;
