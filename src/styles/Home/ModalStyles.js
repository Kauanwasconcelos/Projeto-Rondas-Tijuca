import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Estilos para o Modal

export const CenteredView = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalView = styled.View`
  width: 100%;
  height: ${({isModalA}) => (isModalA ? hp('45%') : hp('50%'))}; /* Proporcional à altura da tela */
  background-color: white;
  padding: ${hp('3%')}px; /* Ajuste do padding para dispositivos menores */
  align-items: center;
  border-top-left-radius: ${wp('5%')}px;
  border-top-right-radius: ${wp('5%')}px;
  margin-top: ${({isModalA}) => (isModalA ? hp('5%') : 0)};
`;

export const Logo = styled.Image`
  width: ${({isModalA}) => (isModalA ? wp('30%') : wp('25%'))}; /* Ajuste proporcional */
  height: ${({isModalA}) => (isModalA ? hp('15%') : wp('20%'))}; /* Ajuste proporcional */

`;

export const Title = styled.Text`
  font-size: ${({isModalA}) => (isModalA ? hp('3.5%') : wp('6%'))}; /* Ajuste dinâmico de tamanho */
  margin: ${hp('1%')}px;
  font-family: 'FuturaBold';
  font-weight: 900;
  text-align: center;
`;

export const Paragrafo = styled.Text`
  font-size: ${wp('4.5%')}px; /* Ajuste de tamanho proporcional à largura */
  margin: ${hp('1%')}px;
  text-align: center;
`;

export const SimButton = styled.TouchableOpacity`
  width: ${wp('80%')}; /* Proporcional à largura da tela */
  min-height: ${hp('7%')}; /* Proporcional à altura da tela */
  border-radius: 10px;
  margin-top: ${hp('4%')};
  background-color: ${({isModalA}) => (isModalA ? '#2CD402' : '#F9102C')};
  justify-content: center;
  align-items: center;
`;

export const SimButtonText = styled.Text`
  color: white;
  text-align: center;
  margin: auto;
  font-weight: 900;
  font-size: ${wp('4.5%')}; /* Tamanho de texto ajustado */
`;

export const NaoButton = styled.TouchableOpacity`
  width: ${wp('80%')}; /* Proporcional à largura da tela */
  min-height: ${hp('7%')}; /* Proporcional à altura da tela */
  border-radius: 10px;
  margin-top: ${hp('2%')};
  border-color: #292929;
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;

export const NaoButtonText = styled.Text`
  color: #292929;
  text-align: center;
  margin: auto;
  font-weight: 900;
  font-size: ${wp('4.5%')}; /* Tamanho de texto ajustado */
`;
