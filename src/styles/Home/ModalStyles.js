import styled from 'styled-components/native';

// Estilos para o Modal

export const CenteredView = styled.View`
  width: 100%;
  min-height: 100%;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalView = styled.View`
  width: 100%;
  height: 50%;
  background-color: white;
  padding: 35px;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: ${({ isModalA }) => (isModalA ?  '20px': '0')};
`;

export const Logo = styled.Image`
  width: ${({ isModalA }) => (isModalA ?  '22.5%': 80)}px;
  height: ${({ isModalA }) => (isModalA ? '19%': 80 )}px;
`;

export const Title = styled.Text`
  font-size: 25px;
  margin: 10px;
  font-family: 'FuturaBold';
  font-weight: 900;
  font-size: ${({ isModalA }) => (isModalA ? '20px' : '25px')};
`;

export const Paragrafo = styled.Text`
  font-size: 15px;
  margin: 5px;
  text-align: center;
`;

export const SimButton = styled.TouchableOpacity`
  width: 90%;
  min-height: 6%;
  border-radius: 10px;
  margin-top: 60px;
  background-color: ${({ isModalA }) => (isModalA ? '#2CD402' : '#F9102C')};
`;

export const SimButtonText = styled.Text`
  color: white;
  text-align: center;
  margin: auto;
  font-weight: 900;
`;

export const NaoButton = styled.TouchableOpacity`
  width: 90%;
  min-height: 6%;
  border-radius: 10px;
  margin-top: 20px;
  border-color: #292929;
  border-width: 1px;
`;

export const NaoButtonText = styled.Text`
  color: #292929;
  text-align: center;
  margin: auto;
  font-weight: 900;
`;
