import React from 'react';
import { View, Platform, Dimensions, Alert } from 'react-native';
import { Header, Body, Title } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../../config/firebaseConfig';

export default function DefaultHeader({ title, navigation }) {
  const { height } = Dimensions.get('window');
  return (
    <View>
      {Platform.OS === 'ios' ? (
        <Header>
          <Body>
            <Title>{title}</Title>
          </Body>
          <TouchableOpacity
            onPress={() => {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  Alert.alert('Deslogado com sucesso!');
                  navigation.navigate('SignIn');
                })
                .catch(err => {
                  Alert.alert('Ocorrey um erro tente novamente!');
                });
            }}
          >
            <Title style={{ marginTop: 15, color: 'red' }}>Sair</Title>
          </TouchableOpacity>
        </Header>
      ) : (
        <Header style={{ height: height * 0.1, display: 'flex' }}>
          <Body style={{ alignItems: 'center' }}>
            <Title style={{ marginTop: 35 }}>{title}</Title>
          </Body>
          <TouchableOpacity
            onPress={() => {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  Alert.alert('Deslogado com sucesso!');
                  navigation.navigate('SignIn');
                })
                .catch(err => {
                  Alert.alert('Ocorrey um erro tente novamente!');
                });
            }}
          >
            <Title style={{ marginTop: 41, color: 'red' }}>Sair</Title>
          </TouchableOpacity>
        </Header>
      )}
    </View>
  );
}
