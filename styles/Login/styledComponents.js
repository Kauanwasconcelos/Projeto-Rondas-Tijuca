import styled from 'styled-components/native';
import { TextInput as PaperInput, Button } from 'react-native-paper';


export const LoginContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
  justify-content: flex-end;
`;

export const FormContainer = styled.View`
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.surface};
  border-top-left-radius: 20px;
  padding: 40px;
  padding-bottom: 40px;
`;

export const StyledTextInput = styled(PaperInput)`
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const StyledButton = styled(Button).attrs({
 
})`
  margin-top: 20px;
  padding: 8px 16px;  
  width: 60%;  
  align-self: center; 
  height: 50px;  
`;
