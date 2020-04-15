import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import {
  Title,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Body,
  ListItem,
  List,
  Right,
} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Icon from '../../components/Icon';
import DefaultHeader from '../../components/DefaultHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Chat(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function requestPermissions() {
      await Permissions.askAsync(Permissions.CAMERA);
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }

    requestPermissions();
  }, []);

  async function takeAndUploadPhotoAsync() {
    // Display the camera to the user and wait for them to take a photo or to cancel
    // the action
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (result.cancelled) {
      return;
    }

    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = result.uri;
    setImage(localUri);
  }
  return (
    <Container>
      <DefaultHeader title="Profile" navigation={props.navigation} />
      <Content>
        <TouchableOpacity onPress={takeAndUploadPhotoAsync}>
          <Image
            source={{ uri: image }}
            style={{
              width: 200,
              height: 200,
              backgroundColor: '#d9d9d9',
              borderRadius: 100,
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
        </TouchableOpacity>
      </Content>
    </Container>
  );
}

Chat.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: <Icon name="person" size={25} />,
};
