// hooks/useLogin.js
import {useState} from 'react';
import {validarCpf, validarSenha} from '../utils/validate'; // Importando as validações
import User from '../api/User';

const useLogin = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [errorCpf, setErrorCpf] = useState('');
  const [errorSenha, setErrorSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const instancia = new User();

  const requestLogin = async () => {
    setErrorCpf('');
    setErrorSenha('');

    // Validação dos campos de CPF e Senha
    const erroCpf = validarCpf(cpf);
    const erroSenha = validarSenha(senha);

    // Se houver erro, exibe a mensagem e não continua
    if (erroCpf || erroSenha) {
      setErrorCpf(erroCpf);
      setErrorSenha(erroSenha);
      return;
    }

    // Caso a validação esteja ok, inicia o processo de login
    setIsLoading(true);
    try {
      const resposta = await instancia.Login(cpf, senha);
      console.log(resposta);
      setIsLoading(false);
      if (resposta == true) {
        console.log('cai aqui');
        return true;
      } else {
        return false;
      }
    } catch (err) {
      setIsLoading(false);
      setErrorCpf('Erro ao fazer login. Tente novamente.');
      console.error('Erro:', err);
    }
  };

  return {
    cpf,
    setCpf,
    senha,
    setSenha,
    requestLogin,
    isLoading,
    errorCpf,
    errorSenha,
  };
};

export default useLogin;