import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText } from "reactstrap";



const ItemComponent = ({key, id, description, recipe, serve }) => {




return(    
    <>
    <CardTitle>
      <Card>
        <CardBody>
    {key}
        {id}
        
           
      
          <CardText className="font-italic">{description}
          <p>
            <b>Recipe:</b> {recipe}
          </p>
          <p>
            <b>Serve:</b> {serve}
          </p>
          </CardText>
        </CardBody>
      </Card>
      </CardTitle>
    </>
  );
    
}

export default ItemComponent