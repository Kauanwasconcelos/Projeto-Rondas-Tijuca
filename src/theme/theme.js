import {DefaultTheme} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#224479', // Azul principal
    surface: '#ffffff',
    text: '#000000', // Texto branco
    placeholder: '#ffffff', // Placeholder branco
  },
  roundness: 8, // Cantos arredondados
};

export default theme;
