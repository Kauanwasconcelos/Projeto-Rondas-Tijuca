import styled from 'styled-components/native';

// Lista View
export const ListaView = styled.View`
  height: 70%;
  width: 100%;
  text-align: center;
  border-radius: 10px;
`;

export const List = styled.FlatList`
  margin: auto;
  width: 90%;
`;

// Botão View
export const BView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  width: 100%;
  height: 90px;
  margin: 10px auto;
  border-radius: 10px;
  margin-top: 3%;
`;

export const B1 = styled.TouchableOpacity`
  flex: 1;
  width: 78%;
  height: 100%;
  background-color: #fff;
  justify-content: center;
  border-radius: 10px;
`;

export const TB1 = styled.Text`
  margin-left: 10%;
  font-family: FuturaBold;
  font-size: 18px;
`;

export const B2 = styled.TouchableOpacity`
  width: 13%;
  height: 70%;
  border-radius: 10px;
  background-color: #17bf52;
  margin: 20px;
`;

export const B2Stop = styled.TouchableOpacity`
  width: 13%;
  height: 70%;
  border-radius: 10px;
  background-color: #ff464f;
  margin: 20px;
`;
