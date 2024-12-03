// components/Logo.js
import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

// Estilo para a logo
const LogoContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const Logo2 = () => {
  return (
    <LogoContainer>
      <Image 
        source={require('../../assets/img/logotijuca2.png')}  // Substitua com o caminho correto da sua logo
        style={{ width: '100%', height: '100%' }}
        resizeMode="contain"
      />
    </LogoContainer>
  );
};

export default Logo2;
