import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native'; // Importa o hook de navegação
import {
  StyledTextInput,
  StyledButton,
} from '../../styles/Login/styledComponents';
import HomeScreen from '../../screens/HomeScreen';

const LoginForm = ({
  cpf,
  setCpf,
  senha,
  setSenha,
  onSubmit,
  isLoading,
  errorCpf,
  errorSenha,
}) => {
  const navigation = useNavigation();

  const handleLogin = async () => {
    const success = await onSubmit();
    console.log(success)
    if (success == true) {
      console.log("Navegando")
      navigation.dispatch(CommonActions.reset({index:0,routes:[{name:'Home'}]}))
    }
  };

  return (
    <View>
      {/* Campo CPF */}
      <StyledTextInput
        label="CPF"
        mode="outlined"
        value={cpf}
        onChangeText={setCpf}
        error={!!errorCpf} // Marca o campo como erro caso haja um erro de CPF
      />
      {/* Exibe mensagem de erro para CPF */}
      {errorCpf && <Text style={{color: 'red', marginTop: 5}}>{errorCpf}</Text>}

      {/* Campo Senha */}
      <StyledTextInput
        label="Senha"
        mode="outlined"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        error={!!errorSenha} // Marca o campo como erro caso haja um erro de Senha
      />
      {/* Exibe mensagem de erro para Senha */}
      {errorSenha && (
        <Text style={{color: 'red', marginTop: 5}}>{errorSenha}</Text>
      )}

      {/* Botão de Login */}
      <StyledButton mode="contained" onPress={handleLogin} disabled={isLoading}>
        {isLoading ? <ActivityIndicator size="small" color="#fff" /> : 'Entrar'}
      </StyledButton>
    </View>
  );
};

export default LoginForm;
