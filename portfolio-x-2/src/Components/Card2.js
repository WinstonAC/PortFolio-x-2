import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard2 = () => (
    <Card>
      <Image src="dogfoodapi.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Photo</Card.Header>
        <Card.Meta>
          <span className="date">Built in Django</span>
        </Card.Meta>
        <Card.Description>
          This App was buit 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a href="https://github.com/WinstonAC/Dog-Food-APi-x-Express.git ">click</a>
      </Card.Content>
    </Card>
);

export default CardExampleCard2;
