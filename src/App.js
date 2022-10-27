import Doctor from "./components/Doctors/Doctor";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Package from "./components/Package/Package";

 

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Home/>
        <Package/>
        <Doctor></Doctor>
    </div>
  );
}

export default App;
