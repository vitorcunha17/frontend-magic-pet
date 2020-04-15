import React, { useState, useEffect } from 'react';
import { FlatList, Dimensions, Platform } from 'react-native';
import Icon from '../../components/Icon';
import { Title, Header, Body, Container, Button, Text } from 'native-base';
import Pet from '../../components/Pet';
export default function MyPets(props) {
  const { height } = Dimensions.get('window');
  const [pets, setPets] = useState([]);

  return (
    <Container>
      {Platform.OS === 'ios' ? (
        <Header>
          <Body>
            <Title>Contato com a fábrica</Title>
          </Body>
        </Header>
      ) : (
        <Header style={{ height: height * 0.1, display: 'flex' }}>
          <Body style={{ alignItems: 'center' }}>
            <Title style={{ marginTop: 35 }}>Contato com a fábrica</Title>
          </Body>
        </Header>
      )}
      <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text> Lista de produtos para os vendedores</Text>
      </Body>
    </Container>
  );
}

MyPets.navigationOptions = {
  tabBarLabel: 'Pedidos (Fábrica)',
  tabBarIcon: <Icon name="business" size={25} />,
};
