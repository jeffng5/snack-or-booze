import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import Menu1 from "./DrinkMenu"
import Drink from "./DrinkItem"
import ItemForm from "./ItemForm"
import db from "./db"
import ItemComponent from "./ItemComponent";
import MenuComponent from "./MenuComponent";

console.log(db['drinks'])

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [isLoading1, setIsLoading1] = useState(true)
  const [drinks, setDrinks] = useState([]);
  const [foods, setFoods] = useState([])
  const makeItem = (food, description, recipe, serve) => {setFoods(foods => [...foods, {food, description, recipe, serve}])}
  
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
      console.log(snacks)
    }
    getSnacks();
  
    async function getDrinks(){
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks)
      setIsLoading1(false)
      console.log(drinks)
    }
    getDrinks();
  
  }, []);

  if (isLoading1) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            
              <Home drinks={drinks}/>
            
            </Route>
            <Route exact path="/snacks">
              <MenuComponent element= {0} title="Snacks" />
              <MenuComponent element= {1} title="Snacks" />
            </Route>
            <Route exact path= "/drinks">
             <MenuComponent element={2} title="Drinks" />
            </Route>
           
            <Route path="/snacks/:id">
              <ItemComponent item={snacks}/>
              </Route>
            <Route path="/drinks/:id">
              <ItemComponent item={drinks} />
              </Route>
            <Route exact path= "/addItem">
              <ItemForm makeItem={makeItem}/>
              <div>
              {foods.map(({food, description, recipe, serve})=> <ItemComponent food={food} description={description} recipe={recipe} serve={serve}/>)}
              </div>
              </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
