// components/home/Header.js
import React from 'react';
import {Image, View} from 'react-native';
import {HeaderContainer, HeaderText} from '../../styles/Home/HeaderStyle'; // Importa os estilos




const Header = ({name}) => {



  return (
    <HeaderContainer>
     <View>
     <Image
        source={require('../../../assets/img/logotijucapng.png')}
        style={{width: 80, height: 80}}
      />
     </View>

      <HeaderText>{name}</HeaderText> {/* Nome do vigia à direita */}
    </HeaderContainer>
  );
};

export default Header;
