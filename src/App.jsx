import { createContext, useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Buttons from "./Components/Navbar/Buttons/Buttons";
import Cards from "./Components/Hero/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

export const FoodContext = createContext();

function App() {
  const [food, setFood] = useState([]);
const [allFood, setAllFood] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/food")
      .then((res) => res.json())
      .then((data) => {
        setAllFood(data);
       setFood(data);
      }
    );
  }, []);

  return (
    <>
      <FoodContext.Provider value={{ food, setFood, allFood, setAllFood }}>
        <Navbar />
        <Buttons />
        <Cards />
      </FoodContext.Provider>
    </>
  );
}

export default App;
