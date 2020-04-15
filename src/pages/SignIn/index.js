import React, { useState } from 'react';
import {
  Container,
  Title,
  InputLogin,
  LoginButton,
  LoginText,
  InputContainer,
  CadastroButton,
  CadastroText,
  AboutButton,
  TextRememberPassword,
} from './styles';
import { Background } from '../../components/Background';
import { MaterialIcons } from '@expo/vector-icons';
import { Alert, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import firebase from '../../config/firebaseConfig';
import DialogForgotPassword from '../../components/DialogForgotPassword';

export default function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  function handleSubmitLogin() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.navigate('Feed');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Background>
        <Container>
          <DialogForgotPassword
            visible={visible}
            title="Digite seu email, entraremos em contato para que você possa redefinir sua senha!"
            onCancel={() => setVisible(false)}
          />
          <Title> MagicPet </Title>
          <Title>
            {' '}
            <MaterialIcons name="pets" size={45} />{' '}
          </Title>
          <InputContainer>
            <InputLogin
              placeholder="E-mail"
              placeholderTextColor="#999999"
              onChangeText={text => setEmail(text)}
            />
          </InputContainer>
          <InputContainer>
            <InputLogin
              secureTextEntry={true}
              placeholder="Sua Senha"
              placeholderTextColor="#999999"
              underlineColorAndroid="transparent"
              onChangeText={text => setPassword(text)}
            />
          </InputContainer>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <TextRememberPassword>
              Esqueceu sua senha? Toque aqui!
            </TextRememberPassword>
          </TouchableOpacity>
          <LoginButton onPress={handleSubmitLogin}>
            <LoginText>Entrar</LoginText>
          </LoginButton>
          <CadastroButton onPress={() => props.navigation.navigate('SignUp')}>
            <CadastroText>Cadastrar</CadastroText>
          </CadastroButton>
          <AboutButton>
            <LoginText>Sobre</LoginText>
          </AboutButton>
        </Container>
      </Background>
    </ScrollView>
  );
}
