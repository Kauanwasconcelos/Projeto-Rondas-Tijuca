import axios from 'axios';

const encerraRonda = async idRonda => {
  try {
    const resposta = await axios.post(
      'http://192.168.9.247:9010/ronda/rondaStop',
      {
        idRonda: idRonda,
      },
    );
    if (resposta.data.success == true) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
};

export default encerraRonda;
