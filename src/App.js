import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Routes, Switch } from "react-router-dom";
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
  const [foods, setFoods] = useState()
  const makeItem = (name, description, recipe, serve) => {setFoods(foods => [...foods, {name, description, recipe, serve}])}
  
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
            {snacks.map(c => (
              <MenuComponent
              key={c.key}
              name = {c.name}
              id = {c.id}
             />))}
            </Route>
            <Route exact path= "/drinks">
            {drinks.map(c => (
              <MenuComponent 
              key = {c.key}
              name= {c.name}
              id={c.id}
            />))}
            </Route>
           
            <Route exact path='/snacks/id' element = {<ItemComponent key = {snacks.key}id = {snacks.id}
            description ={snacks.description} recipe={snacks.description} serve= {snacks.serve}
            />}/>
        
       
            <Route exact path="/drinks/id" element= {<ItemComponent key = {drinks.key} id = {drinks.id} description= {drinks.description} recipe= {drinks.recipe} serve= {drinks.serve} />}/>
           
            <Route exact path= "/addItem" element = {<ItemForm />} />
             
            
              <p>Hmmm. I can't seem to find what you want.</p>
            
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
