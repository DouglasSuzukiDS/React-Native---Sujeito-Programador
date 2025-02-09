import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   background-color: #121212;
`

type TitleProps = {
   cor: string;
}

export const Title = styled.Text<TitleProps>`
   color: ${props => props.cor};
   font-size: 25px;
`

export const Name = styled.Text`
   color: #FFF;
   font-size: 20px;
`

export const CustomButton = styled.TouchableOpacity`
   background-color: #DDD;
   padding: 5px;
   border-radius: 5px;
   width: 90%;
   justify-content: center;
   align-items: center;
`

export const TextButton = styled.Text`
   color: #000;
   font-size: 20px;
`