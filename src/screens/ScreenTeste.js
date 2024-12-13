import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

const ReloadPage = () => {
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(!reload); // Alterna o valor do estado para forçar o recarregamento
  };

  const eita = ()=>{
    console.log("Clicou")
    return <Text>
      Clicou
    </Text>
  }

  return (
    <View key={reload ? 'reload-true' : 'reload-false'} style={styles.container}>
      <TouchableOpacity onPress={handleReload}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Substitua pela sua logo
          style={styles.logo}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Clique na logo para recarregar a página!</Text>

    <Button
    icon="reload"
    mode="contained"
    onPress={eita}

   
    
    
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
});

export default ReloadPage;
