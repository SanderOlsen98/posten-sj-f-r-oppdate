import "./App.css";
import Header from "./components/header/Header";
import LeftCars from "./components/leftcars/LeftCars";
import Navbar from "./components/navbar/Navbar";
import RightCars from "./components/rightcars/RightCars";

function App() {
  return (
    <div className="App">
      <Header />
      <div className=" w-full min-h-[90vh] grid grid-cols-12">
        <Navbar />
        <div className=" grid grid-cols-1 xl:grid-cols-5 w-full col-span-10 ">
          <LeftCars />
          <RightCars />
        </div>
      </div>
    </div>
  );
}

export default App;
