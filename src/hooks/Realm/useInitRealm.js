const ronda = require ('../../../rondaRealm.json')
import Realm from 'realm';

const initializeRealm = async () => {
    try {
      const realmInstance = await Realm.open({
        path: 'tijucaRonda',
        schema: [ronda],
      });
      
      return realmInstance
    } catch (e) {
      console.log(e);
    }
  };

  export default initializeRealm;