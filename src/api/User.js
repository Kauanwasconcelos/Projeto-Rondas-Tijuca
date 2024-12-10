import axios from 'axios';

class User{
  async login(cpf, senhadeUsuario) {
    try {
      const response = await axios.post('http://192.168.9.247:9010/login/loginHandle', {
        cpf,
        senhadeUsuario,
      });
  
      
  
      if (response.data.success == true) {
        // console.log(response.data.success)  
        return response.data
      } else {
        throw new Error('Resposta inválida do servidor');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      throw error; 
    }
  } 
  




}


export default User
