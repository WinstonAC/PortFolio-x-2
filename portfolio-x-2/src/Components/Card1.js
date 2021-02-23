import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./card1.css"

const CardExampleCard1 = () => (
  <Card className="Billy">
    <Image src="https://i.imgur.com/mXdyn1Y.png" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Dog Food API </Card.Header>
      <Card.Meta>
        <span className="date">Built In Express</span>
      </Card.Meta>
      <Card.Description>
      Motivation: Recipe Model for Dog Food API
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="https://github.com/WinstonAC/Dog-Food-APi-x-Express.git ">click</a>
    </Card.Content>
  </Card>
);

export default CardExampleCard1;
