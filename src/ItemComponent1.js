import React, { useState, useEffect } from 'react'
import db from './db'
import { Link } from 'react-router-dom'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup
  } from "reactstrap";

function ItemComponent1({id, name, description, recipe, serve}) {

  const [snacks, setSnacks] = useState([]);


    useEffect(()=>{

      getSnacks();
    },
    []);


    async function getSnacks() {
      try {

      setSnacks(db['snacks']);
      console.log(db['snacks'])
      return snacks
    }
    catch (e) {
      console.log(e)
    }
    }
    const foodId = {
      name : {id}}
return (
<section className="col-md-4">
<Card>
  <CardBody>
    <CardTitle className="font-weight-bold-text-center">
      Food Menu
    </CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </CardText>
 
    <div className='item-title'>
    <ListGroup>
 
    <Link to = {`/menu/${id}`}>  
  <h4>{name}</h4></Link>

   <div>{description}</div>
   <div>{recipe}</div>
   <div>{serve}</div>
     
    
       </ListGroup>  
    </div>
  </CardBody>
</Card>
</section>)
}

export default ItemComponent1