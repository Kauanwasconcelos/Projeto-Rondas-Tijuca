import axios from 'axios';

const iniciaRonda = async (idRonda, idUsuario) => {
  try {
    const resposta = await axios.post(
      'http://192.168.9.247:9010/ronda/rondaBegin',
      {
        idRonda: idRonda,
        idUsuario: idUsuario,
      },
    );
    console.log(resposta.data);
    if (resposta.data.success == true) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default iniciaRonda;
