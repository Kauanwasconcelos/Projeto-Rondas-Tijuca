// components/home/Header.js
import React from 'react';
import {Image, View} from 'react-native';
import {HeaderContainer, HeaderText, HeaderTitle} from '../../styles/Home/HeaderStyle'; // Importa os estilos
import {Button, Text} from 'react-native-paper';
import {useState} from 'react';

const Header = ({name, setReload, reload}) => {
  return (
    <HeaderContainer>
      <HeaderTitle>
      <Image
          source={require('../../../assets/img/logotijucapng.png')}
          style={{width: 80, height: 80}}
        />
        <HeaderText>{name}</HeaderText> {/* Nome do vigia à direita */}
    
      </HeaderTitle>


      <View>
        <Button
          icon="reload"
          mode="contained"
          onPress={() => {
            setReload(!reload);
            console.log('deu certo recarregar');
          }}>
          {' '}
          <Text>Recarregar</Text>
        </Button>
      </View>
    </HeaderContainer>
  );
};

export default Header;
