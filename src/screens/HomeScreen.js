// screens/HomeScreen.js
import React from 'react';
import {Text} from 'react-native-paper';
import Header from '../components/home/Header'; // Importa o Header
import {HomeContainer} from '../styles/Home/HomeStyles';
import {useFocusEffect} from '@react-navigation/native';
import RondaList from '../components/home/RondaList';

const HomeScreen = () => {
  const {requestRondas } = requestRondas()
  return (
    <>
      <HomeContainer>
        <Header name="VIGIA" />
        <RondaList />
      </HomeContainer>
    </>
  );
};
export default HomeScreen;
