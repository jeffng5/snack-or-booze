import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import db from "./db"
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";


function DrinkMenu() {
    let drinks = db['drinks']
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Drink Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          function getDrinkMenu(){ 
      
          <ListGroup>          
              <Link to={`/drinks/${drinks[0]['id']}`}>
                <ListGroupItem>{drinks[0]['name']}</ListGroupItem>
              </Link>
          </ListGroup>} 
          drinks.forEach(getDrinkMenu)
        </CardBody>
      </Card>
    </section>
  );
}

export default DrinkMenu;