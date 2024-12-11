// components/home/Header.js
import React from 'react';
import Logo2 from '../Logo2'; // Componente da Logo
import {HeaderContainer, HeaderText} from '../../styles/Home/HeaderStyle'; // Importa os estilos

const Header = ({name}) => {
  return (
    <HeaderContainer>
      <Logo2 /> {/* Logo fica à esquerda */}
      <HeaderText>{name}</HeaderText> {/* Nome do vigia à direita */}
    </HeaderContainer>
  );
};

export default Header;
