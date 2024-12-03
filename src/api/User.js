import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

class User {
  constructor() {}

  async Login(cpf, senha) {
    try {
      const resposta = await axios.post("http://192.168.9.247:9010/login/loginHandle", {
        cpf: cpf,
        senhadeUsuario: senha,
      });

      if (resposta.data.success) {
        console.log("SUCESSO")
        await AsyncStorage.setItem('userData', JSON.stringify(resposta.data));
        return true;
      } else {
        return { sucesso: false, mensagem: resposta.data };
      }
    } catch (e) {
      
      console.error("Erro ao realizar o login", e);
      return { sucesso: false, mensagem: "Erro ao conectar com o servidor" };
    }
  }

  // Função para fazer logout
  static logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken'); 
    } catch (e) {
      console.error("Erro ao realizar o logout", e);
    }
  };
}

module.exports = User;