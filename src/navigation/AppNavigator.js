import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper'; 
import { ThemeProvider } from 'styled-components/native'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import theme from '../theme/theme'; 

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(null); 

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          setIsLoggedIn(true); 
        } else {
          setIsLoggedIn(false); 
        }
      } catch (e) {
        console.error('Erro ao verificar o status de login:', e);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    return null; // Retorna null enquanto o estado de login está sendo verificado
  }

  return (
    <PaperProvider theme={theme}>  {/* Envolvendo com PaperProvider */}
      <ThemeProvider theme={theme}> {/* Envolvendo com ThemeProvider */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Login"}>
            <Stack.Group screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="Login" component={HomeScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}
