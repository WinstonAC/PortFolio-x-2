import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard3 = () => (
    <Card>
      <Image src="mock.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Dstination Unknown  </Card.Header>
        <Card.Meta>
          <span className="date">HTML/CSS</span>
        </Card.Meta>
        <Card.Description>
        Motivation: Destination Unknown 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a href="https://destination-unknown.billycampbell.dev/">click</a>
      </Card.Content>
    </Card>
);

export default CardExampleCard3;
