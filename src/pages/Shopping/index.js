import React from 'react';
import { Image, Dimensions } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
} from 'native-base';
import Icon from '../../components/Icon';
import DefaultHeader from '../../components/DefaultHeader';

export default function Shopping(props) {
  const { height } = Dimensions.get('window');
  return (
    <Container>
      <DefaultHeader title="Compras" navigation={props.navigation} />
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2012%2F01%2F23%2F12%2FWDL-Logo-10771_8200_042402928_1938297183.jpg',
                }}
              />
              <Body>
                <Text>Loja de Teste</Text>
                <Text note>Abril 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={{
                  uri:
                    'https://appsisecommerces3.s3.amazonaws.com/clientes/cliente5734/produtos/44773/Z4623.jpg',
                }}
                style={{ height: 200, width: 200, flex: 1 }}
              />
              <Text>
                {'\n'}
                Indicado para cães adultos; Livre de corantes e aromatizantes
                artificiais; Alimento rico em nutrientes; Promove o equilíbrio
                intestinal; Protege as articulações; Disponível em embalagens de
                15kg e 20kg.
              </Text>
              <Text style={{ color: '#f2ab25' }}>
                {'\n'}
                R$ 59,90
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }}>
                <Icon name="cart" />
                <Text>COMPRAR</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2012%2F01%2F23%2F12%2FWDL-Logo-10771_8200_042402928_1938297183.jpg',
                }}
              />
              <Body>
                <Text>Loja de Teste</Text>
                <Text note>Abril 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uBZlYzSOfarGu4Gwx4fDV1Q4WJ9ESVyhMMnuF-4vaY0HmWf0',
                }}
                style={{ height: 200, width: 200, flex: 1 }}
              />
              <Text>
                {'\n'}
                Indicado para cães adultos; Livre de corantes e aromatizantes
                artificiais; Alimento rico em nutrientes; Promove o equilíbrio
                intestinal; Protege as articulações; Disponível em embalagens de
                15kg e 20kg.
              </Text>
              <Text style={{ color: '#f2ab25' }}>
                {'\n'}
                R$ 59,90
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }}>
                <Icon name="cart" />
                <Text>COMPRAR</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

Shopping.navigationOptions = {
  tabBarLabel: 'Compras',
  tabBarIcon: <Icon name="cart" size={25} />,
};
