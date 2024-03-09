import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import SnackOrBoozeApi from './Api'
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import AdditionalFood from './AdditionalFood'



const ItemComponent = () => {

  const [snackState, setSnackState] = useState([])
  const [drinkState, setDrinkState] = useState([])
  
  const location = useLocation();
  console.log(location)
  const item = location.pathname.split('/')[2]
  
  async function getSnacks() {
  let snack = await SnackOrBoozeApi.getSnacks()
  console.log(snack[0].id)
  for (let i = 0 ; i < snack.length; i++){
    if (snack[i].id === item){
      setSnackState(snack[i])
  }
  }}

  async function getDrinks() {
    let drink = await SnackOrBoozeApi.getDrinks()
    for (let i = 0; i < drink.length; i++) {
      if (drink[i].id === item) {
        setDrinkState(drink[i])
      }
    }
  }



  useEffect(()=> {
    getSnacks();
    getDrinks();
  }, []);



    return(    
      <>
      <CardTitle>
        <Card>
          <CardBody>
  
             {snackState.name}
             {drinkState.name}
        
            <CardText className="font-italic">
            <p>
              <b>Recipe: {snackState.recipe} {drinkState.recipe}</b> 
            </p>
            <p>
              <b>Serve: {snackState.serve} {drinkState.serve}</b>
            </p>
            </CardText>
          </CardBody>
        </Card>
        </CardTitle>
  <AdditionalFood />
      </>
    );    
  }
  

export default ItemComponent