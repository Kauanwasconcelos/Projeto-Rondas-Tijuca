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
  NaoButtonText
} from '../../styles/Home/ModalStyles'; // Importando os estilos do ModalStyles
import { View, Text } from 'react-native';


const ModalComponent = ({ isVisible, onClose, prop, defineRondaAtual}) => {
  const isModalA = prop[1] !== 0;
    console.log(isVisible)
  return ( 
    <Modal
      isVisible={isVisible}
      animationOut={'bounceOut'}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      animationInTiming={800}
      animationOutTiming={800}
    >
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
          <SimButton isModalA={isModalA} onPress={() => (isModalA ? encerraRonda() : iniciaRonda(prop[0], 1) )}>
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
