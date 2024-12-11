const defineRondaAtual = async (realm, idRonda) => {
  let ronda = await realm.objectForPrimaryKey('rondaStatus', 1);
  // let ronda = await realm.objects("ronda")
  console.log(ronda);
  if (!ronda) {
    realm.write(async () => {
      console.log('caindo aqui');
      const write = await realm.create('rondaStatus', {
        _id: 1,
        status: 0,
      });
      console.log(write);
      console.log('teste');
      ronda.status = idRonda;
      setrAtual(ronda.status);
    });
  } else {
    realm.write(() => {
      ronda.status = idRonda;
      setrAtual(ronda.status);
      console.log(ronda.status);
    });
  }
};

export default defineRondaAtual;
