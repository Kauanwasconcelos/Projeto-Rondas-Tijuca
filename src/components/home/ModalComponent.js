import React from 'react';
import Modal from 'react-native-modal';
import {
  CenteredView,
  ModalView,
  Logo,
  Title,
  Paragrafo,
  SimButton,
  SimButtonText,
  NaoButton,
  NaoButtonText,
} from '../../styles/Home/ModalStyles'; // Importando os estilos do ModalStyles
import initRonda from '../../hooks/initRonda';
import stopRonda from '../../hooks/stopRonda';
import {ToastAndroid} from 'react-native';

const ModalComponent = ({isVisible, onClose, prop, defineRondaAtual}) => {
  const isModalA = prop[1] !== 0;

  const iniciaRonda = async (idRonda, idUsuario) => {
    const playRonda = await initRonda(idRonda, idUsuario);
    console.log(playRonda);
    if (playRonda === true) {
      ToastAndroid.show('Ronda iniciada com sucesso', ToastAndroid.SHORT);
      defineRondaAtual(prop[1]);
      onClose();
    } else {
      ToastAndroid.show('Ronda já iniciada', ToastAndroid.SHORT);
      defineRondaAtual(prop[1]);
      onClose();
    }
  };

  const encerraRonda = async (idRonda) => {
        const pararRonda = await stopRonda(idRonda);
        console.log(pararRonda);
        if (pararRonda === true) {
          ToastAndroid.show('Ronda encerrada com sucesso', ToastAndroid.SHORT);
          defineRondaAtual(0);
          onClose();
        }}

  console.log(prop[0]);
  return (
    <Modal
      isVisible={isVisible}
      animationOut={'bounceOut'}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      animationInTiming={300}
      animationOutTiming={300}>
      <CenteredView>
        <ModalView isModalA={isModalA}>
          <Title isModalA={isModalA}>
            {isModalA ? 'Quer iniciar a ronda?' : 'Quer encerrar a ronda?'}
          </Title>
          <Paragrafo>
            {isModalA
              ? 'Esta ação inicia a ronda'
              : 'Esta ação finaliza a ronda e não pode ser revertida'}
          </Paragrafo>
          <SimButton
            isModalA={isModalA}
            onPress={() =>
              isModalA ? iniciaRonda(prop[0], 1) : encerraRonda(prop[0])
            }>
            <SimButtonText>Sim</SimButtonText>
          </SimButton>
          <NaoButton onPress={onClose}>
            <NaoButtonText>Não</NaoButtonText>
          </NaoButton>
        </ModalView>
      </CenteredView>
    </Modal>
  );
};

export default ModalComponent;
