import React from 'react'
import { Link } from 'react-router-dom'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
  } from "reactstrap";
  import db from "./db"

  function MenuComponent({id, name}) {
 

    return (<section className="col-md-4">
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
        
        <Link to = {`snacks/${id}`}>{name}</Link>
       <Link to = {`drinks/${id}`}></Link>
         
        
        
        </ListGroup> 
        </div>
      </CardBody>
    </Card>
  </section>)



  }


  export default MenuComponent