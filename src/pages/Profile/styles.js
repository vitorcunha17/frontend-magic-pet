import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0px 15px;
  align-items: center;
`;

export const ContainerTitle = styled.View`
  align-items: center;
  align-content: center;
`;

export const Title = styled.Text`
  font-size: 45px;
  font-family: 'NotoSansBold';
  color: #f2ab25;
  text-align: center;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 220px;
  background-color: #f2ab25;
  border-radius: 25px;
  padding: 10px;
  margin-top: 30px;
`;

export const CadastroButton = styled.TouchableOpacity`
  width: 220px;
  background-color: #FFF;
  border: 1px solid #f2ab25;
  border-radius: 25px;
  padding: 10px;
  margin-top: 15px;
`;

export const CadastroText = styled.Text`
  color: #f2ab25;
  text-align: center;
  font-weight: bold;
`;

export const LoginText = styled.Text`
  color: #FFF;
  text-align: center;
`;

export const InputContainer = styled.View`
  width: 300px;
  margin-top: 30px;
  border: 1px solid #999999;
  border-radius: 10px;
  height: 50px;
`;

export const InputLogin = styled.TextInput`
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  color: #696969;
`;

export const AboutButton = styled.TouchableOpacity`
  width: 220px;
  background-color: #999;
  border-radius: 25px;
  padding: 10px;
  margin-top: 15px;
`;
