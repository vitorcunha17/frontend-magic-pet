import React, { useState } from 'react';
import Dialog from 'react-native-dialog';
import { View, Alert } from 'react-native';
import firebase from '../../config/firebaseConfig';

// import { Container } from './styles';

export default function DialogForgotPassword({ title, visible, onCancel }) {
  const [email, setEmail] = useState('');
  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Input
          placeholder="E-mail"
          onChangeText={text => setEmail(text)}
        />
        <Dialog.Button onPress={onCancel} label="Cancel" />
        <Dialog.Button
          onPress={() => {
            firebase
              .auth()
              .sendPasswordResetEmail(email)
              .then(() => {
                onCancel();
                setTimeout(() => {
                  Alert.alert(
                    'E-mail enviado, verifique sua caixa de email, caso não esteja lá olhe no spam!'
                  );
                }, 400);
              })
              .catch(() => {
                onCancel();
                setTimeout(() => {
                  Alert.alert(
                    'Esse endereço não está cadastrado, ou não está no formato correto!'
                  );
                }, 400);
              });
            setEmail('');
          }}
          label="Confirmar"
        />
      </Dialog.Container>
    </View>
  );
}
