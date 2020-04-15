import React, { useState } from 'react';
import {
  Container,
  Title,
  InputContainer,
  InputCadastro,
  SendButton,
  SendText,
  ButtonVoltar,
  TextVoltar,
  ContainerCheckbox,
} from './styles';
import { ScrollView, Alert, StatusBar } from 'react-native';
import { CheckBox, Text } from 'native-base';
import { Background } from '../../components/Background';
import firebase from '../../config/firebaseConfig';
import 'firebase/firestore';

export default function SignUp(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [salesman, setSalesman] = useState(false);

  async function handleCreateUser() {
    if (salesman) {
      const users = firebase
        .firestore()
        .collection('request_salesman')
        .doc();
      users.set({
        name,
        mobile,
        salesman,
        admin: false,
      });
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          const users = firebase
            .firestore()
            .collection('users')
            .doc(`${res.user.uid}`);
          users.set({
            uid: res.user.uid,
            name,
            mobile,
            salesman: false,
            admin: false,
          });

          Alert.alert('Sucesso', 'Usuário criado com sucesso');
          props.navigation.navigate('Feed');
        })
        .catch(error => {
          Alert.alert(error.message);
        });
    }
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Background>
        <Container>
          <Title> Criar Conta </Title>
          <InputContainer>
            <InputCadastro
              placeholder="Seu nome"
              onChangeText={text => setName(text)}
            />
          </InputContainer>
          <InputContainer>
            <InputCadastro
              placeholder="Seu email"
              keyboardType="email-address"
              onChangeText={text => setEmail(text)}
            />
          </InputContainer>
          <InputContainer>
            <InputCadastro
              placeholder="Celular"
              onChangeText={text => setMobile(text)}
            />
          </InputContainer>
          <InputContainer>
            <InputCadastro
              placeholder="Sua senha"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
          </InputContainer>
          <ContainerCheckbox>
            <CheckBox
              checked={salesman}
              onPress={() => setSalesman(!salesman)}
              color="#f2ab25"
            />
            <Text style={{ color: '#696969' }}>
              {' '}
              &nbsp; &nbsp; Sou um vendedor Magic Pet!
            </Text>
          </ContainerCheckbox>
          <SendButton onPress={handleCreateUser}>
            <SendText>Criar Conta</SendText>
          </SendButton>
          <ButtonVoltar onPress={() => props.navigation.navigate('SignIn')}>
            <TextVoltar>Voltar</TextVoltar>
          </ButtonVoltar>
        </Container>
      </Background>
    </ScrollView>
  );
}
