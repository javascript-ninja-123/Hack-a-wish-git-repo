import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const SearchCard = ({ fullname, illness, age, shortProfile, moneyRaised, thumbnailSrc }) => (
  <Card>
    <Image src={thumbnailSrc} />
    <Card.Content>
      <Card.Header>{fullname}, {age}</Card.Header>
      <Card.Meta>
        <span>Has {illness}</span>
      </Card.Meta>
      <Card.Description>{shortProfile}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='dollar sign' />
        Raised {moneyRaised}
      </a>
    </Card.Content>
  </Card>
);

export default SearchCard;