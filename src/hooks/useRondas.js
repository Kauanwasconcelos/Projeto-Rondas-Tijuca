import axios from 'axios';

const reqData = async () => {
  try {
    const resposta = await axios.get(
      'http://192.168.9.247:9010/ronda/createAndReturn',
    );
    return resposta.data;
  } catch (e) {
    console.log('Error fetching data: ', e);
  }
};

export default reqData;
