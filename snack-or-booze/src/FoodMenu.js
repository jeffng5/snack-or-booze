import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import db from "./db"
let snacks = db['snacks']
console.log(snacks[0]['id'])
function FoodMenu() {
  let snacks = db['snacks']
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
          <ListGroup>
              
              <Link to={`/snacks/${snacks[0]['id']}`}>
                <ListGroupItem>{snacks[0]['name']}</ListGroupItem>
              </Link>
            
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
