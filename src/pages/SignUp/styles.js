import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0px 15px;
  align-items: center;
  margin-top: 30px;
`;

export const Keyboard = styled.KeyboardAvoidingView``;

export const Title = styled.Text`
  font-size: 45px;
  font-family: 'NotoSansBold';
  color: #f2ab25;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SendButton = styled.TouchableOpacity`
  width: 220px;
  background-color: #f2ab25;
  border-radius: 25px;
  padding: 10px;
  margin-top: 30px;
`;

export const SendText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export const InputContainer = styled.View`
  width: 300px;
  margin-top: 30px;
  border: 1px solid #999999;
  border-radius: 10px;
`;

export const InputCadastro = styled.TextInput`
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  color: #696969;
`;
export const ButtonVoltar = styled.TouchableOpacity`
  width: 220px;
  background-color: #fff;
  border: 1px solid #f2ab25;
  border-radius: 25px;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const TextVoltar = styled.Text`
  color: #f2ab25;
  text-align: center;
  font-weight: bold;
`;

export const ContainerCheckbox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: 20px;
`;
