// screens/LoginScreen.js
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Dimensions } from 'react-native';
import { LoginContainer, FormContainer } from '../styles/Login/styledComponents';
import Logo from '../components/Logo';
import Welcome from '../components/login/Welcome';
import LoginForm from '../components/login/LoginForm';
import useLogin from '../hooks/useLogin';

const { height } = Dimensions.get('window'); // Pegando a altura da tela

const LoginScreen = () => {
  const {
    cpf,
    setCpf,
    senha,
    setSenha,
    requestLogin,
    isLoading,
    errorCpf,
    errorSenha,
  } = useLogin();  // Usando o hook de login

  return (
    <LoginContainer>
      <Logo />
      <FormContainer style={{ height: height * 0.6 }}>  {/* Definindo 60% da altura da tela */}
        <Welcome />
        <LoginForm
          cpf={cpf}
          setCpf={setCpf}
          senha={senha}
          setSenha={setSenha}
          onSubmit={requestLogin}  
          isLoading={isLoading}
          errorCpf={errorCpf}
          errorSenha={errorSenha}
        />
      </FormContainer>
    </LoginContainer>
  );
};

export default LoginScreen;
