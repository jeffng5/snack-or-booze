import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemForm from "./ItemForm"
import db from "./db"
import ItemComponent from "./ItemComponent";
import MenuComponentSnack from "./MenuComponentSnack";
import MenuComponentDrink from './MenuComponentDrink';



const App = () => {

  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [foods, setFoods] = useState([])
  
  // const makeItem = (name, description, recipe, serve) => {setFoods(foods => [...foods, {name, description, recipe, serve}])}

  
  useEffect(()=>{
    getDrinks();
    getSnacks();
  },
  []);
  
  async function getDrinks() {
    try {
    let drinks1 = await SnackOrBoozeApi.getDrinks();
    setDrinks(db['drinks'])
    console.log(db['drinks'])
    return drinks
  }
  catch (e) {
    console.log(e)
  }
}
  async function getSnacks() {
    try {
    let snacks1 = await SnackOrBoozeApi.getSnacks();
    setSnacks(db['snacks']);
    console.log(db['snacks'])
    return snacks
  }
  catch (e) {
    console.log(e)
  }
  }

  return (
    <div className="App">

<BrowserRouter>
<NavBar /> 
        <main>
          <Routes>
            
            <Route exact path= '/' element ={<Home />}/>
            <Route exact path= "/snacks" element={<MenuComponentSnack  />}/>
            <Route exact path= "/drinks" element={<MenuComponentDrink />}/>
            <Route exact path= '/menu/:id' element = {<ItemComponent />}/> 
            
            
          </Routes>
        </main>
        {/* <ItemForm makeItem={makeItem}/> */}
          </BrowserRouter>
        
      <ItemForm />

       
        

    </div>
  );
}

export default App;
