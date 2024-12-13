const lerRondaAtual = async realm => {
  let ronda = await realm.objectForPrimaryKey('rondaStatus', 1);
  // const rondaRealmVerify = typeof(ronda)
  console.log(ronda)
  if (ronda === null) {
    realm.write(async () => {
      console.log('caindo aqui');
      const write = await realm.create('rondaStatus', {
        _id: 1,
        status: 0,
      });
      lerRondaAtual()
    });
  } else {
    return ronda.status;
  }
};

export default lerRondaAtual; // Exportando a função como default
