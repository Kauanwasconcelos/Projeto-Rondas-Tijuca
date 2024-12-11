// Função para validar CPF
export const validarCpf = cpf => {
  const cpfRegex = /^\d{11}$/;
  if (!cpf || !cpfRegex.test(cpf)) {
    return 'O login precisa ter pelo 11 digitos';
  } else {
    return '';
  }

  // const cpfArr = cpf.split('');
  // const sum = cpfArr.reduce((acc, val, idx) => acc + val * (10 - idx), 0);
  // const check = (sum * 10) % 11 === parseInt(cpfArr[9]);
  // return check ? "" : "CPF inválido.";
};

export const validarSenha = senha => {
  if (!senha || senha.length < 6) {
    return true;
  }
  return '';
};
