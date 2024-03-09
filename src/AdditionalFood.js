import React from 'react'
import './App.css'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup
  } from "reactstrap";


const AdditionalFood = ({food, description, recipe, serve}) => {

return (
<section className="col-md-4">
<Card>
  <CardBody>
    <CardTitle className="font-weight-bold text-center">
      Food Menu
    </CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </CardText>
 
    <div className='item-title'>
    <ListGroup>
  {food}
      {/* <ItemComponent
      id= {food}
      name = {food}
      description = {description}
      recipe = {recipe}
      serve={serve}
/>     */}

    
       </ListGroup>  
    </div>
  </CardBody>
</Card>
</section>)
}

export default AdditionalFood;