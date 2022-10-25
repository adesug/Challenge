import React from "react";
import { Routes, Route,  } from 'react-router-dom';
import Header from './components/header';
import Dashboard from './pages/dashboard';
import FindCars from "./pages/findcars";
import ResultFindCars from "./pages/resultFindCars";
import CarDetails from './pages/carDetails';
import Footer from "./components/footer";
const App = () => {
  // const location = useLocation()

  // console.log(location.pathname);
  return (
    <div className="App">
      <Header/>
       <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/FindCars" element={<FindCars/>}/>
        <Route path="/ResultFindCars" element={<ResultFindCars/>}/>
        <Route path="/CarDetails/:CarsId" element={<CarDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;