import React from 'react';
import { Redirect, useParams } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText } from "reactstrap";


function ItemComponent({item, cantFind}) {
    const { id } = useParams() 
    let thing = item.find(thing => thing.id === id);
    if (!item) return <Redirect to={cantFind} />;

return(    
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {thing.name}
          </CardTitle>
          <CardText className="font-italic">{thing.description}</CardText>
          <p>
            <b>Recipe:</b> {thing.recipe}
          </p>
          <p>
            <b>Serve:</b> {thing.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );

}

export default ItemComponent