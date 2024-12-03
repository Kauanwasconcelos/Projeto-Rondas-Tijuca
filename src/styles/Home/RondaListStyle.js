import styled from 'styled-components/native';

export const RondaContainer = styled.View`
  width: 80%;
  padding: 20px;
  background-color: red ;
`;


export const RondaTitle = styled.Text`
  color: ${({theme}) => theme.colors.text};
`;
