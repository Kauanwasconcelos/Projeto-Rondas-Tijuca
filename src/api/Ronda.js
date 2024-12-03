import axios from 'axios';

class Ronda {
  constructor() {
    axios.defaults.baseURL = 'http:192.168.9.247:9010/ronda/';
  }

  async createAndReturn() {
    const resposta = await axios.get('/createAndReturn');
    


    return resposta
  }
}
