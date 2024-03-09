import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup
  } from "reactstrap";
import db from "./db"
import SnackOrBoozeApi from "./Api";
import ItemComponent2 from './ItemComponent1'

const MenuComponentDrink = () => {

    console.log(db['drinks'][0])

  
    const [drinks, setDrinks] = useState([]);

    useEffect(()=>{
      getDrinks();

    },
    []);

    async function getDrinks() {
      try {
      let drinks1 = await SnackOrBoozeApi.getDrinks();
      setDrinks(db['drinks'])
      console.log(db['drinks'])
      console.log(drinks)
      return drinks
    }
    catch (e) {
      console.log(e)
    }
  }


    return (<section className="col-md-4">
    <Card>
      <CardBody>
        <CardTitle className="font-weight-bold text-center">
          Food Menu
        </CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.

     

          {drinks.map(c => (
               <ItemComponent2 
               key = {c.key}
               name= {c.name}
               id={c.id}
               description = {c.description}
               recipe = {c.recipe}
               serve = {c.serve}
             />))}  
        </CardText>
     
        <div className='item-title'>
        <ListGroup>
        
        {/* <Link to = {`snacks/${snacks[0]['id']}`}>{snacks[0]['name']}</Link>
        <Link to = {`drinks/${drinks[0]['id']}`}>{drinks[0]['name']}</Link> */}
         
        
           </ListGroup>  
        </div>
      </CardBody>
    </Card>
  </section>)



  }


  export default MenuComponentDrink