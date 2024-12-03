import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const DropdownContainer = styled.View`
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 10px;
`;

export const PlaceholderText = styled.Text`
  font-size: 16px;
  color: #aaa;
`;

export const SelectedText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const ItemContainer = styled.View`
  padding: 10px;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  color: ${({ status }) => (status === 'concluído' ? 'green' : 'red')};
`;
