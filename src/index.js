import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';
import createNavigator from './routes';
import createNavigatorSalesman from './routesSalesman';
import firebase from './config/firebaseConfig';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [userLogged, setUserLogged] = useState(false);
  const [userType, setUserType] = useState('client');

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto: require('../assets/Fonts/Roboto.ttf'),
        Roboto_medium: require('../assets/Fonts/Roboto_medium.ttf'),
        NotoSans: require('../assets/Fonts/Noto-Sans.ttf'),
        NotoSansBold: require('../assets/Fonts/Noto-Sans-Bold.ttf'),
        ...Ionicons.font,
      });

      setIsReady(true);
    };

    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        if (user.admin) setUserType('admin');

        if (user.salesman) setUserType('salesman');

        await AsyncStorage.setItem('uid', user.uid);
        setUserLogged(true);
      }
    });

    loadFonts();
  }, []);

  function createRoutes() {
    if (userType === 'salesman') return createNavigatorSalesman(userLogged);

    return createNavigator(userLogged);
  }

  const Routes = createRoutes();

  if (!isReady) {
    return <AppLoading />;
  } else {
    return <Routes />;
  }
}
