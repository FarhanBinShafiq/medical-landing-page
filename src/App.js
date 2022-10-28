import Neorology from "./components/Department/Neurology/Neorology";
import Departments from "./components/Departments/Departments";
import Doctor from "./components/Doctors/Doctor";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Package from "./components/Package/Package";

 

function App() {
  return (
    <div className="App">
        <Header></Header>
        {/* <Home/>
        <Package/>
        <Doctor></Doctor>  */}
        <Departments></Departments>
       
    </div>
  );
}

export default App;
