import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard2 = () => (
  <Card>
    <Image src="Photo-Django.png" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Photo_Django</Card.Header>
      <Card.Meta>
        <span className="date">Built in Django</span>
      </Card.Meta>
      <Card.Description>
        Motivation This project was created as the backend to the Photonyc-React
        project
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="https://github.com/WinstonAC/Photo-React-NYC.git">click</a>
    </Card.Content>
  </Card>
);

export default CardExampleCard2;
