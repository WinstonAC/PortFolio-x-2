import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard = () => (
  <Card>
    <Image src="dogfoodapi.png" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Dog Food API </Card.Header>
      <Card.Meta>
        <span className="date">Built In Express</span>
      </Card.Meta>
      <Card.Description>
        Recipe Model for Dog Food API
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="https://github.com/WinstonAC/Dog-Food-APi-x-Express.git ">click</a>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
