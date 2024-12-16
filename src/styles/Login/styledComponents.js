import styled from 'styled-components/native';
import { TextInput as PaperInput, Button } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const LoginContainer = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
  justify-content: flex-end;
`;

export const FormContainer = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.surface};
  border-top-left-radius: ${wp('5%')}px;
  padding: ${hp('5%')}px;
  padding-bottom: ${hp('5%')}px;
`;

export const StyledTextInput = styled(PaperInput)`
  margin-bottom: ${hp('2%')}px;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const StyledButton = styled(Button).attrs({
  contentStyle: {
    height: hp('6%'),
  },
})`
  margin-top: ${hp('2%')}px; 
  padding: 0 ${wp('4%')}px; 
  width: ${wp('60%')}; 
  align-self: center;
  height: ${hp('6%')}; 
`;
