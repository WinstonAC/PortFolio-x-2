import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard4 = () => (
    <Card4>
      <Image src="phonebook.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>PhoneBook</Card.Header>
        <Card.Meta>
          <span className="date">Built in Python</span>
        </Card.Meta>
        <Card.Description>
        This program was built using python and SQL with Peewee.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a href="https://github.com/WinstonAC/PhoneBook.py.git">click</a>
      </Card.Content>
    </Card4>
);

export default CardExampleCard4;