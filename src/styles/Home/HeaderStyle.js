// components/home/HeaderStyles.js
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) =>
    theme.colors.surface}; /* Usa a cor primária do tema */
  border-radius: 10px;
`;


export const HeaderTitle = styled.Text`
font-size: 18px;
font-weight: bold;
color: ${({theme}) => theme.colors.text};
margin-left: 10px;
align-items: center;

`
export const HeaderText = styled.Text`
  color: ${({theme}) => theme.colors.text}; /* Usa a cor de texto do tema */
  font-size: 14px;

  font-family: Poppins-Light;
  text-transform: uppercase;
`;

export const TextButton = styled.Text`
color: white;

`