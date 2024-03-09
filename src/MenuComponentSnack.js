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
import ItemComponent1 from './ItemComponent1'

const MenuComponentSnack = ({food, description, recipe, serve}) => {

    console.log(db['drinks'][0])

    const [snacks, setSnacks] = useState([]);


    useEffect(()=>{

      getSnacks();
    },
    []);


    async function getSnacks() {
      try {
      let snacks1 = await SnackOrBoozeApi.getSnacks();
      setSnacks(db['snacks']);
      console.log(db['snacks'])
      console.log(snacks)
      return snacks
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

          {snacks.map(c => (
              <ItemComponent1
              key={c.key}
              name = {c.name} 
              id = {c.id}
              description= {c.description}
              recipe = {c.recipe}
              serve = {c.serve}
             />))} 

              {food}
              {description}
              {recipe}
              {serve}
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


  export default MenuComponentSnack