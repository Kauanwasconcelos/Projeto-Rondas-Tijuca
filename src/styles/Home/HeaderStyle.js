// components/home/HeaderStyles.js
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${({theme}) =>
    theme.colors.surface}; /* Usa a cor primária do tema */
  border-radius: 10px;
`;

export const HeaderText = styled.Text`
  color: ${({theme}) => theme.colors.text}; /* Usa a cor de texto do tema */
  font-size: 18px;
  font-family: Poppins-Light;
  text-transform: uppercase;
`;
