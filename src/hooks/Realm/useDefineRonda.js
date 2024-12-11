const lerRondaAtual = async realm => {
  let ronda = await realm.objectForPrimaryKey('rondaStatus', 1);
  if (ronda == undefined) {
    realm.write(async () => {
      console.log('caindo aqui');
      const write = await realm.create('rondaStatus', {
        _id: 1,
        status: 0,
      });
      console.log(write);
      console.log('teste');
      return ronda.status;
    });
  } else {
    return ronda.status;
  }
};

export default lerRondaAtual; // Exportando a função como default
