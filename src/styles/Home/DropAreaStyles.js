import styled from 'styled-components/native';

export const DropContainer = styled.View`
  margin: 10px 20px;
  padding: 0px 20px;
`;
export const Drop = styled.TouchableOpacity`
  width: 200px;
  height: 40px;

  padding: 15px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 8px;
`;
