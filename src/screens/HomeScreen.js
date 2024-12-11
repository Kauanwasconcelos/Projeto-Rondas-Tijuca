// screens/HomeScreen.js
import React, {useState} from 'react';
import useRondas from '../hooks/useRondas';
import {
  ListaView,
  List,
  BView,
  B1,
  TB1,
  B2,
  B2Stop,
} from '../styles/Home/RondaListStyle';

import Header from '../components/home/Header';
import {HomeContainer} from '../styles/Home/HomeStyles';
import {
  CommonActions,
  NavigationContainer,
  useFocusEffect,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ModalComponent from '../components/home/ModalComponent';

import useInitRealm from '../hooks/Realm/useInitRealm';
import useRealmRonda from '../hooks/Realm/useRealmRonda';
import useDefineRonda from '../hooks/Realm/useDefineRonda';

const Stack = createNativeStackNavigator();
const HomeScreen = ({navigation}) => {
  const [rondas, setRondas] = useState([]);
  const [modalVisible, setModalVisible] = useState([]);
  const [reload, setReload] = useState();
  const [rondaAtual, setRondaAtual] = useState();
  const [realm, setRealm] = useState(null);

  const onClose = () => {
    setReload(!reload);
    setModalVisible(null);
  };
  useFocusEffect(
    React.useCallback(() => {
      const carregaRonda = async () => {
        try {
          const respostaHookRondas = await useRondas();

          setRondas(respostaHookRondas);
        } catch (e) {
          console.log(e);
        }
      };

      const initRealm = async () => {
        const iniciaRealm = await useInitRealm();
        setRealm(iniciaRealm);
      };

      const defineRondaAtual = async () => {
        const rondaAtual = await useDefineRonda(realm);
        console.log(rondaAtual);
        setRondaAtual(rondaAtual);
      };
      defineRondaAtual();
      initRealm();
      carregaRonda();
    }, [reload]),
  );

  return (
    <>
      <HomeContainer>
        <Header name="VIGIA" />
        <ListaView>
          <List
            data={rondas}
            renderItem={({item}) => (
              <BView
                style={
                  item.horaFim !== '' ? {display: 'none'} : {display: 'flex'}
                }>
                <B1>
                  <TB1>{item.nomeRota}</TB1>
                </B1>
                {item.idUsuario ? (
                  <B2Stop
                    onPress={() => {
                      setModalVisible(item.idRonda);
                    }}
                  />
                ) : (
                  <B2
                    onPress={() => {
                      setModalVisible(item.idRonda);
                    }}
                  />
                )}
                {modalVisible === item.idRonda && (
                  <ModalComponent
                    isVisible={true}
                    onClose={onClose}
                    defineRondaAtual={useRealmRonda}
                    prop={[item.idRonda, rondaAtual]}
                  />
                )}
              </BView>
            )}
            keyExtractor={item => {
              item.idRonda;
            }}
          />
        </ListaView>
      </HomeContainer>
    </>
  );
};
export default HomeScreen;
