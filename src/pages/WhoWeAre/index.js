import React from 'react';
import MapView from 'react-native-maps';
import Icon from '../../components/Icon';
import DefaultHeader from '../../components/DefaultHeader';
import { Container } from 'native-base';

export default function WhoWeAre(props) {
  return (
    <Container>
      <DefaultHeader title="Onde Estamos?" navigation={props.navigation} />
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Container>
  );
}

WhoWeAre.navigationOptions = {
  tabBarLabel: 'Onde Estamos',
  tabBarIcon: <Icon name="map" size={25} />,
};
