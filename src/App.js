import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import AppNavigator from './navigation/AppNavigator'; // Navegação do seu app
import theme from './theme/theme'; // Arquivo de tema compartilhado

export default function App() {
  return (
    <PaperProvider theme={theme}> {/* Provedor de tema do React Native Paper */}
      <ThemeProvider theme={theme}> {/* Provedor de tema para Styled Components */}
        <AppNavigator /> {/* Componente de navegação */}
      </ThemeProvider>
    </PaperProvider>
  );
}
