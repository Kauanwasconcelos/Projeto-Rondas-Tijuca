import styled from "styled-components/native";

export const Container = styled.View`
border-bottom-width:1px ;
margin-bottom: 20px;

`


export const SaudacaoText = styled.Text`
color: ${({ theme }) => theme.colors.text};
text-transform: uppercase;
text-align: center;
font-size: 22px;
font-family:Poppins-SemiBold;
padding:5px;  


`

export const SaudacaoText2 = styled.Text`
padding: 10px;  
margin-bottom: 10px;
color: ${({ theme }) => theme.colors.text};
text-align: center;
font-size: 25px;
font-family:Poppins-Regular;
`