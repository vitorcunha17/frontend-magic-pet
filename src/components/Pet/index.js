import React from 'react'; 
import { Card, CardItem, Left, Thumbnail, Body, Text, Button, Right, Icon } from 'native-base';

export default function Pet({ pet }) {
    console.log(pet);
    
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={{ uri: 'https://love.doghero.com.br/wp-content/uploads/2016/09/destaqueestilosos1.jpg' }} />
          <Body>
            <Text>{pet.name}</Text>
          </Body>
        </Left>
    </CardItem>
   </Card>
  );
}
