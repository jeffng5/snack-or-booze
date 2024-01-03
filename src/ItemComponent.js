import React from 'react';
import { Redirect, useParams } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText } from "reactstrap";



const ItemComponent = ({food, description, recipe, serve}) => {
 
return(    
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {food}
          </CardTitle>
          <CardText className="font-italic">{description}</CardText>
          <p>
            <b>Recipe:</b> {recipe}
          </p>
          <p>
            <b>Serve:</b> {serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
    
}

export default ItemComponent