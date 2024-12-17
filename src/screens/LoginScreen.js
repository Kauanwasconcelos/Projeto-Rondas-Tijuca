
import { useNavigation } from '@react-navigation/native';
import { LoginContainer, FormContainer } from '../styles/Login/styledComponents';
import Logo from '../components/Logo';
import Welcome from '../components/login/Welcome';
import LoginForm from '../components/login/LoginForm';
import useLogin from '../hooks/useLogin';




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
  } = useLogin();


  return (
    <LoginContainer>
      <Logo />
      <FormContainer>
        <Welcome />
        <LoginForm 
        cpf={cpf}
        setCpf={setCpf}
        senha={senha}
        setSenha={setSenha}
        onSubmit={requestLogin} // Passando a função de login para o formulário
        isLoading={isLoading}
        errorCpf={errorCpf}
        errorSenha={errorSenha}
      />
      </FormContainer>
    </LoginContainer>
  );
};

export default LoginScreen;
