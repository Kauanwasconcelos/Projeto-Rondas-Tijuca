// components/login/Welcome.js
import React from 'react';
import { SaudacaoText, ContainerSaudacao, SaudacaoText2, Container } from '../../styles/Login/Saudacao.styles';

const Welcome = () => {
  return (
    <>
      <Container>
        <SaudacaoText>
          Bem-vindo novamente
        </SaudacaoText>
      </Container>
      <SaudacaoText2>
        Iniciar Sessão
      </SaudacaoText2>
    </>
  );
};

export default Welcome;
