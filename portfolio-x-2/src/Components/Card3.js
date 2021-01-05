import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard3 = () => (
    <Card3>
      <Image src="mock.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Interior Design Mockup </Card.Header>
        <Card.Meta>
          <span className="date">HTML/CSS</span>
        </Card.Meta>
        <Card.Description>
        Interior Design Mockup 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a href="https://github.com/WinstonAC/INTERIOR-DESIGN-MU.git">click</a>
      </Card.Content>
    </Card3>
);

export default CardExampleCard3;
