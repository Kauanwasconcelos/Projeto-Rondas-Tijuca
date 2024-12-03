// components/LogoutButton.js
import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import User from '../api/User'; 

const LogoutButton = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await User.logout();
    navigation.navigate('Login'); // Navega para a tela de login após o logout
  };

  return (
    <Button title="Logout" onPress={handleLogout} />
  );
};

export default LogoutButton;
